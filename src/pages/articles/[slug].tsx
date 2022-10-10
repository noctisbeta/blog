import { gql, GraphQLClient } from "graphql-request";
import BackButton from "../../components/BackButton";
import LikeButton from "../../components/LikeButton";
import Image from "next/image";
import { getArticleBySlug, getArticleSlugs } from "../../services/hygraph_api";

export async function getStaticPaths() {
    const articles = await getArticleSlugs();

    return {
        paths: articles.map(
            (article: { slug: string }) => ({
                params: { slug: article.slug }
            })
        ),
        fallback: "blocking",
    }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const article = await getArticleBySlug(slug);

    return {
        props: {
            article,
        },
        revalidate: 60,
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

                <div className="h-12"></div>

            </div>
        </div>


    )
}