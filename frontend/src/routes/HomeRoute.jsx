import React, { useState } from 'react';


import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  const [like, setLike ] = useState([])
  const toggleLike = (id) => {
    // setLike(!like)
    if(like.includes(id)){
      const newArray = [...like]
      newArray.pop()
      setLike(newArray)
    }else {
      const newArray = [...like]
      newArray.push(id)
      setLike(newArray)
      setLike(newArray)
    }
  }
  
  return (
    <div className="home-route">
      <TopNavigation topics = {props.topics} selected = {like}  />
      <PhotoList photos ={props.photos} addOrRemoveId = {toggleLike} selected = {like} />
    </div>
  );
};

export default HomeRoute;
