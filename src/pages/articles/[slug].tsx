import { gql, GraphQLClient } from "graphql-request";
import BackButton from "../../components/BackButton";
import LikeButton from "../../components/LikeButton";
import Image from "next/image";


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
            image {
                url
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
        revalidate: 300,
    };
}


export default function ArticleDetailPage({ article }: { article: any }) {

    console.log(article);

    return (
        <div className="px-5">

            {/* Title row */}
            <div className="flex flex-row justify-center items-center">
                {/* Title */}
                <h1 className="text-3xl font-bold text-myblue1 m-6">
                    {article.title}
                </h1>
                <BackButton />
            </div>

            {/* Divider */}
            <div className="flex justify-center">
                <div className="h-px w-full bg-myblue1"></div>
            </div>

            {/* Gap */}
            <div className="h-3"></div>

            <div className="flex flex-col items-center">
                {/* Content */}
                <div className="flex justify-center items-center">
                    <div className="text-myblue1 sm:w-2/3 md:w-1/3">
                        <div className="text-myblue1" dangerouslySetInnerHTML={{ __html: article.content.html }}></div>
                    </div>
                </div>

                <div className="rounded-lg overflow-hidden mt-6 max-w-prose w-full">
                    <Image src={article.image.url} layout="responsive" width={458} height={280} />
                </div>

                <div className="my-6">
                    <LikeButton />
                </div>
            </div>
        </div>


    )
}