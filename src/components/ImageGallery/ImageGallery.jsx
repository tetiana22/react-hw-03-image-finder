import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { GalleryList } from "./ImageGallery.styled"

export const ImageGallery = ({ pictures, error, onOpenModal }) => {

    return (
        <GalleryList>
          <ImageGalleryItem pictures = {pictures} error = {error} onOpenModal = {onOpenModal} />
      </GalleryList>
    )
}