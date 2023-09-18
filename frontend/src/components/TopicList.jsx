import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => {
        return <TopicListItem key={topic.id} topic={topic.title} id={topic.id} selectTopic = {props.selectTopic}/>;
      })}
    </div>
  );
};

export default TopicList;
