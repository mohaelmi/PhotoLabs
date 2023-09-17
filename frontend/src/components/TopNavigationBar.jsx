import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';


const TopNavigation = (props) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics ={props.topics} />
      <FavBadge isFavPhotoExist = {props.toggleLike} selected = {props.likes} />
    </div>
  )
}

export default TopNavigation;