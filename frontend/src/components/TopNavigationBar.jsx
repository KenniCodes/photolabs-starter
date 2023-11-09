import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import ThemeToggle from './ThemeToggle';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ isFavPhotoExist, topic, fetchPhotosByTopic, theme, toggleTheme }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topic={topic} fetchPhotoByTopic={fetchPhotosByTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default TopNavigation;