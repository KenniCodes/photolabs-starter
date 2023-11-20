import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (appData) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton {...appData}/>
      <img className="photo-list__image" src={appData.urls.regular} onClick={() => appData.onPhotoSelect(appData)}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={appData.user.profile} />
        <div className="photo-list__user-info">
          <span>{appData.user.name}</span>
          <p className="photo-list__user-location">{`${appData.location.city}, ${appData.location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;