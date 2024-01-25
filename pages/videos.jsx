import { AppNav } from "@/components/AppNav"
import Link from "next/link"


export default function Videos() {
    return (
        <div className="whole" >
            <AppNav />
            <main className="latest-information__main">
                <section className="section_media">
                    <h2 className="element__title" id="media">
                        <div>メディア</div>
                        <div className="translate">Media</div>
                    </h2>
                </section>

            </main>
        </div>
    )
}