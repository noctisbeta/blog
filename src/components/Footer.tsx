export default function Footer() {
    return (
        <footer className="text-myblue1 relative h-24 -mt-24 clear-both flex flex-row justify-center items-center">
            {/* Divider */}
            <div className="h-px w-full bg-myblue1 absolute top-0"></div>
            <a href="https://www.facebook.com/robimnc/">
                <h1>Facebook</h1>
            </a>
            <div className="w-5"></div>
            <a href="https://www.instagram.com/modnirobi/">
                <h1>Instagram</h1>
            </a>
        </footer>
    )
}