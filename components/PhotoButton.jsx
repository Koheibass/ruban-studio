export const PhotoButton = () => {
    function onClick() { }
    return (
        <div class="top-movie">
            <img class="top-movie3" src="/photo/Lebewohl.jpg" width="100%" />
            <div class="movie-play">
                <img src="/icon/playmovie.svg" width="20%" class="movie-play3" />
            </div>
            {onClick}
        </div >
    )
}