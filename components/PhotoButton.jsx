export const PhotoButton = ({ onClick, className, thumbnailURL }) => {
    return (
        <button onClick={onClick} className={`${className} text-center mx-auto flex flex-col cursor-pointer mb-2 relative`}>
            <img className="grayscale-[0.1] brightness-[0.7] rounded lg:rounded-2xl lg:px-[10px] lgw-full" src={thumbnailURL} width="100%" />
            <span className="justify-center items-center inset-0 flex absolute pb-[10px]">
                <img src="/icon/playmovie.svg" width="20%" />
            </span>
        </button>
    )
}