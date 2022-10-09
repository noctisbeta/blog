export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen">
                <main className="overflow-auto pb-24">{children}</main>
            </div>

            <footer className="text-neutral-200 relative h-24 -mt-24 clear-both flex flex-row justify-center items-center">
                {/* Divider */}
                <div className="h-px w-full bg-neutral-500 absolute top-0"></div>
                <h1>Facebook Instagram Twitter</h1>
            </footer>
        </>
    )
}