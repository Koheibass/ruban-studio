export const ImageMedia = ({ image }) => {
    return (<a href={image.imageURL} data-lightbox="group">
        <img src={image.imageURL} class="photo__detail" />
    </a>
    )
}