import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isSelected, setIsSelected] = useState(false);
  // toggle between FavIcon selected 'fill' property
  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={toggleSelected}>
        <FavIcon selected={isSelected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;