import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ pictures, onOpenModal }) => {
  return (
    <>
      {pictures &&
        pictures.map(picture => (
          <GalleryItem key={picture.webformatURL}>
            <img
              src={picture.webformatURL}
              alt={picture.tags}
              data-url={picture.largeImageURL}
              onClick={onOpenModal}
            />
          </GalleryItem>
        ))}
    </>
  );
};