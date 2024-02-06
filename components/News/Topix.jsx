import { Info } from '@/components/News/Info'
import { MoviePlayer } from '@/components/MoviePlayer'
import { useLanguage } from '@/utils/language';
import { InfoEn } from '../English/Newsen.jsx/InfoEn';
import { MoviePlayerEn } from '../English/Newsen.jsx/MoviePlayerEn';

export const Topix = () => {
    const { lang } = useLanguage();
    return (
        <div className="grid grid-cols-2 gap-4">
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

                    <h3 className="text-center text-[16px] leading-none font-bold pt-4 pb-1 text-[#937a43] font-noto">
                        <div>演奏動画</div>
                        <div className="translate__another text-[12px] text-center w-full inline-block relative capitalize font-paris">Movies</div>
                    </h3>
                }
                {
                    lang === 'en' &&
                    <h3 className="text-center text-[16px] leading-none font-bold pt-4 pb-1 text-[#937a43]">
                        <div>Movies</div>
                        <div className="translate__another text-[12px] text-center w-full inline-block relative capitalize font-paris">Movies</div>
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