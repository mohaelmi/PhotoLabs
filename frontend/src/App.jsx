import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";






const App = () => {
  const [likes, photoData, topicData, toggleLike, selectedPhoto, toggleModal] = useApplicationData();

  return (
    <div className="App">
      {selectedPhoto > 0 && (
        <PhotoDetailsModal
          closeModal={toggleModal}
          id={selectedPhoto}
          photos={photoData}
          selectedPhoto={selectedPhoto}
          toggleLike={toggleLike}
          likes={likes}
        />
      )}
      <HomeRoute
        photos={photoData}
        topics={topicData}
        openModal={toggleModal}
        toggleLike={toggleLike}
        likes={likes}
        selectedPhoto={selectedPhoto}
      />
    </div>
  );
};

export default App;
