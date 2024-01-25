
export const VideoMedia = ({ video }) => {
    return (
        <div>
            <div className="top-movie" data-video-id={video.videoId}>
                <img alt="video" className="top-movie3" src={video.thumbnailURL} width="100%" />
                <div className="movie-play">
                    <img src="/icon/playmovie.svg" width="20%" className="movie-play3" />
                </div>
            </div>
            <div className="individual-videos">
                {video.title}
            </div>
        </div>
    )
}