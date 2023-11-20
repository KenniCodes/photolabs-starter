import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';



const HomeRoute = appData => {
  return (
    <div className="home-route">
      <TopNavigation {...appData}>
        <TopicList {...appData}/>
      </TopNavigation>
      <PhotoList list={appData.state.photosArray} {...appData}/>
    </div>
  );
};

export default HomeRoute;