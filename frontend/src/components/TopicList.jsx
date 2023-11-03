import React from "react";

import topics from "mocks/topics";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = () => {
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((sampleTopicData, index) => (
        <TopicListItem key={sampleTopicData.id} sampleTopic={sampleTopicData} />
      ))}
    </ul>
  );
};

export default TopicList;