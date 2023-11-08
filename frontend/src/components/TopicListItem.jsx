import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ sampleTopic, fetchPhotoByTopic }) => {
  const handleTopicClick = (topicId) => {
    fetchPhotoByTopic(topicId);
  };

  return ( 
    <ul className="topic-list__item">
      <span onClick={() => handleTopicClick(sampleTopic.id)}>{sampleTopic.title}</span>
    </ul>
  );
};

export default TopicListItem;
