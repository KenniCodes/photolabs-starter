import React, { useState, useCallback } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const toggleFavourite = useCallback((photoId) => {
    setFavouritePhotos(prevFavourites => {
      return prevFavourites.includes(photoId)
        ? prevFavourites.filter(id => id !== photoId)
        : [...prevFavourites, photoId];
    });
  }, []);

  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList onToggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} />
    </div>
  );
};

export default HomeRoute;
