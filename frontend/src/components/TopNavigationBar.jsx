import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';


const TopNavigation = (props) => {

  const isFavPhotoExist =  props.likes.length > 0 ? true : false
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics ={props.topics} selectTopic = {props.selectTopic}/>
      <FavBadge isFavPhotoExist = {isFavPhotoExist} selected = {props.toggleLike} />
    </div>
  )
}

export default TopNavigation;