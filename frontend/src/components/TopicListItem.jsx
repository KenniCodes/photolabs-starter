import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ sampleTopic }) => {
  return ( 
    <ul className="topic-list__item">
      <span>{sampleTopic.title}</span>
    </ul>
  );
};

export default TopicListItem;
