import Router from "next/router";
import { useEffect, useState } from "react"


export default function NotFound() {
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            const interval = setTimeout(
                () => {
                    setCount(count + 1);
                },
                1000,
            );

            return () => clearInterval(interval);
        },
        [count],
    )

    useEffect(
        () => {
            const interval = setTimeout(
                () => {
                    Router.replace('/');
                },
                3000,
            );

            return () => clearInterval(interval);
        },
        [],
    )

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-9xl font-bold text-neutral-200">404</h1>
                <h1 className="text-3xl font-bold text-neutral-200">Page not found</h1>
                <div className="h-12"></div>
                <h2 className="text-2xl font-bold text-neutral-200">{'Redirecting ' + '. '.repeat(count)}</h2>
            </div>
        </>

    )
}