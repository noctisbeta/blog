import { gql, GraphQLClient } from "graphql-request";


const graphcms = new GraphQLClient(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8zenrsn0wep01uk200n4f9o/master'
);

const SLUGLIST = gql`
    {
        articles {
            slug
        }
    }
`

const QUERY = gql`
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
        }
    }
`

export async function getStaticPaths() {
    const { articles } = await graphcms.request(SLUGLIST);

    console.log(articles);

    return {
        paths: articles.map(
            (article: { slug: string }) => ({
                params: { slug: article.slug }
            })
        ),
        fallback: false,
    }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    console.log("Getting static props");

    const slug = params.slug;
    const data = await graphcms.request(QUERY, { slug });
    const article = data.article;

    console.log(data);

    return {
        props: {
            article,
        },
        revalidate: 10,
    };
}


export default function ArticleDetailPage({ article }: { article: any }) {
    return (
        <>
            {/* Title */}
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold text-neutral-200 m-3">{article.title}</h1>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-neutral-500"></div>

            {/* Gap */}
            <div className="h-3"></div>

            {/* Content */}
            <div className="text-neutral-200" dangerouslySetInnerHTML={{ __html: article.content.html }}></div>
        </>
    )
}