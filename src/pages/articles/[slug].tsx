import { gql, GraphQLClient } from "graphql-request";
import BackButton from "../../components/BackButton";
import LikeButton from "../../components/LikeButton";


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
        <div className="px-3">

            {/* Title row */}
            <div className="flex flex-row justify-center items-center">
                {/* Title */}
                <h1 className="text-3xl font-bold text-neutral-200 m-6">
                    {article.title}
                </h1>
                <BackButton />
            </div>

            {/* Divider */}
            <div className="flex justify-center">
                <div className="h-px w-full bg-neutral-500"></div>
            </div>

            {/* Gap */}
            <div className="h-3"></div>

            {/* Content */}
            <div className="flex justify-center items-center">
                <div className="text-neutral-200 sm:w-2/3 md:w-1/3">
                    <div className="text-neutral-200" dangerouslySetInnerHTML={{ __html: article.content.html }}></div>

                </div>
            </div>

           <LikeButton />


        </div>


    )
}