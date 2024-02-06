import * as React from 'react';
import TopSlider from '@/components/TopSlider';
import { AppNav } from '@/components/AppNav';
import { SectionBiography } from '@/components/SectionBiography';
import { SectionNews } from '@/components/News/SectionNews';
import { SectionConcerts } from '@/components/SectionConcerts';
import { SectionMedia } from '@/components/SectionMedia';
import { SectionRecordings } from '@/components/SectionRecordings';
import { SectionContact } from '@/components/SectionContact';
import { Footer } from '@/components/Footer';
import { LanguageContext } from '@/utils/language';


export default function Home() {
  return (
    <LanguageContext.Provider value='ja'>
      <div className="flex flex-col relative min-h-lvh font-noto">
        <AppNav />
        <TopSlider />
        <main className="grow bg-[#fefaff] px-4">
          <SectionNews />
          <SectionBiography />
          <SectionConcerts />
          <SectionMedia />
          <SectionRecordings />
          <SectionContact />
        </main>
        <Footer />
      </div >
    </LanguageContext.Provider>
  )
}
