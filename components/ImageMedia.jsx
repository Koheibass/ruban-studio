

export const ImageMedia = ({ image }) => {
    return (<a href={image.imageURL}>
        <img src={image.imageURL} className="w-40 h-40 cursor-pointer rounded object-cover mx-auto max-w-full block lg:w-[300px] lg:h-[300px] lg:p-1 lg:mt-4" />
    </a>
    )
}