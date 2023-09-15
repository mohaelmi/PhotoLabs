import React, { useState } from "react";
import { useToggleLike } from "../hooks/useToggleLike"

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const [like, toggleLike] = useToggleLike([])
  console.log(like);
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likes={props.likes}   toggleLike = {props.toggleLike} />
      <PhotoList
        photos={props.photos}
        favourate={props.favourate}
        openModal={props.openModal}
        toggleLike = {props.toggleLike}
      />
    </div>
  );
};

export default HomeRoute;
