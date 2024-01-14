import { SectionHeader } from "./SectionHeader"
import { TopButton } from "./TopButton"

export const SectionMedia = () => {
    return (
        <section class="section_media">
            <SectionHeader id="media" title="メディア" titleEn="Media" />
            <div class="media__button">
                <button onClick="switchToMovie();removeClassToMovie()" id="MovieLeft"
                    class="movie-button activate">動画</button>
                <button onClick="switchToPhoto();addClassToPhoto()" id="PhotoRight" class="photo-button">写真</button>
            </div>
            <div class="media__content" id="medialist">
                <div class="media__list">
                    <div>
                        <div class="top-movie" data-video-id="4Tr9Y_rOfh4">
                            <img alt="video" class="top-movie3" src="/photo/Lebewohl.jpg" width="100%" />
                            <div class="movie-play">
                                <img src="/icon/playmovie.svg" width="20%" class="movie-play3" />
                            </div>
                        </div>
                        <div class="individual-videos">
                            ベートーヴェン : ピアノソナタ第s26番「告別」op.81a
                        </div>
                    </div>
                    <div>
                        <div class="top-movie" data-video-id="n-B9BzPxbzk">
                            <img alt="video" class="top-movie3" src="/photo/Widmung.jpg" width="100%" />
                            <div class="movie-play">
                                <img src="/icon/playmovie.svg" width="20%" class="movie-play3" />
                            </div>
                        </div>
                        <div class="individual-videos">シューマン＝リスト : 献呈</div>
                    </div>
                    <div>
                        <div class="top-movie" data-video-id="IkZB4TZtUAM">
                            <img alt="video" class="top-movie3" src="/photo/blackkeys.jpg" width="100%" />
                            <div class="movie-play">
                                <img src="/icon/playmovie.svg" width="20%" class="movie-play3" />
                            </div>
                        </div>
                        <div class="individual-videos">ショパン : 練習曲集op.10よりNo.5「黒鍵」</div>
                    </div>
                    <div>
                        <div class="top-movie" data-video-id="66Fel4dySJ8">
                            <img alt="video" class="top-movie3" src="/photo/Impromptus.jpg" width="100%" />
                            <div class="movie-play">
                                <img src="/icon/playmovie.svg" width="20%" class="movie-play3" />
                            </div>
                        </div>
                        <div class="individual-videos">シューベルト：即興曲 第3番 D899 op.90-3 変ト長調</div>
                    </div>
                </div>
                <br />
                <div class="top__button">
                    <TopButton />
                </div>
            </div>
        </section>
    )
}