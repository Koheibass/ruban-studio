
export const Media = ({ media }) => {
    return (<div key={media.id}>
        <div class="top-movie" data-video-id={media.videoId}>
            <img alt="video" class="top-movie3" src={media.thumbnailURL} width="100%" />
            <div class="movie-play">
                <img src="/icon/playmovie.svg" width="20%" class="movie-play3" />
            </div>
        </div>
        <div class="individual-videos">
            {media.title}
        </div>
    </div>
    )
}