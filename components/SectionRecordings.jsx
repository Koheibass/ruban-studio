import { SectionHeader } from "./SectionHeader"
import Link from "next/link"

export const SectionRecordings = () => {
    return (
        <section class="section_recordings">
            <SectionHeader id="recordings" title="CD" titleEn="Recordings" />
            <div class="recordings__content">
                <div>
                    <img src="/photo/NeueWelt1.webp" class="recordings__photo" width="100%" />
                </div>
                <div class="cd__content">
                    <h3 class="cd__title">Neue Welt 〜新しい世界〜</h3>
                    <p class="cd__days">2018年1月11日 リリース<br />¥ 3,300 (税込) + 送料</p>
                    <p class="cd__content">ドイツで録音された珠玉のCD。
                        <br />ドイツの空気の中に響く美しい音色を是非お楽しみください。
                    </p>
                    <div class="recorded-music">
                        <b>収録曲</b>
                        <br />
                        <div>
                            <ul class="recorded-music-list">
                                <li class="recorded-music-list__content">
                                    J.S.バッハ
                                    <br />
                                    平均律クラヴィーア曲集第Ⅱ巻より 第9番 ホ長調 BWV878
                                </li>
                                <li class="recorded-music-list__content">
                                    L.v.ベートーヴェン
                                    <br />
                                    ピアノソナタ第30番 ホ長調 作品109
                                </li>
                                <li class="recorded-music-list__content">
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
                    <button class="recordings__button">
                        <Link href="https://rinaakaboshi.official.ec/items/65023901">CDを購入</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}