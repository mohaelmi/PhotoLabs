import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photosData from "mocks/photos";
import topicsData from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, toggleLike, selectedPhoto, toggleModal] = useApplicationData([]);

  return (
    <div className="App">
      {selectedPhoto > 0 && (
        <PhotoDetailsModal
          closeModal={toggleModal}
          id={selectedPhoto}
          photos={photosData}
          likes={likes}
          toggleLike={toggleLike}
        />
      )}
      <HomeRoute
        photos={photosData}
        topics={topicsData}
        openModal={toggleModal}
        toggleLike={toggleLike}
        likes={likes}
        selectedPhoto={selectedPhoto}
      />
    </div>
  );
};

export default App;
