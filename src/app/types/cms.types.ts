export interface CmsResponseType {
  page?: number;
  results?: any;
  results_per_page?: number;
  results_per_size?: number;
  total_pages?: number;
  total_results_size?: number;
}

export interface CmsArrayType {
  row: string
}

export interface CmsDataType {
  id: string;
  type: string;
  text: string;
  url: string;
  alt: string;
  spans: Array<{
    start: number;
    end: number;
    type: string;
    data: {
      url: string;
      target: string;
    }
  }>
}

export interface CmsHeadlineType {
  headline_title?: string;
  headline_body?: Array<CmsDataType>;
}

export interface CmsArticleType {
  id?: string;
  type?: string;
  href?: string;
  lang?: string;
  tags?: Array<string>;
  slugs?: Array<string>;
  data: {
    title: string;
    summary: string;
    read_time: string;
    metadata_title: string;
    metadata_description: string;
    author: Array<CmsDataType>;
    select?: string;
    video_youtube: string;
    image: {
      url: string;
      alt: string;
      dimensions: {
        width: number;
        height: number;
      }
    };
    category: {
      id: string;
      link_type: string;
      slug: string;
      type: string;
    }
    published_at: string;
    updated_at?: string;
    body: Array<CmsDataType>;
    headline: Array<CmsHeadlineType>;
    slug: string;
  }
}

export interface CmsWorkType {
  id?: string;
  type?: string;
  href?: string;
  lang?: string;
  tags?: Array<string>;
  slugs?: Array<string>;
  data: {
    title: string;
    summary: string;
    read_time: string;
    metadata_title: string;
    metadata_description: string;
    author: Array<CmsDataType>;
    select?: string;
    video_youtube: string;
    image: {
      url: string;
      alt: string;
      dimensions: {
        width: number;
        height: number;
      }
    };
    category: {
      id: string;
      link_type: string;
      slug: string;
      type: string;
    }
    published_at: string;
    updated_at?: string;
    body: Array<CmsDataType>;
    headline: Array<CmsHeadlineType>;
    slug: string;
  }
}