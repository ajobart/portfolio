import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CmsService } from "../../../services/cms.service";
import { CmsArticleType } from "../../types/cms.types";
import Navbar from "../../molecules/navbar/navbar";
import { useTheme } from "../../context/theme/themeContext";
import Image from "../../atom/image/image";
import CmsHtmlRenderer from "../../atom/cms-html-renderer/cms-html-renderer";

export default function BlogDetail() {

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

    /**
     * Effect to fetch the article
     */
    useEffect(() => {
        async function fetchArticle() {
            if (!slug) return;

            try {
                setLoading(true);
                const fetchedArticle = await CmsService.getArticleData(slug);
                if (fetchedArticle) {
                    setArticle(fetchedArticle);
                    console.log(fetchedArticle);
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
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className={`relative w-full min-h-screen flex flex-col ${isDarkMode ? 'dark bg-home-dark text-primary-dark' : 'bg-home-light text-primary-light'}`}>
            <Navbar />
            <main className="mt-[64px] w-full flex flex-col px-4 md:px-8 lg:px-16 xl:px-[246px] box-border">
                <article className="py-8">
                    <div className="mb-4 flex flex-col gap-2">
                        <h1 className="text-4xl font-bold">{article.data.title}</h1>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <p className="text-sm font-regular dark:text-portfolio-gray">{article.data.published_at}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <Image path={article.data.image.url} alt={article.data.image.alt} className="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <CmsHtmlRenderer
                        data={article.data.body}
                        headline={article.data.headline}
                        colorTitle={isDarkMode ? 'light' : 'dark'}
                    />
                </article>
            </main>
        </div>
    );
}
