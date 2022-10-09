import { gql, GraphQLClient } from "graphql-request";
import BackButton from "../../components/BackButton";



export default function AboutPage() {
    return (
        <div className="px-3">

            {/* Title row */}
            <div className="flex flex-row justify-center items-center">
                {/* Title */}
                <h1 className="text-3xl font-bold text-neutral-200 m-6">
                    KONTAKT
                </h1>
                <BackButton />
            </div>

            {/* VGap */}
            <div className="h-2"></div>

            {/* Divider */}
            <div className="flex justify-center">
                <div className="h-px w-full bg-neutral-500"></div>
            </div>

            {/* VGap */}
            <div className="h-6"></div>

            {/* Content */}
            <div className="text-neutral-200">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus labore veniam omnis illo dolores voluptatibus accusantium adipisci qui quis tempore, animi similique ipsam eveniet, libero, voluptatum porro obcaecati corrupti odit?
                </p>
            </div>


            {/* VGap */}
            <div className="h-6"></div>
        </div>
    )
}