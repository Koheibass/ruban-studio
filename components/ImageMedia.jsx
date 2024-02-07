export const ImageMedia = ({ image }) => {
    return (<a href={image.imageURL} data-lightbox="group">
        <img src={image.imageURL} className="w-40 h-40 cursor-pointer rounded object-cover mx-auto max-w-full block" />
    </a>
    )
}