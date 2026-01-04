import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-600">
            <Header />
            <main className="grow pt-18 bg-gray-100">
                <div className="flex flex-col mx-auto">{children}</div>
            </main>
            <Footer />
        </div>
    );
}