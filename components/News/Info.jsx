import Link from 'next/link'

export const Info = () => {
    return (
        <div>
            { }
            <h3 className="info">
                <div>最新情報</div>
                <div className="translate__another">Updates</div>
            </h3>
            <div className="info_content">
                <div className="info_content_days">
                    {"2023.09.18"}
                    <small>(Mon)</small>
                </div>
                <Link href="https://oto-inochi.com/"
                    className="info_detail" target="_blank" rel="noopener noreferrer">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</Link>
                <br />
                <div className="info_content_days">
                    {"2023.08.01"}
                    <small>(Tue)</small>
                </div>
                <Link href="/news/20230801" className="info_detail">みんなの挑戦をあたたかく見守る場所“おといのち音楽会”開催決定</Link>
            </div>
            <div className="top__button__updates">
                <button className="top__button__content">
                    <Link href="/news/topnews">もっと見る</Link>
                </button>
            </div>
        </div>
    )
}