export const PhotoButton = ({ onClick, className }) => {
    return (
        <button onClick={onClick} className={`${className} top-movie`}>
            <img class="top-movie3" src="/photo/Lebewohl.jpg" width="100%" />
            <span class="movie-play">
                <img src="/icon/playmovie.svg" width="20%" class="movie-play3" />
            </span>
        </button>
    )
}