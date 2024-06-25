
import { Topix } from "./Topix"
import { TopixPC } from "./TopixPc"


export const SectionNews = () => {

    return (
        <section>
            <div className="lg:hidden">
                < Topix />
            </div>
            <div className="hidden lg:block">
                < TopixPC />
            </div>
        </section>
    )
}