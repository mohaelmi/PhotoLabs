import React from "react";


import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img src={props.photoListItemData.imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.photoListItemData.profile}  className="photo-list__user-profile"/>
        <div >
          <label className="photo-list__user-info">{ props.photoListItemData.username }</label><br/>
          <label className="photo-list__user-location photo-list__user-info">{props.photoListItemData.location.city}, {props.photoListItemData.location.country}</label>
        </div>
      </div>
    </article>
   
  )
};

export default PhotoListItem;
