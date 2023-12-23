import React from 'react';
import { ImageGallery } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGalleryItem = ({ pictures, onOpenModal }) => {
  return (
    <>
      <ImageGallery pictures={pictures} onOpenModal={onOpenModal} />
    </>
  );
};