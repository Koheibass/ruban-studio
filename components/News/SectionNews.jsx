import { TopNews } from "./TopNews"
import { Topix } from "./Topix"

export const SectionNews = () => {
    return (
        <section className="section_news">
            <TopNews />
            <Topix />
        </section>
    )
}