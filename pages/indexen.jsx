import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { Footer } from '@/components/Footer';
import { AppNav } from '@/components/AppNav';
import { SectionNewsEn } from '@/components/English/Newsen.jsx/SectionNewsEn';
import { SectionBiographyEn } from '@/components/English/SectionBiographyEn';
import { SectionConcertsEn } from '@/components/English/SectionConcertsEn';
import { SectionMediaEn } from '@/components/English/SectionMediaEn';
import { SectionRecordingsEn } from '@/components/English/SectionRecordingsEn';
import { SectionContactEn } from '@/components/English/SectionContactEn';
import { LanguageContext } from '@/utils/language';

export default function HomeEn() {
    return (
        <LanguageContext.Provider value='en'>
            <div className="whole">
                <AppNav />
                <TopSlider />
                <main className="main">
                    <SectionNewsEn />
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
