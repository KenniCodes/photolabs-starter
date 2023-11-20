import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = appData => {
  return (
    <div className="topic-list__item" onClick={() => appData.onLoadTopic(appData.id)}>
      <span>{appData.title}</span>
    </div>
  );
};

export default TopicListItem;