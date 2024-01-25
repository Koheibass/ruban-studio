
export const VideoMedia = ({ video }) => {
    return (
        <div>
            <div class="top-movie" data-video-id={video.videoId}>
                <img alt="video" class="top-movie3" src={video.thumbnailURL} width="100%" />
                <div class="movie-play">
                    <img src="/icon/playmovie.svg" width="20%" class="movie-play3" />
                </div>
            </div>
            <div class="individual-videos">
                {video.title}
            </div>
        </div>
    )
}