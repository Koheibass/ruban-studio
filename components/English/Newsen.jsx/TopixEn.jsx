import { MoviePlayer } from '@/components/MoviePlayer'
import { InfoEn } from './InfoEn'

export const TopixEn = () => {
    return (
        <div className="topix">
            <InfoEn />
            <div>
                <h3 className="play-movie">
                    <div>Movies</div>
                    <div className="translate__another">Movies</div>
                </h3>
                <MoviePlayer />
            </div>
        </div>
    )
}