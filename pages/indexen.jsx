import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { Footer } from '@/components/Footer';
import { AppNavEn } from '@/components/English/AppNavEn';
import { SectionNewsEn } from '@/components/English/Newsen.jsx/SectionNewsEn';
import { SectionBiographyEn } from '@/components/English/SectionBiographyEn';
import { SectionConcertsEn } from '@/components/English/SectionConcertsEn';
import { SectionMediaEn } from '@/components/English/SectionMediaEn';
import { SectionRecordingsEn } from '@/components/English/SectionRecordingsEn';
import { SectionContactEn } from '@/components/English/SectionContactEn';


export default function HomeEn() {
    return (
        <div className="whole">
            <AppNavEn />
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
    )
}
