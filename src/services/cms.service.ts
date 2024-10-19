import { client } from '../app/lib/prismic'
import BadgesList from '../app/types/badgesList.types'
import { CardBlogItem } from '../app/types/cardBlog.types'
import { CardWorkItem } from '../app/types/cardWork.types'
import { CmsArticleType } from '../app/types/cms.types'
import { CmsWorkType } from '../app/types/cms.types'

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

  static async getCardWorkData(): Promise<CardWorkItem[]> {
    const response = await client.getAllByType('work')

    return response.map(item => ({
      slug: item.slugs[0],
      title: item.data.title as string,
      summary: item.data.summary as string,
      image: item.data.image.url as string,
      badges_list: item.data.badges_list as Array<BadgesList>
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

  static async getWorkData(slug: string): Promise<CmsWorkType | null> {
    const response = await client.getAllByType('work');
    const work = response.find(item => item.slugs[0] === slug);
    
    if (!work) {
      return null;
    }

    return {
      id: work.id,
      uid: work.uid,
      data: {
        title: work.data.title,
        summary: work.data.summary,
        role: work.data.role,
        tech: work.data.tech,
        link_title : work.data.link_title,
        link_url: work.data.link_url,
        tasks_list: work.data.tasks_list,
        metadata_title: work.data.metadata_title || '',
        metadata_description: work.data.metadata_description || '',
        author: work.data.author,
        select: work.data.select,
        video_youtube: '',
        image: {
          url: work.data.image.url,
          alt: work.data.image.alt || '',
          dimensions: work.data.image.dimensions
        },
        body: work.data.body,
        category: work.data.category,
        tags: work.tags,
        slug: work.data.slug,
        headline: work.data.headline,
      }
    } as CmsWorkType;
  }
}
