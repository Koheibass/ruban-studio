import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { SectionBiography } from '@/components/SectionBiography';
import { SectionConcerts } from '@/components/SectionConcerts';
import { SectionMedia } from '@/components/SectionMedia';
import { SectionRecordings } from '@/components/SectionRecordings';
import { SectionContact } from '@/components/SectionContact';
import { Footer } from '@/components/Footer';
import { AppNavEn } from '@/components/English/AppNavEn';
import { SectionNewsEn } from '@/components/English/Newsen.jsx/SectionNewsEn';


export default function HomeEn() {
    return (
        <div className="whole">
            <AppNavEn />
            <TopSlider />
            <main className="main">
                <SectionNewsEn />
                <SectionBiography />
                <SectionConcerts />
                <SectionMedia />
                <SectionRecordings />
                <SectionContact />
            </main>
            <Footer />
        </div >
    )
}
