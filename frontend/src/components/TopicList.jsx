import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topic }) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {topic.map((sampleTopicData, index) => (
        <TopicListItem key={sampleTopicData.id} sampleTopic={sampleTopicData} />
      ))}
    </ul>
  );
};

export default TopicList;