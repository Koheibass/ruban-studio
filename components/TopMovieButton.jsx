export const TopMovieButton = ({ onClick, className }) => {
    return (
        <button onClick={onClick} className={`${className} text-center mx-auto flex flex-col cursor-pointer mb-2 relative`}>
            <img className="grayscale-[0.1] brightness-[0.7] rounded" src="/photo/Lebewohl.jpg" width="100%" />
            <span className="justify-center items-center inset-0 flex absolute pb-[10px]">
                <img src="/icon/playmovie.svg" width="20%" />
            </span>
        </button>
    )
}