import { Info } from '@/components/Info'
import { MoviePlayer } from '@/components/MoviePlayer'

export const Topix = () => {
    return (
        <div class="topix">
            <Info />
            <div>
                <h3 class="play-movie">
                    <div>演奏動画</div>
                    <div class="translate__another">Movies</div>
                </h3>
                <MoviePlayer />
            </div>
        </div>
    )
}