import { AppNav } from "@/components/AppNav"
import { MediaContent } from "@/components/MediaContent"
import { Footer } from "@/components/Footer"

export default function Videos() {
    return (
        <div className="whole" >
            <AppNav />
            <main className="latest-information__main">
                <section className="section_media">
                    <MediaContent />
                </section>
            </main>
            <Footer />
        </div>
    )
}