import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const HomeRoute = () => {
  // importing hooks via single hook 'useApplicationData' 
  const {
    isModalOpen,
    favouritePhotos,
    clickedPhoto,
    photoData,
    topicData,
    fetchPhotosByTopic,
    fetchSimilarPhotos,
    openModal,
    closeModal,
    toggleFavourite
  } = useApplicationData();

  return (
    <div className="home-route">
      {/* if any photos exist in favourite photos array then display favourite photos state is passed in */}
      <TopNavigation isFavPhotoExist={favouritePhotos.length > 0} topic={topicData} fetchPhotosByTopic={fetchPhotosByTopic} />
      <PhotoList onToggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} onSelectedPhoto={openModal} photo={photoData} />
      <PhotoDetailsModal isOpen={isModalOpen} closeModal={closeModal} photo={clickedPhoto} onToggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} fetchSimilarPhotos={fetchSimilarPhotos} />
    </div>
  );
};

export default HomeRoute;
