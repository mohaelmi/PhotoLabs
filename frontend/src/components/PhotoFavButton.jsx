import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike ] = useState(false)
  const toggleLike = () => {
    setLike(!like)
  }

  return (
    <div  onClick={toggleLike} className= {`photo-list__fav-icon ${like}`} >
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
      </div>
    </div>
  );
}

export default PhotoFavButton;