import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import BackButton from "../../components/BackButton";
import MenuButton from "../../components/MenuButton";



export default function AboutPage() {
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
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus labore veniam omnis illo dolores voluptatibus accusantium adipisci qui quis tempore, animi similique ipsam eveniet, libero, voluptatum porro obcaecati corrupti odit?
                    </p>
                </div>
            </div>

            {/* VGap */}
            <div className="h-6"></div>
        </div>

    )
}