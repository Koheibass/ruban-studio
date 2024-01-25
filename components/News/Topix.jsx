import { Info } from '@/components/News/Info'
import { MoviePlayer } from '@/components/MoviePlayer'

export const Topix = () => {
    return (
        <div className="topix">
            <Info />
            <div>
                <h3 className="play-movie">
                    <div>演奏動画</div>
                    <div className="translate__another">Movies</div>
                </h3>
                <MoviePlayer />
            </div>
        </div>
    )
}