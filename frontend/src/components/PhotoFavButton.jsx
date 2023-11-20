import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = appData => {
  const selected = appData.isFav(appData.id);
  const handleClick = () => appData.updateToFavPhotoIds(appData.id);
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} displayAlert={false}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;