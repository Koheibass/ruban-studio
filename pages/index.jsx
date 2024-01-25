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


export default function Home() {
  return (
    <div className="whole">
      <AppNav />
      <TopSlider />
      <main className="main">
        <SectionNews />
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
