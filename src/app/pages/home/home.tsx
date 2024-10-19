import Navbar from "../../molecules/navbar/navbar";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/theme/themeContext";
import CardBlog from "../../molecules/card-blog/card-blog";
import { CmsService } from "../../../services/cms.service";
import { CardBlogItem } from "../../types/cardBlog.types";
import { CardWorkItem } from "../../types/cardWork.types";
import Image from "../../atom/image/image";
import Footer from "../../molecules/footer/footer";
import CardWork from "../../molecules/card-work/card-work";

export default function Home() {

    // Dark Mode
    const { isDarkMode } = useTheme();

    // State to cards blog list
    const [cardsBlogList, setCardsBlogList] = useState<CardBlogItem[]>([]);

    // State to cards work list
    const [cardsWorkList, setCardsWorkList] = useState<CardWorkItem[]>([]);

    /**
     * Effect to get cards blog and article list
     */
    useEffect(() => {
        void getCardsBlogData().then(r => r);
        void getCardsWorkData().then(r => r);
    }, []);

    /**
     * Function to get data for cardBlog list
     */
    async function getCardsBlogData() {
        try {
            const data = await CmsService.getCardBlogData();
            setCardsBlogList(data);
        } catch (error) {
            console.error('Error fetching card blog data:', error);
        }
    }

    /**
     * Function to get data for cardWork list
     */
    async function getCardsWorkData() {
        try {
            const data = await CmsService.getCardWorkData();
            setCardsWorkList(data);
        } catch (error) {
            console.error('Error fetching card work data :', error);
        }
    }

    return (
        <div className={`relative w-full h-fit flex flex-col items-start justify-start ${isDarkMode ? 'dark bg-home-dark text-primary-dark' : 'bg-home-light text-primary-light'}`}>
            <Navbar />
            <div className="relative grid-background mt-[64px] w-full flex flex-col px-[246px] box-border text-primary-light bg-home-light dark:bg-home-dark dark:text-primary-dark overflow-scroll">
                    {/* Ellipsis */}
                    <div className="absolute right-[-180px] mix-blend-hard-light top-0 opacity-[0.9] bg-[#4d9beb] size-[356px] blur-[180px] rounded-full"></div>
                <div className="w-full h-full">
                    {/* SECTION HEROBANNER */}
                    <div className="h-[calc(100vh-64px)] w-full flex items-center justify-between">
                        {/* LEFT PART TEXT */}
                        <div className="h-full w-full flex flex-col items-start justify-center">
                            <div className="flex items-end gap-2">
                                <h1 className="text-6xl font-bold">Hi,</h1>
                                <h1 className="text-7xl font-bold animate-wave">👋🏻</h1>
                            </div>
                            <h1 className="text-5xl mt-2 font-bold">I'm Alexis Jobart a french fullstack developer.</h1>
                            <p className="text-m mt-2 font-normal">Love keep learning, clean design and create things.</p>
                            <ul className="flex gap-2 mt-4">
                                <li>
                                    <a href="https://www.linkedin.com/in/alexis-jobart-9340a516b/" target="_blank" className="btn-primary flex gap-1">
                                        <Image path="/icons/linkedin-logo-light.svg" className="size-4"></Image>
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/ajobart/" target="_blank" className="btn-primary flex gap-1">
                                        <Image path="/icons/github-logo-light.svg" className="size-4"></Image>
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:jobart.pro@gmail.com" target="_blank" className="btn-primary flex gap-1">
                                        <Image path="/icons/email-logo-light.svg" className="size-4"></Image>
                                        Get in touch
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* RIGHT PART MEMOJI */}
                        <div className="h-full w-[350px] flex items-center justify-center">
                            <div className="relative flex items-center justify-center h-full w-[350px]">
                                <div className="absolute z-[40] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-fit w-full">
                                    <Image path="/images/memoji-wink.png" alt="hand" className="size-[350px]" />
                                </div>
                                <div className=" z-[2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION ABOUT */}
                    <div className="h-fit w-full flex flex-col items-center justify-center mb-20 gap-12">
                        <h1 className="text-4xl font-bold">ABOUT</h1>
                        <div className="flex gap-12">
                            {/* LEFT PART */}
                            <div className="relative w-full flex flex-col gap-4">
                                {/* Skills section */}
                                <div className="flex flex-col gap-8 rounded-lg py-2 px-4 box-border backdrop-blur-md dark:bg-[#363C46]/40 bg-white/10 border border-gray-50/20">
                                    {/* Skills header */}
                                    <div className="flex flex-row gap-2 items-center justify-center">
                                        <p className="w-fit font-bold text-lg">Skills</p>
                                        <div className="w-full rounded-md h-[2px] bg-portfolio-blue-light dark:bg-portfolio-blue-dark/60"></div>
                                    </div>
                                    {/* Skills list */}
                                    <ul className="flex items-start justify-between gap-4">
                                        {/* Design */}
                                        <li className="flex flex-col gap-4">
                                            <p className="font-bold text-base">Design</p>
                                            <ul className="flex flex-col gap-2">
                                                <li className="flex items-center gap-1">
                                                    <Image className="size-[14px]" path={isDarkMode ? '/icons/figma-light.svg' : '/icons/figma-dark.svg'}></Image>
                                                    <p className="font-normal text-sm">figma</p>
                                                </li>
                                                <li>
                                                    <p className="font-normal text-sm">tailwind</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="flex flex-col gap-4">
                                            {/* Front-end */}
                                            <p className="font-bold text-base">Front-end</p>
                                            <ul className="flex flex-col gap-2">
                                                <li>
                                                    <p className="font-normal text-sm">typescript</p>
                                                </li>
                                                <li>
                                                    <p className="font-normal text-sm">react</p>
                                                </li>
                                                <li>
                                                    <p className="font-normal text-sm">angular</p>
                                                </li>
                                                <li>
                                                    <p className="font-normal text-sm">three.js</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="flex flex-col gap-4">
                                            {/* Back-end */}
                                            <p className="font-bold text-base">Back-end</p>
                                            <ul className="flex flex-col gap-2">
                                                <li>
                                                    <p className="font-normal text-sm">node.js</p>
                                                </li>
                                                <li>
                                                    <p className="font-normal text-sm">mySQL</p>
                                                </li>
                                                <li>
                                                    <p className="font-normal text-sm">fastify</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="flex flex-col gap-4">
                                            {/* Back-end */}
                                            <p className="font-bold text-base">Other</p>
                                            <ul className="flex flex-col gap-2">
                                                <li>
                                                    <p className="font-normal text-sm">git & github</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* Card section */}
                                <div className="h-fit w-full rounded-lg py-2 px-4 box-border backdrop-blur-md dark:bg-[#363C46]/40 bg-[#D5EFFF] border border-gray-50/20">
                                    <ul className="flex flex-row items-center justify-between">
                                        <li className="flex flex-col items-center justify-center gap-1">
                                            <p className="font-bold dark:text-portfolio-blue-dark text-portfolio-blue-light text-2xl">3+</p>
                                            <p className="font-medium text-white text-base">Years exp</p>
                                        </li>
                                        <li className="flex flex-col items-center justify-center gap-1">
                                            <p className="font-bold dark:text-portfolio-blue-dark text-portfolio-blue-light text-2xl">7+</p>
                                            <p className="font-medium text-white text-base">Missions finished</p>
                                        </li>
                                        <li className="flex flex-col items-center justify-center gap-1">
                                            <p className="font-bold dark:text-portfolio-blue-dark text-portfolio-blue-light text-2xl">3+</p>
                                            <p className="font-medium text-white text-base">Years exp</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* Ellipsis */}
                                <div className="absolute left-[-380px] bottom-[] opacity-[0.9] bg-blue-400 size-[356px] mix-blend-soft-light blur-[150px] rounded-full"></div>
                            </div>
                            {/* RIGHT PART */}
                            <div className="w-full flex flex-col items-start justify-start gap-6">
                                <p className="text-base font-normal">I grew up in Normandy, where I pursued business studies and obtained a Bachelor's degree. During my studies, I started coding websites in my spare time, which quickly became a passion. After graduating, I decided to follow what I truly love and enrolled in the "Le Wagon" bootcamp in Paris, where I perfected my development skills.</p>
                                <p className="text-base font-normal">For the past three years, I've been based in Paris and have been making a living as a developer. I currently collaborate with the talented team at the FORKEYS agency, where I continue to grow and evolve in my craft.</p>
                            </div>
                        </div>
                    </div>
                    {/* WORKS SECTION */}
                    <div className="h-fit w-full">
                        <div className="flex flex-col items-start justify-start mb-20 gap-8">
                            <div>
                                <h1 className="text-2xl font-bold">Works</h1>
                            </div>
                            <ul className="list-none flex flex-row items-center justify-start w-full flex-wrap gap-[78px] flex-list">
                                {cardsWorkList.map((item, index) => (
                                    <li className="w-[400px] h-[358px]" key={index}>
                                        <CardWork slug={item.slug} title={item.title} badges_list={item.badges_list} image={item.image} description={item.summary}></CardWork>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* POSTS SECTION */}
                    <div className="h-fit w-full mb-4">
                        <div className="flex flex-col items-start justify-start">
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
                    {/* Test radial gradient */}
                    {/* <div className="h-[520px] mb-[24px] rounded-xl w-full bg-[radial-gradient(100%_100%_at_50%_0%,_rgba(0,0,0,0.00)_0%,_rgba(0,0,0,0.00)_55%,_rgba(136,42,255,0.3)_66%,_rgba(162,88,255,_0.7)_80%,_#E0C8FF_100%)]">
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}
