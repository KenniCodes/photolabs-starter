import React, { useState, useCallback } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photo) => {
    console.log(photo);
    setIsModalOpen(true);
    setClickedPhoto(photo);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedPhoto(null);
  };

  const toggleFavourite = useCallback((photoId) => {
    setFavouritePhotos(prevFavourites => {
      return prevFavourites.includes(photoId)
        ? prevFavourites.filter(id => id !== photoId)
        : [...prevFavourites, photoId];
    });
  }, []);

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={favouritePhotos.length > 0}/>
      <PhotoList onToggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} onSelectedPhoto={openModal} />
      <PhotoDetailsModal isOpen={isModalOpen} closeModal={closeModal} photo={clickedPhoto}/>
    </div>
  );
};

export default HomeRoute;
