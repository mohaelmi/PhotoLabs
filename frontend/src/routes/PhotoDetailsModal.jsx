import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoListItem.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const photo = props.photos.find((photo) => photo.id === props.id);
  const similar = Object.values(photo.similar_photos);

  const dark = !props.mode ? "dark" : "";

  return (
    <div className={`photo-details-modal ${dark}`}>
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.closeModal(null)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item ">
        <div style={{ marginLeft: "8%" }}>
          <PhotoFavButton
            likes={props.likes}
            toggleLike={props.toggleLike}
            photo_id={photo.id}
          />
        </div>
        <img src={photo.urls.full} className="photo-details-modal__image " />

        <div className="photo-details-modal__photographer-details">
          <img src={photo.user.profile} className="photo-list__user-profile" />
          <div>
            <span className="photo-list__user-info">{photo.user.name}</span>
            <br />
            <span className="photo-list__user-location photo-list__user-info">
              {photo.location.city}, {photo.location.country}
            </span>
          </div>
        </div>
        <div className="photo-details-modal__images">
          <h5>similar photos</h5>
          <PhotoList
            photos={similar}
            toggleLike={props.toggleLike}
            likes={props.likes}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
