import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';

const TopNavigation = (props) => {
  
  const checkArray = () => props.selected.length > 0 ? props.selected : null

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics ={props.topics} />
      <FavBadge isFavPhotoExist = {checkArray()} />
    </div>
  )
}

export default TopNavigation;