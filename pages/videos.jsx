import { AppNav } from "@/components/AppNav"
import Link from "next/link"
import { MediaContent } from "@/components/MediaContent"

export default function Videos() {
    return (
        <div className="whole" >
            <AppNav />
            <main className="latest-information__main">
                <section className="section_media">
                    <MediaContent />
                </section>
            </main>
        </div>
    )
}