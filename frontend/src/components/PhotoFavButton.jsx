import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, onToggleFavourite, isFavourite }) {

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => onToggleFavourite(photoId)}>
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;