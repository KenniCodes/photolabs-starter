import React from "react";

import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ onToggleFavourite, favouritePhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map((sampleData, index) => (
        <PhotoListItem key={sampleData.id} sample={sampleData} photoId={sampleData.id} onToggleFavourite={onToggleFavourite} isFavourite={favouritePhotos.includes(sampleData.id)}/>
      ))}
    </ul>
  );
};

export default PhotoList;
