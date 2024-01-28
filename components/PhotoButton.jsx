export const PhotoButton = ({ onClick, className, thumbnailURL }) => {
    return (
        <button onClick={onClick} className={`${className} top-movie`}>
            <img className="top-movie3" src={thumbnailURL} width="100%" />
            <span className="movie-play">
                <img src="/icon/playmovie.svg" width="20%" className="movie-play3" />
            </span>
        </button>
    )
}