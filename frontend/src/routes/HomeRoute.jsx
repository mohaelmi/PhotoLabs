import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  
  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        likes={props.likes}
        toggleLike={props.toggleLike}
        selectedPhoto={props.selectedPhoto}
        selectTopic={props.selectTopic}
        searchPhoto={props.searchPhoto}
        changeMode={props.changeMode}
        mode={props.mode}
        
      />
      <PhotoList
        photos={props.photos}
        likes={props.likes}
        openModal={props.openModal}
        toggleLike={props.toggleLike}
        selectedPhoto={props.selectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
