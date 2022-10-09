import { gql, GraphQLClient } from "graphql-request";



export default function AboutPage() {
    return (
        <>
            {/* Body */}
            <div className="px-3">

                {/* Title */}
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold text-neutral-200 m-6">O MENI</h1>
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
        </>
    )
}