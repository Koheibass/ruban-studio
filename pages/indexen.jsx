import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { Footer } from '@/components/Footer';
import { AppNav } from '@/components/AppNav';
import { SectionBiographyEn } from '@/components/English/SectionBiographyEn';
import { SectionConcertsEn } from '@/components/English/SectionConcertsEn';
import { SectionMediaEn } from '@/components/English/SectionMediaEn';
import { SectionRecordingsEn } from '@/components/English/SectionRecordingsEn';
import { SectionContactEn } from '@/components/English/SectionContactEn';
import { LanguageContext } from '@/utils/language';
import { SectionNews } from '@/components/News/SectionNews';

export default function HomeEn() {
    return (
        <LanguageContext.Provider value='en'>
            <div className="flex flex-col relative min-h-lvh font-noto">
                <AppNav />
                <TopSlider />
                <main className="main grow bg-[#fefaff] px-4">
                    <SectionNews />
                    <SectionBiographyEn />
                    <SectionConcertsEn />
                    <SectionMediaEn />
                    <SectionRecordingsEn />
                    <SectionContactEn />
                </main>
                <Footer />
            </div >
        </LanguageContext.Provider>
    )
}
