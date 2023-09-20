import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, id, selectTopic }) => {

  return (
    <div className="topic-list__item">
      <span onClick={() => selectTopic(id)}> {topic} </span>
    </div>
  );
};

export default TopicListItem;
