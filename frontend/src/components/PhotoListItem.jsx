import React from "react";


import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img src={props.photo.urls.full} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.photo.user.profile}  className="photo-list__user-profile"/>
        <div >
          <label className="photo-list__user-info">{ props.photo.user.username }</label><br/>
          <label className="photo-list__user-location photo-list__user-info">{props.photo.location.city}, {props.photo.location.country}</label>
        </div>
      </div>
    </article>
   
  )
};

export default PhotoListItem;
