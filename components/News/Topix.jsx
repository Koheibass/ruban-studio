import { Info } from '@/components/News/Info'
import { MoviePlayer } from '@/components/MoviePlayer'
import { useLanguage } from '@/utils/language';
import { InfoEn } from '../English/Newsen.jsx/InfoEn';
import { MoviePlayerEn } from '../English/Newsen.jsx/MoviePlayerEn';

export const Topix = () => {
    const { lang } = useLanguage();
    return (
        <div className="topix">
            {
                lang === 'ja' &&
                <Info />
            }
            {
                lang === 'en' &&
                <InfoEn />
            }
            <div>
                {
                    lang === 'ja' &&

                    <h3 className="play-movie">
                        <div>演奏動画</div>
                        <div className="translate__another">Movies</div>
                    </h3>
                }
                {
                    lang === 'en' &&
                    <h3 className="play-movie">
                        <div>Movies</div>
                        <div className="translate__another">Movies</div>
                    </h3>
                }
                {
                    lang === 'ja' &&
                    <MoviePlayer />
                }
                {
                    lang === 'en' &&
                    <MoviePlayerEn />
                }
            </div>
        </div>
    )
}