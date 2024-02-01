import { InfoEn } from './InfoEn'
import { MoviePlayerEn } from './MoviePlayerEn'

export const TopixEn = () => {
    return (
        <div className="topix">
            <InfoEn />
            <div>
                <h3 className="play-movie">
                    <div>Movies</div>
                    <div className="translate__another">Movies</div>
                </h3>
                <MoviePlayerEn />
            </div>
        </div>
    )
}