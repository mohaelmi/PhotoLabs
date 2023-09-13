import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  
  const renderPhotos = () => {
    return props.photos.map((photo, index) => <PhotoListItem photo = {photo} key={photo.id} selected= {props.selected} addOrRemoveId = {props.addOrRemoveId}/>)
  }


  return (
    <ul className="photo-list">
       { renderPhotos() }
    </ul>
  );
};

export default PhotoList;
