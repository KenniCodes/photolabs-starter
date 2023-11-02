import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton/>
      <img className="photo-list__image" id={props.sample.id} src={props.sample.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.sample.profile} />
        <div className="photo-list__user-info">
          <span>
            {props.sample.username}
          </span>
          <p className="photo-list__user-location">
            {props.sample.location.city}, {props.sample.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
