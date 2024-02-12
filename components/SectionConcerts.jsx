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
                                className={`upcoming__button ${mode === 'upcoming' ? 'activate' : ''}`}
                                onClick={() => handleClickModeButton('upcoming')}
                            >
                                Upcoming
                            </button>
                            <button
                                className={`past__button ${mode === 'past' ? 'activate' : ''}`}
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