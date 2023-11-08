import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topic, fetchPhotoByTopic }) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {topic.map((sampleTopicData, index) => (
        <TopicListItem key={sampleTopicData.id} sampleTopic={sampleTopicData} fetchPhotoByTopic={fetchPhotoByTopic}/>
      ))}
    </ul>
  );
};

export default TopicList;