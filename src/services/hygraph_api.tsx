import { gql, GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
    process.env.HYGRAPH_CONTENT_API as string,
);


export async function getArticlesDesc() {
    const ARTICLES_DESC = gql`
    {
    articles(orderBy: createdAt_DESC) {
            id,
            slug,
            title,
            createdAt,
            content {
                html,
            },
            preview {
                html,
            },
            image {
                url,
            },
        },
    }
    `
    const { articles } = await graphcms.request(ARTICLES_DESC);

    return articles;
}

export async function getArticleBySlug(slug: string) {
    const ARTICLE = gql`
    query Article($slug: String!) {
        article(where: {slug: $slug}) {
                id,
                slug,
                title,
                createdAt,
                content {
                    html,
                },
                preview {
                    html,
                },
                image {
                    url
                },
            }
        }
    `
    const { article } = await graphcms.request(ARTICLE, { slug });

    return article;
}


export async function getArticleSlugs() {
    const SLUGS = gql`
        {
            articles {
                slug
            }
        }
    `
    const { articles } = await graphcms.request(SLUGS);

    return articles;
}