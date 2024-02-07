import { SectionHeader } from "../SectionHeader"

export const SectionRecordingsEn = () => {
    return (
        <section className="pb-8">
            <SectionHeader id="recordings" title="CD" titleEn="Recordings" />
            <div>
                <div>
                    <img src="/photo/NeueWelt1.webp" className="recordings__photo" width="100%" />
                </div>
                <div className="gap-4 grid text-[#937a43]">
                    <h3 className="font-bold text-xl text-center mt-2 m-0">Neue Welt 〜新しい世界〜</h3>
                    <p className="text-sm text-center mt-2 m-0">Released January 11, 2018<br />¥ 3,300 (tax included) + shipping fee</p>
                    <p className="mt-4 m-0">This CD was recorded in Germany.
                        Please enjoy the beautiful tones that resonate in the German air.
                    </p>
                    <div className="my-4">
                        <b>Track Listings</b>
                        <br />
                        <div>
                            <ul className="list-none ml-2 m-0 p-0">
                                <li className="mt-2">
                                    Johann Sebbastian Bach
                                    <br />
                                    Das Wohltemperierte Clavier Teil Ⅱ Nr.9 E-dur BWV878
                                </li>
                                <li className="mt-2">
                                    Ludwig van Beethoven
                                    <br />
                                    Klaviersonate E-dur Nr.30 op.109
                                </li>
                                <li className="mt-2">
                                    Franz Schubert
                                    <br />
                                    Klaviersonate G-dur Nr.18 {"Fantasie"} D894
                                </li>
                            </ul>
                        </div>
                        <br />
                        Recorded : April 27,2017
                        <br />Barocksaal Rostock, Deutschland
                    </div>
                    <button className="text-center items-center font-medium text-sm py-2 px-4 bg-transparent border bg-[#fcafaf] rounded-lg w-2/4 text-white m-auto">
                        <a href="https://rinaakaboshi.official.ec/items/65023901/" target="_blank" rel="noopener noreferrer">🛒 buy CD</a>
                    </button>
                </div>
            </div>
        </section>
    )
}