import { gql, GraphQLClient } from 'graphql-request';
import Head from 'next/head'
import ArticleCard from '../components/ArticleCard'
import MenuButton from '../components/MenuButton'


const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8zenrsn0wep01uk200n4f9o/master'
);

const QUERY = gql`
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
  },
}
`

export async function getStaticProps() {
  console.log("Getting static props");

  const { articles } = await graphcms.request(QUERY);


  return {
    props: {
      articles,
    },
    revalidate: 10,
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
          <h1 className="text-3xl font-bold text-neutral-200 m-6">CMS Blog</h1>
        </div>

        {/* Menu */}
        <div className="flex flex-row gap-3 justify-center">
          <MenuButton label="DOMOV" path="/" />
          <MenuButton label="O MENI" path="/about" />
          <MenuButton label="KONTAKT" path="/contact" />
        </div>

        {/* VGap */}
        <div className="h-2"></div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="h-px w-full bg-neutral-500"></div>
        </div>

        {/* VGap */}
        <div className="h-6"></div>

        <div className="flex flex-col gap-8 items-center">
          {articles.map((article: any) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              slug={article.slug}
              title={article.title}
              date={article.createdAt.split("T")[0].split("-").reverse().join(".")}
              content={article.content.html}
              preview={article.preview.html} />
          ))}
        </div>

        {/* VGap */}
        <div className="h-12"></div>
      </div>
    </>
  )
}


