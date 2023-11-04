import { useState, useCallback } from 'react';

const useApplicationData = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((photo) => {
    setClickedPhoto(photo);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setClickedPhoto(null);
  }, []);

  const toggleFavourite = useCallback((photoId) => {
    setFavouritePhotos(prevFavourites => {
      return prevFavourites.includes(photoId)
        ? prevFavourites.filter(id => id !== photoId)
        : [...prevFavourites, photoId];
    });
  }, []);

  return {
    isModalOpen,
    favouritePhotos,
    clickedPhoto,
    openModal,
    closeModal,
    toggleFavourite
  };
};

export default useApplicationData;
