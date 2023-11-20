import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = appData => {
  return (
    <div className="top-nav-bar__topic-list">
      {appData.state.topicsArray.map(newElements => <TopicListItem key={newElements.id} {...newElements} onLoadTopic={appData.onLoadTopic}/>)}
    </div>
  );
};

export default TopicList;