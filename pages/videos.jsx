import { AppNav } from "@/components/AppNav"
import Link from "next/link"


export default function Videos() {
    return (
        <div class="whole" >
            <AppNav />
            <main class="latest-information__main">
                <section class="section_media">
                    <h2 class="element__title" id="media">
                        <div>メディア</div>
                        <div class="translate">Media</div>
                    </h2>
                </section>

            </main>
        </div>
    )
}