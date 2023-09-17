import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const {likes, toggleLike } = props;
  const [like, setLike] = useState(false);

  const toggleLiked = () => {
    toggleLike(props.photo_id);
   setLike(!like);
  };



  

  return (
    <div onClick={toggleLiked} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
