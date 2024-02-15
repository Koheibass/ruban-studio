import { MediaContent } from "@/components/MediaContent"
import { Footer } from "@/components/Footer"
import { AppNavMedia } from "@/components/AppNavMedia"


export default function Videos() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto" >
            <AppNavMedia />
            <main className="grow px-4 bg-[#fefaff]">
                <section className="pb-8">
                    <MediaContent />
                </section>
            </main>
            <Footer />
        </div>
    )
};