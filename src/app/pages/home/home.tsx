import Navbar from "../../molecules/navbar/navbar";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/theme/themeContext";
import CardBlog from "../../molecules/card-blog/card-blog";
import { CmsService } from "../../../services/cms.service";
import { CardBlogItem } from "../../types/cardBlog.types";
import Image from "../../atom/image/image";

export default function Home() {

    // Dark Mode
    const { isDarkMode } = useTheme();

    // State to cards blog list
    const [cardsBlogList, setCardsBlogList] = useState<CardBlogItem[]>([])

    /**
     * Effect to get cards blog list
     */
    useEffect(() => {
        void getCardsBlogData().then(r => r);
    }, []);

    /**
     * Function to get mock data for cardBlog list
     */
    async function getCardsBlogData() {
        try {
            const data = await CmsService.getCardBlogData();
            setCardsBlogList(data);
        } catch (error) {
            console.error('Error fetching card blog data:', error);
        }
    }

    return (
        <div className={`relative w-full h-fit flex flex-col items-start justify-start ${isDarkMode ? 'dark bg-home-dark text-primary-dark' : 'bg-home-light text-primary-light'}`}>
            <Navbar />
            <div className="mt-[64px] w-full flex flex-col px-[246px] box-border text-primary-light bg-home-light dark:bg-home-dark dark:text-primary-dark overflow-scroll">
                {/* CONTENT CONTAINER */}
                <div className="w-full h-full">
                    <div className="h-[520px] w-full flex items-center justify-between">
                        <div className="h-full w-full flex flex-col items-start justify-center">
                            <div className="flex items-end gap-2">
                                <h1 className="text-4xl font-bold">Hi,</h1>
                                <h1 className="text-5xl font-bold animate-wave">👋🏻</h1>
                            </div>                            
                            <h1 className="text-4xl font-bold">I'm a french fullstack developer.</h1>
                            <p className="text-m font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore facere repudiandae hic doloremque, sint debitis mollitia dicta, impedit asperiores ex non magni laboriosam ipsa illum voluptatum commodi in ducimus laborum.</p>
                        </div>
                        <div className="h-full w-full flex items-center justify-center">
                            <div className="relative flex items-center justify-center h-full w-full">
                                <div className="absolute z-[40] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-fit backdrop-blur-xl rounded-full overflow-hidden border-2 border-gray-500/20">
                                    <Image path="/images/alexis-memoji.png" alt="hand" className="size-[260px]" />
                                </div>
                                <div className="size-[180px] z-[2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[120px] w-full">
                        <div className="flex flex-col items-start justify-start">
                            <h1 className="text-2xl font-bold">About</h1>
                            <p className="text-m font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab veniam quos rem consectetur minima adipisci sequi dolore, ullam ducimus, provident culpa quis repudiandae, possimus dignissimos deleniti perspiciatis officiis laborum.</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="h-[120px] w-full">
                        <div className="flex items-cente justify-start">
                            <h1 className="text-2xl font-bold">Works</h1>
                        </div>
                    </div>
                    <div className="h-fit w-full mb-4">
                        <div className="flex flex-col items-cente justify-start">
                            <div>
                                <h1 className="text-2xl font-bold">Posts</h1>
                            </div>
                            <ul className="list-none flex flex-row items-center justify-start w-full mt-6 flex-wrap gap-[78px] flex-list">
                                {cardsBlogList.map((item, index) => (
                                    <li className="w-[288px] h-[340px]" key={index}>
                                        <CardBlog slug={item.slug} title={item.title} image={item.image} description={item.summary}></CardBlog>
                                    </li>
                            ))} 
                            </ul>
                        </div>
                    </div>
                    <div className="h-[520px] mb-[24px] rounded-xl w-full bg-[radial-gradient(100%_100%_at_50%_0%,_rgba(0,0,0,0.00)_0%,_rgba(0,0,0,0.00)_55%,_rgba(136,42,255,0.3)_66%,_rgba(162,88,255,_0.7)_80%,_#E0C8FF_100%)]">
                        Home test
                        <h1 className="bg-gradient-to-r from-[rgba(255,_255,_255,_0.40)] via-[#fff] to-[rgba(255,_255,_255,_0.40)] bg-clip-text text-center text-xl font-medium !leading-normal text-transparent xs:text-2xl sm:text-4xl md:text-5xl lg:text-[56px]">
                            Hello World Little Test
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
