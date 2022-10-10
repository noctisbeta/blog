export default function Footer() {
    return (
        <footer className="text-myblue1 relative h-24 -mt-24 clear-both flex flex-row justify-center items-center bg-myblue5">
            {/* Divider */}
            <div className="h-px w-full bg-myblue1 absolute top-0"></div>
            <a href="https://www.facebook.com/robimnc/" target="_blank" rel="noreferrer noopener">
                <h1 className="font-bold border rounded px-1">Facebook</h1>
            </a>
            <div className="w-5"></div>
            <a href="https://www.instagram.com/modnirobi/" target="_blank" rel="noreferrer noopener">
                <h1 className="font-bold border rounded px-1">Instagram</h1>
            </a>
        </footer>
    )
}