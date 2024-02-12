export const PhotoButton = ({ onClick, className, thumbnailURL }) => {
    return (
        <button onClick={onClick} className={`${className} top-movie`}>
            <img className="grayscale-[0.1] brightness-[0.7] rounded lg:rounded-2xl lg:px-[10px] lgw-full" src={thumbnailURL} width="100%" />
            <span className="movie-play">
                <img src="/icon/playmovie.svg" width="20%" className="movie-play3" />
            </span>
        </button>
    )
}