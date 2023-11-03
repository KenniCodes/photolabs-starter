import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ sampleTopic }) => {
  return ( 
    <ul className="topic-list__item">
      <a href={`${sampleTopic.slug}`}><span>{sampleTopic.title}</span></a>
    </ul>
  );
};

export default TopicListItem;
