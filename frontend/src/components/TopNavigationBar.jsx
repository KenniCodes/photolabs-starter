import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;