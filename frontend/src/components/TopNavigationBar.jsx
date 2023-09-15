import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import { useToggleLike } from 'hooks/useToggleLike';

const TopNavigation = (props) => {

  console.log(props.likes);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics ={props.topics} />
      <FavBadge isFavPhotoExist = {props.likes} selected = {props.likes} />
    </div>
  )
}

export default TopNavigation;