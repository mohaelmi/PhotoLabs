import React, { useState } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "components/TopicList";
import FavBadge from "components/FavBadge";

const TopNavigation = (props) => {
  const [location, setLocation] = useState("");

  // console.log(props)

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchPhoto(location);
  };
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={props.topics}
        selectTopic={props.selectTopic}
        mode={props.mode}
      />

      <form className="search-form">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Search.."
        />
        <button type="submit" onClick={onSubmit}>
          SEARCH
        </button>
      </form>
      <i onClick={() => props.changeMode(!props.mode)} className="dark-mode">
        mode
      </i>

      <FavBadge
        isFavPhotoExist={props.likes.length > 0}
        selected={props.toggleLike}
      />
    </div>
  );
};

export default TopNavigation;
