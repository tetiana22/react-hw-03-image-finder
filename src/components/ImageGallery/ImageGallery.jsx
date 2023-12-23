import React from 'react';
import { GalleryItem, GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ pictures,  onOpenModal }) => {
  return (
    <GalleryList>
      {pictures &&
        pictures.map((picture) => (
          <GalleryItem key={picture.webformatURL}>
            <img
              src={picture.webformatURL}
              alt={picture.tags}
              data-url={picture.largeImageURL}
              onClick={onOpenModal}
            />
          </GalleryItem>
        ))}
    </GalleryList>
  );
};