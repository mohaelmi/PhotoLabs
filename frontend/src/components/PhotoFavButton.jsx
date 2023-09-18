import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const {likes, toggleLike } = props;
  const toggleLiked = () => {
    toggleLike(props.photo_id);
  };
  

  return (
    <div onClick={toggleLiked} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={likes.includes(props.photo_id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
