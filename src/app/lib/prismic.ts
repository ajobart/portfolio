import * as prismic from "@prismicio/client";

/**
 * Repository name
 */
export const repositoryName = import.meta.env.VITE_PRISMIC_REPOSITORY_NAME;

/**
 * Client
 */
export const client = prismic.createClient(repositoryName, {
  accessToken: "your-access-token",
});
