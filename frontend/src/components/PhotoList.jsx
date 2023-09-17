import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  // console.log(props.photos);
  const renderPhotos = () => {
    return props.photos.map((photo, index) => (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        likes={props.likes}
        toggleLike = {props.toggleLike}
        openModal={props.openModal}
        selectedPhoto = {props.selectedPhoto}
      />
    ));
  };

  return <ul className="photo-list">{renderPhotos()}</ul>;
};

export default PhotoList;
