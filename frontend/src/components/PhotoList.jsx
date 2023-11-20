import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (appData) => {
  return (
    <ul className="photo-list">
      {appData.list.map(newElement => <li key={newElement.id}><PhotoListItem {...newElement} {...appData}/></li>)}
    </ul>
  );
};

export default PhotoList;