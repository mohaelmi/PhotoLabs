import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";






const App = () => {
  const [state,  toggleLike, toggleModal, selectTopic] = useApplicationData();

  return (
    <div className="App">
      {state.selectedPhoto > 0 && (
        <PhotoDetailsModal
          closeModal={toggleModal}
          id={state.selectedPhoto}
          photos={state.photoData}
          selectedPhoto={state.selectedPhoto}
          toggleLike={toggleLike}
          likes={state.likedPhotos}
        />
      )}
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        openModal={toggleModal}
        toggleLike={toggleLike}
        likes={state.likedPhotos}
        selectedPhoto={state.selectedPhoto}
        selectTopic = {selectTopic}
      />
    </div>
  );
};

export default App;
