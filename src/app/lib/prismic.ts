import * as prismic from '@prismicio/client'

export const repositoryName = import.meta.env.VITE_PRISMIC_REPOSITORY_NAME

export const client = prismic.createClient(repositoryName, {
  accessToken: 'your-access-token',
})