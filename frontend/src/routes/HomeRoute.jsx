import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const HomeRoute = () => {
  const {
    isModalOpen,
    favouritePhotos,
    clickedPhoto,
    photoData,
    topicData,
    openModal,
    closeModal,
    toggleFavourite
  } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={favouritePhotos.length > 0} topic={topicData} />
      <PhotoList onToggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} onSelectedPhoto={openModal} photo={photoData} />
      <PhotoDetailsModal isOpen={isModalOpen} closeModal={closeModal} photo={clickedPhoto} onToggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} />
    </div>
  );
};

export default HomeRoute;
