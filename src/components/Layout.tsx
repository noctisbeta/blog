import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen">
                <main className="overflow-auto pb-24">{children}</main>
            </div>
            <Footer />
        </>
    )
}