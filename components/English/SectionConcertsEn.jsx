import React from "react"
import { SectionHeader } from "../SectionHeader"
import { ConcertsUpcoming } from "../ConcertsUpcoming"
import { ConcertsPast } from "../ConcertsPast"

export const SectionConcertsEn = () => {

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
            <SectionHeader id="concerts" title="Conserts" titleEn="Conserts" />
            <div className="concerts__whole">
                <div className="concerts__selector">
                    <div>
                        <div className="concerts__button">
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
                        <div className="concerts__content" id="Concerts">
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
                    <img src="/photo/concert1.webp" className="concert-photo" width="100%" />
                </div>
            </div>
        </section>
    )
}