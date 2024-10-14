import { client } from '../app/lib/prismic'
import { CardBlogItem } from '../app/types/cardBlog.types'
import { CmsArticleType } from '../app/types/cms.types'

export class CmsService {
  static async getCardBlogData(): Promise<CardBlogItem[]> {
    const response = await client.getAllByType('blog')

    return response.map(item => ({
      slug: item.slugs[0],
      title: item.data.title as string,
      summary: item.data.summary as string,
      image: item.data.image.url as string,
    }))
  }

  static async getArticleData(slug: string): Promise<CmsArticleType | null> {
    const response = await client.getAllByType('blog');
    const article = response.find(item => item.slugs[0] === slug);
    
    if (!article) {
      return null;
    }

    return {
      id: article.id,
      uid: article.uid,
      data: {
        title: article.data.title,
        summary: article.data.summary,
        read_time: article.data.read_time,
        metadata_title: article.data.metadata_title || '',
        metadata_description: article.data.metadata_description || '',
        author: article.data.author,
        select: article.data.select,
        video_youtube: '',
        image: {
          url: article.data.image.url,
          alt: article.data.image.alt || '',
          dimensions: article.data.image.dimensions
        },
        body: article.data.body,
        published_at: article.data.published_at,
        category: article.data.category,
        tags: article.tags,
        slug: article.data.slug,
        headline: article.data.headline,
      }
    } as CmsArticleType;
  }
}
