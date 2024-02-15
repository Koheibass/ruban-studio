import { SectionHeader } from "./SectionHeader"
import React from "react"
import { ConcertsPast } from "./ConcertsPast"
import { ConcertsUpcoming } from "./ConcertsUpcoming"
import { useLanguage } from "@/utils/language"

export const SectionConcerts = () => {
    const { lang } = useLanguage();
    const [mode, setMode] = React.useState('upcoming') // or English
    const handleClickModeButton = (mode) => {
        if (mode === 'upcoming') {
            setMode('upcoming')
        } else if (mode === 'past') {
            setMode('past')
        }
    }
    return (
        <section>
            {
                lang === 'ja' &&
                <SectionHeader id="concerts" title="コンサート" titleEn="Conserts" />
            }
            {
                lang === 'en' &&
                <SectionHeader id="concerts" title="Conserts" titleEn="Conserts" />
            }
            <div className="lg:flex justify-between">
                <div className="lg:flex">
                    <div>
                        <div className="flex justify-center lg:justify-start my-2">
                            <button
                                className={`font-medium text-sm py-1 px-4 border border-solid border-[#937a43] bg-[#fefaff] text-[#937a43] ${mode === 'upcoming' ? 'font-medium text-sm py-1 px-4 border border-solid text-[#ee71bf] bg-[#ffeeee]' : ''}`}
                                onClick={() => handleClickModeButton('upcoming')}
                            >
                                Upcoming
                            </button>
                            <button
                                className={`font-medium text-sm py-1 px-4 border border-solid ml-[15px] border-[#937a43] bg-[#fefaff] text-[#937a43] ${mode === 'past' ? 'afont-medium text-sm py-1 px-4 border border-solid ml-[15px]  text-[#ee71bf] bg-[#ffeeee]' : ''}`}
                                onClick={() => handleClickModeButton('past')}
                            >
                                Past
                            </button>
                        </div>
                        <div className="mb-4 lg:mt-4" id="Concerts">
                            {
                                mode === 'upcoming' &&
                                <ConcertsUpcoming />
                            }
                            {
                                mode === 'past' &&
                                <ConcertsPast />
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/photo/concert1.webp" className="rounded-[10px] lg:w-[500px] lg:mr-[50px]" width="100%" />
                </div>
            </div>
        </section >
    )
}