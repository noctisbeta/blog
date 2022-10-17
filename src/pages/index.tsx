import Head from "next/head";
import Link from "next/link";
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Pišem</title>
        <meta name="description" content="Potopi se v vrtinec besed in zaplavaj med oblaki časa skozi življenje. Vsak dan nam prinaša novo zgodbo. Življenja so kot knjige. Obračamo strani, list za listom. Brez kazala." />
        <meta name="keywords" content="Življenje, pot, ljubezen, zgodba, kolumna, književnost, knjiga, poezija, pesem, rima, čas, vesolje, sonce, glasba, Facebook, sreča, voda, zrak, žalost, zdravje, narava, beseda, besede, kultura, čas, prosti čas, pisanje, kultura, branje, čtivo, abeceda, črke" />
        <meta name="author" content="Robi Emeršič" />
        <link rel="icon" href="/cursive_r_blue.ico" />
      </Head>

      {/* Body */}
      <div className="px-3">
        {/* Title */}
        <div className="flex flex-row justify-center">

          <svg
            version="1.1"
            id="svg2"
            viewBox="0 0 380.04786 174.81195"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-5 w-[min(3rem,10%)] min-w-[3rem] sm:min-w-0 sm:w-[min(3rem,10%)]">
            <defs
              id="defs6" />
            <g
              id="g8"
              transform="translate(-38.798,-66.188052)">
              <path
                className="fill-myblue1 stroke-0"
                d="m 275.99952,134 c 8.24953,-1.35894 25.35003,-4.32683 34.22093,-5.97002 0.45499,-4.48159 1.22547,-9.26043 2.87985,-13.1595 1.42115,-3.27541 3.52796,-6.79217 5.52443,-9.17652 13.51701,-18.341102 39.07374,-24.46056 59.37373,-15.15456 40.5751,18.6006 37.65106,76.3656 12.62703,106.2866 -14.08899,16.847 -36.03199,24.565 -57.62595,23.084 -46.78204,-3.206 -74.25506,-43.04 -105.00003,-72.74 -28.90998,-27.928 -71.78491,-48.9251 -113.00009,-45 -20.758895,1.977 -42.390812,7.55 -60.999902,17.089 -5.512706,2.826 -16.6179,8.013 -15.051703,15.737 2.884203,14.224 22.120911,23.026 34.0517,27.735 35.871005,14.16 76.180175,12.71544 113.202245,3.87644 -2.80566,-2.76633 -3.02565,-2.84536 -6.23223,-6.29542 -8.78851,1.93253 -21.33969,2.17186 -30.97004,2.42898 -19.80001,0.528 -46.87591,-6.291 -60.945169,-20.78 -11.855409,-12.21 -5.460106,-26.793 10.945136,-28.777 17.078023,-2.064 36.989993,6.974 51.000113,15.819 17.13297,10.817 29.86495,25.794 44.00098,39.997 33.73493,33.896 73.11397,72.02 123.99886,72 11.24905,-0.004 22.30211,-2.45 33.00015,-5.754 13.09491,-4.044 25.43794,-11.197 35.99975,-19.862 14.83317,-12.168 27.97816,-32.036 30.79223,-51.384 4.93094,-33.907 -7.34011,-71.5294 -38.792,-89.0995 C 348.77349,58.015 304.29253,66.0034 285.08951,96 c -7.58001,11.841 -9.08999,24.299 -9.08999,38 m 0.65924,4.82651 c 0.45566,3.02945 1.34076,5.94849 2.72883,8.75712 11.55101,-2.4849 21.54056,-4.32548 32.17888,-6.79721 -0.33245,-2.88367 -0.36595,-2.87433 -1.05262,-8.20279 M 280.99952,152 c 11.971,28.556 47.89596,42.448 75.99999,30.42 9.68199,-4.144 30.40996,-19.593 28.788,-32.271 -0.84998,-6.643 -6.46784,1.125 -7.54799,2.856 -11.62899,18.641 -33.89503,23.208 -51.52497,9.635 -4.56904,-3.517 -11.45328,-8.44431 -14.72538,-17.67318 -6.47852,1.44215 -22.90666,5.04218 -30.98965,7.03318 z"
                id="path178" />
            </g>
          </svg>


          <h1 className="text-8xl text-myblue1 palace-script mx-4">Pišem</h1>

          <svg
            version="1.1"
            id="svg2"
            viewBox="0 0 380.04786 174.81195"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-5 w-[min(3rem,10%)] min-w-[3rem] sm:min-w-0 sm:w-[min(3rem,10%)]">
            <defs
              id="defs6" />
            <g
              id="g8"
              transform="translate(-38.798,-66.188052)">
              <path
                className="fill-myblue1 stroke-0"
                d="m 181.64435,134 c -8.24953,-1.35894 -25.35003,-4.32683 -34.22093,-5.97002 -0.45499,-4.48159 -1.22547,-9.26043 -2.87985,-13.1595 -1.42115,-3.27541 -3.52796,-6.79217 -5.52443,-9.17652 C 125.50213,87.352858 99.945403,81.2334 79.645413,90.5394 39.070313,109.14 41.994353,166.905 67.018383,196.826 c 14.08899,16.847 36.031987,24.565 57.625947,23.084 46.78204,-3.206 74.25506,-43.04 105.00003,-72.74 28.90998,-27.928 71.78491,-48.9251 113.00009,-45 20.7589,1.977 42.39081,7.55 60.9999,17.089 5.51271,2.826 16.6179,8.013 15.05171,15.737 -2.88421,14.224 -22.12091,23.026 -34.0517,27.735 -35.87101,14.16 -76.18018,12.71544 -113.20225,3.87644 2.80566,-2.76633 3.02565,-2.84536 6.23223,-6.29542 8.78851,1.93253 21.33969,2.17186 30.97004,2.42898 19.80001,0.528 46.87591,-6.291 60.94517,-20.78 11.85541,-12.21 5.46011,-26.793 -10.94513,-28.777 -17.07803,-2.064 -36.99,6.974 -51.00012,15.819 -17.13297,10.817 -29.86495,25.794 -44.00098,39.997 -33.73493,33.896 -73.11397,72.02 -123.99886,72 -11.24905,-0.004 -22.30211,-2.45 -33.00015,-5.754 C 93.549403,231.202 81.206373,224.049 70.644563,215.384 55.811393,203.216 42.666403,183.348 39.852333,164 34.921393,130.093 47.192443,92.4706 78.644333,74.9005 108.87038,58.015 153.35134,66.0034 172.55436,96 c 7.58001,11.841 9.08999,24.299 9.08999,38 m -0.65924,4.82651 c -0.45566,3.02945 -1.34076,5.94849 -2.72883,8.75712 -11.55101,-2.4849 -21.54056,-4.32548 -32.17888,-6.79721 0.33245,-2.88367 0.36595,-2.87433 1.05262,-8.20279 M 176.64435,152 c -11.971,28.556 -47.89596,42.448 -75.99999,30.42 -9.681987,-4.144 -30.409957,-19.593 -28.787997,-32.271 0.84998,-6.643 6.46784,1.125 7.54799,2.856 11.62899,18.641 33.895027,23.208 51.524967,9.635 4.56904,-3.517 11.45328,-8.44431 14.72538,-17.67318 6.47852,1.44215 22.90666,5.04218 30.98965,7.03318 z"
                id="path178" />
            </g>
          </svg>

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

        <div className="flex flex-col gap-8 items-center article-container">
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
