import Link from "next/link";
import { Article } from "../models/Article";
import Image from "next/image";

export default function PhotoArticleCard(article: Article, key: number | string) {
    return (
        <div className="photo-article-card">

            <div className="rounded-t-lg overflow-hidden">
                <Image src={article.image} layout="responsive" width={458} height={280} />
            </div>

            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-myblue1">{article.title}</h5>

                <div className="mb-3 font-normal text-myblue1" dangerouslySetInnerHTML={{ __html: article.preview }}></div>

                {/* Divider row with link to full article */}
                <div className="mt-auto flex flex-row justify-center items-center">
                    <div className="h-px w-full bg-myblue1"></div>
                    <div className="px-4 py-2 rounded-full text-myblue1 border-myblue1 border bg-myblue4 hover:bg-myblue5">
                        <Link href={`/articles/${article.slug}`}>VEČ</Link>
                    </div>
                    <div className="h-px w-full bg-myblue1"></div>
                </div>

            </div>
        </div>
    );
}