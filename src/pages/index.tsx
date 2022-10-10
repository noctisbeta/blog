import Head from "next/head";
import Link from "next/link";
import MenuButton from "../components/MenuButton";
import PhotoArticleCard from "../components/PhotoArticleCard";
import { getArticlesDesc } from "../services/hygraph_api";

export async function getStaticProps() {
  const articles = await getArticlesDesc();

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}

export default function Home({ articles }: { articles: any }) {
  return (
    <>
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Body */}
      <div className="px-3">
        {/* Title */}
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-myblue3 m-6">Pišem ...</h1>
        </div>

        {/* Divider row with link to full article */}
        <div className="flex flex-row items-center">
          <div className="h-px flex-1 bg-myblue1"></div>
          <Link href={`/about`}>
            <div className="px-4 py-2 rounded-full text-myblue1 border-myblue1 border bg-myblue4 hover:bg-myblue5 hover:cursor-pointer">
              O MENI
            </div>
          </Link>
          <div className="h-px flex-1 bg-myblue1"></div>
        </div>

        {/* VGap */}
        <div className="h-2"></div>

        {/* VGap */}
        <div className="h-6"></div>

        <div className="flex flex-col gap-8 items-center">
          {articles.map((article: any) => (
            <PhotoArticleCard
              key={article.id}
              id={article.id}
              slug={article.slug}
              title={article.title}
              date={article.createdAt
                .split("T")[0]
                .split("-")
                .reverse()
                .join(".")}
              content={article.content.html}
              preview={article.preview.html}
              image={article.image.url}
            />
          ))}
        </div>

        {/* VGap */}
        <div className="h-12"></div>
      </div>
    </>
  );
}
