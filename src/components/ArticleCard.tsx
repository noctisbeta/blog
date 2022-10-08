import Link from "next/link";
import { Article } from "../models/Article";

export default function ArticleCard(article: Article, key: number | string) {
    return (
        <div className="article-card">
            {/* Row for title and date */}
            <div className="flex flex-row justify-between">
                {/* Title text */}
                <h1 className="text-2xl font-bold text-neutral-700">{article.title}</h1>
                {/* Gap */}
                <div className="h-0 w-8"></div>
                {/* Date text */}
                <h1 className="text-lg  text-neutral-700 leading-loose">{article.date}</h1>
            </div>

            {/* Gap */}
            <div className="h-8 w-0"></div>

            {/* Content */}
            {/* <p className="text-neutral-700 max-w-fit max-h-fit">{article.preview}</p> */}
            <div dangerouslySetInnerHTML={{ __html: article.preview }}></div>

            {/* Gap */}
            <div className="h-8 w-0"></div>

            {/* Divider row with link to full article */}
            <div className="mt-auto flex flex-row justify-center items-center">
                <div className="h-px w-full bg-neutral-900 mr-4"></div>
                <Link href={`/articles/${article.slug}`}>VEČ</Link>
                <div className="h-px w-full bg-neutral-900 ml-4"></div>
            </div>
        </div >
    );
}