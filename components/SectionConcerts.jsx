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
        <section className="section_concerts">
            {
                lang === 'ja' &&
                <SectionHeader id="concerts" title="コンサート" titleEn="Conserts" />
            }
            {
                lang === 'en' &&
                <SectionHeader id="concerts" title="Conserts" titleEn="Conserts" />
            }
            <div>
                <div>
                    <div className="concerts__button flex justify-center my-2">
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
                    <div className="mb-4" id="Concerts">
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
                <div>
                    <img src="/photo/concert1.webp" className="rounded-[10px]" width="100%" />
                </div>
            </div>
        </section>
    )
}