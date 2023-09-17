import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, selected }) => {

  return (
    <div className="fav-badge">
      <FavIcon displayAlert={selected} selected = {selected}  />
    </div>
  ) 
};

export default FavBadge;