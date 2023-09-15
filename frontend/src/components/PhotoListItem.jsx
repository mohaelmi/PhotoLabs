import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoDetailsModal.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  return (
    <article className="photo-list__item">
      <PhotoFavButton
        favourate={props.favourate}
        toggleLike = {props.toggleLike}
        photo_id={props.photo.id}
      />
      <img
        src={props.photo.urls.regular}
        className="photo-list__image"
        onClick={() => props.openModal(props.photo.id)}
      />
      <div className="photo-list__user-details photo-list__user-info">
        <img
          src={props.photo.user.profile}
          className="photo-list__user-profile"
        />
        <div>
          <span className="photo-list__user-info">{props.photo.user.name}</span>
          <br />
          <span className="photo-list__user-location photo-list__user-info">
            {props.photo.location.city}, {props.photo.location.country}
          </span>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
