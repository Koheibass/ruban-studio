import { TopNews } from "./TopNews"
import { Topix } from "./Topix"
import { useLanguage } from "@/utils/language";

export const SectionNews = () => {
    const { lang } = useLanguage();

    return (
        <section className="section_news">
            <TopNews />
            < Topix />
        </section>
    )
}