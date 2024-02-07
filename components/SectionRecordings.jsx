import { SectionHeader } from "./SectionHeader"


export const SectionRecordings = () => {
    return (
        <section className="pb-8">
            <SectionHeader id="recordings" title="CD" titleEn="Recordings" />
            <div>
                <div>
                    <img src="/photo/NeueWelt1.webp" width="100%" />
                </div>
                <div className="gap-4 grid text-[#937a43]">
                    <h3 className="font-bold text-xl text-center mt-2 m-0">Neue Welt 〜新しい世界〜</h3>
                    <p className="text-sm text-center mt-2 m-0">2018年1月11日 リリース<br />¥ 3,300 (税込) + 送料</p>
                    <p className="mt-4 m-0">ドイツで録音された珠玉のCD。
                        <br />ドイツの空気の中に響く美しい音色を是非お楽しみください。
                    </p>
                    <div className="my-4">
                        <b>収録曲</b>
                        <br />
                        <div>
                            <ul className="list-none ml-2 m-0 p-0">
                                <li className="mt-2">
                                    J.S.バッハ
                                    <br />
                                    平均律クラヴィーア曲集第Ⅱ巻より 第9番 ホ長調 BWV878
                                </li>
                                <li className="mt-2">
                                    L.v.ベートーヴェン
                                    <br />
                                    ピアノソナタ第30番 ホ長調 作品109
                                </li>
                                <li className="mt-2">
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
                    <button className="font-medium text-sm py-2 px-4 justify-center items-center bg-[#fcafaf] rounded-lg w-[96%] mt-3 ml-[7px] text-white">
                        <a href="https://rinaakaboshi.official.ec/items/65023901/" target="_blank" rel="noopener noreferrer">🛒 CDを購入</a>
                    </button>
                </div>
            </div>
        </section>
    )
}