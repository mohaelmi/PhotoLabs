import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import { useApplicationData } from "../hooks/useApplicationData";

const HomeRoute = (props) => {
  const [likes, toggleLike] = useApplicationData([]);
  console.log(likes);
  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        likes={props.likes}
        toggleLike={props.toggleLike}
      />
      <PhotoList
        photos={props.photos}
        likes={props.likes}
        openModal={props.openModal}
        toggleLike={props.toggleLike}
        selectedPhoto = {props.selectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
