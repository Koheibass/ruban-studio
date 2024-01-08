import { SectionHeader } from "@/components/SectionHeader"
import TopSlider from "@/components/TopSlider";
import Link from "next/link"

export default function Home() {
  return (
    <div class="whole">
      <nav class="header">
        <div>
          <div class="header__whole">
            <div class="header__left">
              <Link class="header__title" href="/">Rina Akaboshi</Link>
            </div>
            <div class="header__right">
              <div class="header__menu">
                <Link href="#biography" class="menu__biography">プロフィール</Link>
                <Link href="#concerts" class="menu__concerts">コンサート</Link>
                <Link href="#media" class="menu__media">メディア</Link>
                <Link href="#recordings" class="menu__recordings">CD</Link>
                <Link href="#contact" class="menu__contact">お問い合わせ</Link>
              </div>
              <div class="header__icon">
                <Link href="https://www.instagram.com/Linkkaboshi_rina/" class="instagram">
                  <img src="/icon/Instagram.svg" width="20" height="20" alt="instagram" />
                </Link>
                <Link href="https://www.youtube.com/@akaboshirina" class="youtube">
                  <img src="/icon/YouTube.svg" width="28" height="28" alt="YouTube" />
                </Link>
              </div>
              <ul class="dropdown">
                <li class="dropdown__content">
                  <Link href="/" class="dropdown__menu__link">Japanese</Link>
                  <ul class="dropdown__menu">
                    <li class="dropdown__menu__item"><Link href="index.html"
                      class="drop-menu__link">Japanese</Link></li>
                    <li class="dropdown__menu__item"><Link href="/english/indexen.html"
                      class="drop-menu__link">English</Link></li>
                  </ul>
                </li>
              </ul>
              <div class="hamburger">
                <span>
                  <img src="/photo/piano.svg" width="25" height="25" alt="piano" />
                </span>
                <p class="piano-menu">menu</p>
              </div>
            </div>
            <ul class="slide-menu">
              <li><Link href="#biography" class="slide-menu1">プロフィール</Link></li>
              <li><Link href="#concerts" class="slide-menu2">コンサート</Link></li>
              <li><Link href="#media" class="slide-menu3">メディア</Link></li>
              <li><Link href="#recordings" class="slide-menu4">CD</Link></li>
              <li><Link href="#contact" class="slide-menu5">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <TopSlider />

      <main class="main">
        <section class="section_news">
          <div class="news">
            <div class="news__title">NEWS</div>
            <Link href="https://oto-inochi.com/" class="top__news">
              <span class="top__news__content">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</span>
            </Link>
          </div>
          <div class="topix">
            <div>
              <h3 class="info">
                <div>最新情報</div>
                <div class="translate__another">Updates</div>
              </h3>
              <div class="info_content">
                <div class="info_content_days">
                  {"2023.09.18"}
                  <small>(Mon)</small>
                </div>
                <Link href="https://oto-inochi.com/"
                  class="info_detail">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</Link>
                <br />
                <div class="info_content_days">
                  {"2023.08.01"}
                  <small>(Tue)</small>
                </div>
                <Link href="/news/2023801.html" class="info_detail">みんなの挑戦をあたたかく見守る場所“おといのち音楽会”開催決定</Link>
              </div>
              <div class="top__button__updates">
                <button class="top__button__content">
                  <Link href="topnews.html"> もっと見る</Link>
                </button>
              </div>
            </div>

            <div>
              <h3 class="play-movie">
                <div>演奏動画</div>
                <div class="translate__another">Movies</div>
              </h3>
              <div>
                <div class="top-movie" data-video-id="4Tr9Y_rOfh4">
                  <img alt="video" class="top-movie2" src="/photo/Lebewohl.jpg" width="100%" />
                  <div class="movie-play">
                    <img src="/icon/playmovie.svg" width="20%" class="movie-play2" />
                  </div>
                </div>
                <div class="top-tracklist">
                  ベートーヴェン : ピアノソナタ第26番「告別」op.81a
                </div>
              </div>
              <div class="top__button">
                <button class="top__button__content">
                  <Link href="videos.html"> もっと見る</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="section_biography">
          <SectionHeader id="biography" title="プロフィール" titleEn="Biography" />

          <div class="biography__content">
            <div>
              <img src="/photo/biography.webp" class="biography__photo" width="100%" />
            </div>

            <div class="biography__name">
              <div class="biography__name__japanese">
                赤星 里奈
                <span class="biography__name__alphabet">
                  Rina Akaboshi
                </span>
              </div>
            </div>

            <div class="biography__button">
              <button onClick="switchToJapanese();removeClassToJapanese()" id="JapaneseLeft"
                class="biography__button__japanese activate">Japanese</button>
              <button onClick="switchToEnglish();addClassToEmglish()" id="EnglishRight"
                class="biography__button__english">English</button>
            </div>

            <div class="main__profile" id="profile">
              <p>
                クラシック音楽を専門とするピアニスト。<br />
                特にドイツ音楽に造詣が深いが、近年ではフランス音楽やロシア音楽にも研究心を持ち、レパートリーと表現の幅を拡げている。
                <br />
                円熟した表現と音楽性を深く追求した演奏に定評があり、響きの新しい可能性を探求するために奏法を研究し続けている。
                <br />
                2018 年に初のソロアルバム<br />「Neue Welt ～新しい世界～」をリリース。
                <br />
                現在は自身の演奏に関する研究活動や後進の育成とともに、クラシック音楽界に貢献すべく活動の幅を広げている。
              </p>
              <button class="biography__button__content__japanese">
                <Link href="biography.html">詳細</Link>
              </button>
            </div>
          </div>
        </section>

        <section class="section_concerts">
          <SectionHeader id="concerts" title="コンサート" titleEn="Conserts" />
          <div class="concerts__whole">
            <div class="concerts__selector">
              <div>
                <div class="concerts__button">
                  <button onClick="switchToUpcoming();removeClassToUpcoming()" id="UpcomingLeft"
                    class="upcoming__button">Upcoming</button>
                  <button onClick="switchToPast();addClassToPast()" id="PastRight"
                    class="past__button activate">Past</button>
                </div>
                <div class="concerts__content" id="Concerts">
                  <div>
                    <div>
                      <span class="concert-days">2021.06.19</span>
                      <span class="concert-detail">YouTube / イマチケ</span>
                    </div>
                    <Link href="concert1.html" class="concert-update">赤星 里奈 ピアノリサイタル vol.1 presented by
                      {"MUSICUM"}</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="/photo/concert1.webp" class="concert-photo" width="100%" />
            </div>
          </div>
        </section>
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
                  ベートーヴェン : ピアノソナタ第26番「告別」op.81a
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
              <button class="top__button__content">
                <Link href="videos.html"> もっと見る</Link>
              </button>
            </div>
          </div>
        </section>
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
        <section class="section_contact">
          <SectionHeader id="contact" title="お問い合わせ" titleEn="contact" />
          <div>
            <div class="contact__annotation">ピアニスト 赤星里奈へのご依頼・お問い合わせなどは、<br />こちらからお願い致します。</div>
            <form action="/Linkpi/contact" method="get" novalidate id="contact-form" class="contact-form">
              <div>
                <label for="name" class="contact-form2">お名前</label>
                <input class="contact__frame" id="name" name="name" />
              </div>
              <div>
                <label for="email" class="contact-form2">メールアドレス</label>
                <input class="contact__frame" id="email" name="email" />
              </div>
              <div>
                <label class="contact-form2" for="contact-form-type">お問い合わせの種別</label>
                <select name="type" class="contact__frame__type">
                  <option value="演奏依頼">演奏依頼</option>
                  <option value="企業からのご依頼">企業からのご依頼</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              <div>
                <label for="message" class="contact-form2">お問い合わせの内容</label>
                <textarea class="contact__frame__message" id="message" name="message"></textarea>
              </div>
              <button class="contact__button" type="submit" data-comform-touched="true">送信</button>
            </form>
          </div>
        </section>
      </main>

      <div class="footer">
        <div class="footer__content">
          <Link href="https://www.instagram.com/Linkkaboshi_rina/">
            <img src="/icon/Instagram.svg" class="footer__instagram" width="40" height="50" alt="twitter" />
          </Link>
          <Link href="https://www.youtube.com/@akaboshirina">
            <img src="/icon/YouTube.svg" class="footer__youtube" width="60" height="60" alt="YouTube" />
          </Link>
        </div>
        <div class="lisence">© 2023 Rina Akaboshi</div>
      </div>
    </div>

  )
}
