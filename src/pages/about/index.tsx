import BackButton from "../../components/BackButton";
import { getAbout } from "../../services/hygraph_api";

export async function getStaticProps() {
    const { about } = await getAbout();

    return {
        props: {
            about,
        },
        revalidate: 300,
    };
}

export default function AboutPage({ about }: { about: any }) {
    return (
        <div className="px-3">

            {/* Title row */}
            <div className="flex flex-row justify-center items-center">
                {/* Title */}
                <h1 className="text-3xl font-bold text-myblue1 m-6">
                    O MENI
                </h1>
                <BackButton />
            </div>

            {/* VGap */}
            <div className="h-2"></div>

            {/* Divider */}
            <div className="flex justify-center">
                <div className="h-px w-full bg-myblue1"></div>
            </div>

            {/* VGap */}
            <div className="h-6"></div>

            {/* Content */}
            <div className="flex justify-center items-center">
                <div className="text-myblue1 sm:w-2/3 md:w-1/3">
                    <div className="text-myblue1" dangerouslySetInnerHTML={{ __html: about.html }}></div>
                </div>
            </div>

            {/* VGap */}
            <div className="h-6"></div>
        </div>

    )
}