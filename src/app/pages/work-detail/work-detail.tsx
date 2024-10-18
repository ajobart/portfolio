import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { CmsService } from "../../../services/cms.service";
import { CmsArticleType } from "../../types/cms.types";
import Navbar from "../../molecules/navbar/navbar";
import { useTheme } from "../../context/theme/themeContext";
import Image from "../../atom/image/image";
import CmsHtmlRenderer from "../../atom/cms-html-renderer/cms-html-renderer";
import { formatDate, scrollToTop } from "../../../services/helper.service";
import TableOfContent from "../../molecules/table-of-content/table-of-content";
import Footer from "../../molecules/footer/footer";

export default function WorkDetail() {

    const articleRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);
    const [articleHeight, setArticleHeight] = useState(0);

    // Theme
    const { isDarkMode } = useTheme();

    // Params
    const { slug } = useParams<{ slug: string }>();

    // States
    const [article, setArticle] = useState<CmsArticleType | null>(null);

    // Loading
    const [loading, setLoading] = useState(true);

    // Error
    const [error, setError] = useState<string | null>(null);

    // Set position of scroll to show the button
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    // State to keep button visible during the animation
    const [isVisible, setIsVisible] = useState(false);

    // State to control the position of the button
    const [buttonPosition, setButtonPosition] = useState("bottom-4");

    /**
     * Effect to show the scroll to top button when the user scrolls down
     */
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const footerTop = footerRef.current?.offsetTop || 0;
            const windowHeight = window.innerHeight;

            if (scrollTop > 300) {
                setShowScrollTopButton(true);
                setIsVisible(true);

                // Si le bouton approche le footer, change sa position
                if (scrollTop + windowHeight >= footerTop - 20) {
                    setButtonPosition("bottom-[80px]"); // Le place au-dessus du footer
                } else {
                    setButtonPosition("bottom-4"); // Le place en bas de l'écran
                }
            } else {
                setShowScrollTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
     * Effect to get the height of the article
     */
    useEffect(() => {
        if (articleRef.current) {
            // 222 is the height between the article and top of the page
            setArticleHeight(articleRef.current.offsetHeight - 222);
        }
    }, [article]);

    /**
     * Effect to handle visibility transition (wait for animation)
     */
    useEffect(() => {
        if (!showScrollTopButton) {
            // Wait for the slideDown animation (450ms)
            const timer = setTimeout(() => setIsVisible(false), 450);
            return () => clearTimeout(timer);
        }
    }, [showScrollTopButton]);

    /**
     * Effect to fetch the article
     */
    useEffect(() => {
        async function fetchArticle() {
            if (!slug) return;

            try {
                setLoading(true);
                const fetchedArticle = await CmsService.getWorkData(slug);
                if (fetchedArticle) {
                    setArticle(fetchedArticle);
                } else {
                    setError("Article not found");
                }
            } catch (err) {
                console.error("Error fetching article:", err);
                setError("Failed to load the article. Please try again later.");
            } finally {
                setLoading(false);
            }
        }

        fetchArticle();
        console.log('article :', article);
    }, [slug]);

    console.log('article 2 :', article)

    if (error) {
        return <div>{error}</div>;
    }

    if (loading) {
        return (
            <div className={`relative w-full min-h-screen flex flex-col ${isDarkMode ? 'dark bg-home-dark text-primary-dark' : 'bg-home-light text-primary-light'}`}>
                <Navbar />
                <main className="mt-[64px] w-full h-full flex flex-col px-4 md:px-8 lg:px-16 xl:px-[246px] box-border">
                    <div className="top-4 left-0 mt-4 h-full">
                        <a className="bg-transparent border-none flex items-center gap-2" href="/">
                            <Image path={isDarkMode ? '/icons/left-arrow-light.svg' : '/icons/left-arrow-dark.svg'} className="size-[14px]" />
                            Back
                        </a>
                    </div>
                    <div className="flex mt-[120px] items-center justify-center w-full h-full">
                        <Image path={isDarkMode ? '/icons/loader-light.svg' : '/icons/loader-dark.svg'} className="size-[38px]" />
                    </div>
                </main>
            </div>
        );
    }

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <>
        <div className={`relative w-full min-h-screen flex flex-col ${isDarkMode ? 'dark bg-home-dark text-primary-dark' : 'bg-home-light text-primary-light'}`}>
            <Navbar />
            <div className="mt-[64px] w-full flex flex-col px-4 md:px-8 px-8 mx-auto max-w-4xl box-border">
                <div className="top-4 left-0 mt-4">
                    <a className="bg-transparent border-none flex items-center gap-2" href="/">
                        <Image path={isDarkMode ? '/icons/left-arrow-light.svg' : '/icons/left-arrow-dark.svg'} className="size-[14px]" />
                        Back
                    </a>
                </div>
                <article className="pb-8 pt-4 w-full" ref={articleRef}>
                    <div className="mb-4 flex flex-col gap-2">
                        <h1 className="text-4xl font-bold">{article.data.title}</h1>
                        {/* <div className="flex flex-row">
                            <div className="flex flex-col">
                                <p className="text-sm font-regular dark:text-portfolio-gray">{formatDate(article.data.published_at)} • {article.data.read_time} min read</p>
                            </div>
                        </div> */}
                    </div>
                    {/* CARD HEADER */}
                    <div className="mb-4 flex flex-row items-center justify-between border border-test bg-work-card-header w-full h-[213px] rounded-lg p-5 box-border">
                        {/* LEFT PART */}
                        <div className="rounded-lg h-[171.38px] w-[280px] p-1 border-2 border-[#292B33] box-border bg-[#10121B]">
                            <Image path={article.data.image.url} alt={article.data.image.alt} className="w-[280px] h-full object-cover rounded-lg" />
                        </div>
                        {/* MIDDLE LIST */}
                        <ul className="h-full w-fit flex flex-col gap-6">
                            <li>
                                <div>
                                    <p className="text-xs font-regular text-gray-500 mb-1">Role</p>
                                    <p className="text-[13px] text-gray-400">Front end & Back end</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p className="text-xs font-regular text-gray-500 mb-1">Tech</p>
                                    <p className="text-[13px] text-gray-400">Front end</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p className="text-xs font-regular text-gray-500 mb-1">Role</p>
                                    <p className="text-[13px] text-gray-400">Front end</p>
                                </div>
                            </li>
                        </ul>
                        {/* RIGHT LIST */}
                        <ul className="h-full w-fit flex flex-col gap-6">
                            <li>
                                <div>
                                    <p className="text-xs font-regular text-gray-500 mb-1">Role</p>
                                    <p className="text-[13px] text-gray-400">Front end & Back end</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p className="text-xs font-regular text-gray-500 mb-1">Role</p>
                                    <p className="text-[13px] text-gray-400">Front end</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p className="text-xs font-regular text-gray-500 mb-1">Role</p>
                                    <p className="text-[13px] text-gray-400">Front end</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <CmsHtmlRenderer
                        data={article.data.body}
                        headline={article.data.headline}
                        colorTitle={isDarkMode ? 'light' : 'dark'}
                    />
                    {isVisible && (
                        <div
                            className={`text-sm font-regular p-4 box-border h-8 w-fit backdrop-blur-md dark:bg-white/10 bg-black/10 dark:hover:bg-white/30 hover:bg-gray-500/30 ease-in-out duration-500 border border-gray-50/20 rounded-full flex items-center justify-center cursor-pointer fixed ${buttonPosition} left-1/2 -translate-x-1/2 
                            ${showScrollTopButton ? 'animate-slideUp' : 'animate-slideDown'}`}
                            onClick={() => scrollToTop()}
                        >
                            Go top
                        </div>
                    )}
                </article>
                <div className="absolute top-[215px] right-[65px]" style={{ height: `${articleHeight}px` }}>
                    <div className="sticky top-[78px] self-start">
                        <TableOfContent body={article.data.body} />
                    </div>
                </div>
            </div>
        </div>
        <Footer ref={footerRef}/>
       </>
    );
}
