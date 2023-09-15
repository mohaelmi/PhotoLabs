import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';
import { useToggleLike } from 'hooks/useToggleLike';

const FavBadge = ({ isFavPhotoExist, selected }) => {


  return (
    <div className="fav-badge">
      <FavIcon displayAlert={isFavPhotoExist} selected = {!!selected}  />
    </div>
  ) 
};

export default FavBadge;