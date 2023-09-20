import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";

const App = () => {
  const [state, toggleLike, toggleModal, selectTopic, searchPhoto, changeMode] =
    useApplicationData();

  const changModeInApp = (mode) => {
    changeMode(!mode);
  };

  const dark = !state.mode ? "dark" : "";

  return (
    <div className={`App ${dark}`}>
      {state.selectedPhoto && (
        <PhotoDetailsModal
          closeModal={toggleModal}
          id={state.selectedPhoto}
          photos={state.photoData}
          selectedPhoto={state.selectedPhoto}
          toggleLike={toggleLike}
          likes={state.likedPhotos}
          mode={state.mode}
        />
      )}
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        openModal={toggleModal}
        toggleLike={toggleLike}
        likes={state.likedPhotos}
        selectedPhoto={state.selectedPhoto}
        selectTopic={selectTopic}
        searchPhoto={searchPhoto}
        changeMode={changModeInApp}
        mode={state.mode}
      />
    </div>
  );
};

export default App;
