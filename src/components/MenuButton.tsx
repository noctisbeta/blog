import Link from "next/link";
import path from "path";

export default function MenuButton(props: { label: string, path: string }) {
    return (
        <Link href={props.path}>
            <div className="material-bubble">
                <div className="bg-myblue4 py-1 px-5 rounded-md hover:cursor-pointer hover:bg-myblue5">
                    <h1 className="text-neutral-200">{props.label}</h1>
                </div>
            </div>
        </Link>
    )
}