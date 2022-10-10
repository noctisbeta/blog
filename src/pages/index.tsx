import Head from 'next/head'
import MenuButton from '../components/MenuButton'
import PhotoArticleCard from '../components/PhotoArticleCard';
import { getArticlesDesc } from '../services/hygraph_api';


export async function getStaticProps() {
  const articles = await getArticlesDesc();

  return {
    props: {
      articles,
    },
    revalidate: 300,
  };
}

export default function Home({ articles }: { articles: any }) {
  console.log(articles);

  return (
    <>
      <Head>
        <title>CMS Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Body */}
      <div className="px-3">

        {/* Title */}
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-myblue3 m-6">CMS Blog</h1>
        </div>

        {/* Menu */}
        <div className="flex flex-row justify-center gap-3">
          <MenuButton key="about" label="O MENI" path="/about" />
          <MenuButton key="contact" label="KONTAKT" path="/contact" />
        </div>

        {/* VGap */}
        <div className="h-2"></div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="h-px w-full bg-myblue1"></div>
        </div>

        {/* VGap */}
        <div className="h-6"></div>

        <div className="flex flex-col gap-8 items-center">
          {articles.map((article: any) => (
            <PhotoArticleCard
              key={article.id}
              id={article.id}
              slug={article.slug}
              title={article.title}
              date={article.createdAt.split("T")[0].split("-").reverse().join(".")}
              content={article.content.html}
              preview={article.preview.html}
              image={article.image.url} />
          ))}
        </div>

        {/* VGap */}
        <div className="h-12"></div>
      </div>
    </>
  )
}


