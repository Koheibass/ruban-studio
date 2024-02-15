import { Footer } from "@/components/Footer"
import { MediaContentEn } from "@/components/English/MediaContentEn"
import { LanguageContext } from '@/utils/language';
import { AppNavMedia } from "@/components/AppNavMedia";


export default function Videos() {
    return (
        <LanguageContext.Provider value='en'>
            <div className="flex flex-col relative min-h-lvh font-noto" >
                <AppNavMedia />
                <main className="grow px-4 bg-[#fefaff]">
                    <section className="pb-8">
                        <MediaContentEn />
                    </section>
                </main>
                <Footer />
            </div>
        </LanguageContext.Provider>
    )
};