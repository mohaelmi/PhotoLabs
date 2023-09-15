import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute'
import photosData  from 'mocks/photos'
import topicsData  from 'mocks/topics'
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useToggleLike } from 'hooks/useToggleLike';








// Note: Rendering a single component to build components in isolation
const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const toggleModal = (id) => {
    setSelectedPhoto(id)
  }

  const [likes, likedPhotos] = useToggleLike([])
  


  return (
    <div className="App">
    { selectedPhoto > 0 && <PhotoDetailsModal closeModal = {toggleModal} id = {selectedPhoto} photos = {photosData} /> }
    <HomeRoute photos = {photosData} topics = {topicsData} openModal = {toggleModal} toggleLike = {likedPhotos} likes = {likes} />
   
    </div>
  );
};

export default App;
