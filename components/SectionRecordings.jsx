import { SectionHeader } from "./SectionHeader"
import Link from "next/link"

export const SectionRecordings = () => {
    return (
        <section className="section_recordings">
            <SectionHeader id="recordings" title="CD" titleEn="Recordings" />
            <div className="recordings__content">
                <div>
                    <img src="/photo/NeueWelt1.webp" className="recordings__photo" width="100%" />
                </div>
                <div className="cd__content">
                    <h3 className="cd__title">Neue Welt 〜新しい世界〜</h3>
                    <p className="cd__days">2018年1月11日 リリース<br />¥ 3,300 (税込) + 送料</p>
                    <p className="cd__content">ドイツで録音された珠玉のCD。
                        <br />ドイツの空気の中に響く美しい音色を是非お楽しみください。
                    </p>
                    <div className="recorded-music">
                        <b>収録曲</b>
                        <br />
                        <div>
                            <ul className="recorded-music-list">
                                <li className="recorded-music-list__content">
                                    J.S.バッハ
                                    <br />
                                    平均律クラヴィーア曲集第Ⅱ巻より 第9番 ホ長調 BWV878
                                </li>
                                <li className="recorded-music-list__content">
                                    L.v.ベートーヴェン
                                    <br />
                                    ピアノソナタ第30番 ホ長調 作品109
                                </li>
                                <li className="recorded-music-list__content">
                                    F.シューベルト
                                    <br />
                                    ピアノソナタ第18番 ト長調 幻想 D894
                                </li>
                            </ul>
                        </div>
                        <br />
                        録音: 2017年4月27日
                        <br />Barocksaal Rostock, Deutschland
                    </div>
                    <button className="recordings__button">
                        <a href="https://rinaakaboshi.official.ec/items/65023901/" target="_blank" rel="noopener noreferrer">CDを購入</a>
                    </button>
                </div>
            </div>
        </section>
    )
}