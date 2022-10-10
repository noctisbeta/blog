import { gql, GraphQLClient } from "graphql-request";
import BackButton from "../../components/BackButton";
import LikeButton from "../../components/LikeButton";
import Image from "next/image";
import { getArticleBySlug, getArticleSlugs } from "../../services/hygraph_api";

export async function getServerSideProps(context: any) {
  console.log(context);
  const slug = context.params.slug;
  const article = await getArticleBySlug(slug);

  return {
    props: {
      article,
    },
  };
}

export default function ArticleDetailPage({ article }: { article: any }) {
  console.log(article);

  return (
    <div className="px-5">
      {/* Title row */}
      <div className="flex flex-row justify-center items-center">
        {/* Title */}
        <div className="max-w-prose my-6 mx-12">
          <h1 className="text-3xl font-bold text-myblue1">{article.title}</h1>
        </div>
        <BackButton />
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-myblue1"></div>

      {/* Gap */}
      <div className="h-3"></div>

      <div className="flex flex-col items-center">
        {/* Content */}
        <div className="flex justify-center items-center">
          <div className="text-myblue1 max-w-prose">
            <div
              className="text-myblue1"
              dangerouslySetInnerHTML={{ __html: article.content.html }}
            ></div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden mt-6 max-w-prose w-full">
          <Image
            src={article.image.url}
            layout="responsive"
            width={458}
            height={280}
            objectFit="cover"
          />
        </div>

        <div className="h-12"></div>
      </div>
    </div>
  );
}
