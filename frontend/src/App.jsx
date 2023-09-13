import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute'
import photosData  from 'mocks/photos'
import topicsData  from 'mocks/topics'








// Note: Rendering a single component to build components in isolation
const App = () => {
// const [photos, setPhotos] = useState(photosData)
// const [topics, setTopics] = useState(topicsData)
  return (
    <div className="App">
     <HomeRoute photos = {photosData} topics = {topicsData} />
    </div>
  );
};

export default App;
