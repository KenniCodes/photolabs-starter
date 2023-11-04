import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sample, photoId, onToggleFavourite, isFavourite, onSelectedPhoto }) => {
  return (
    <li className="photo-list__item">
      <PhotoFavButton photoId={photoId} onToggleFavourite={onToggleFavourite} isFavourite={isFavourite}/>
      <img className="photo-list__image" src={sample.urls.regular} onClick={() => onSelectedPhoto(sample)} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" alt={`${sample.user.username}'s photo`} src={sample.user.profile} />
        <div className="photo-list__user-info">
          <span>
            {sample.user.name}
          </span>
          <p className="photo-list__user-location">
            {sample.location.city}, {sample.location.country}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
