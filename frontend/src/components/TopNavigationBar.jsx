import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = appData => {
  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={() => appData.onLoadTopic(0)}>
        PhotoLabs
      </span>
      {appData.children}
      <FavBadge isFavPhotoExist={appData.isFavPhotoExist}/>
    </div>
  );
};

export default TopNavigation;