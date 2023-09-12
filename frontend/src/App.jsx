import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';



const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {

  const photos = new Array(3).fill({});

    const renderPhotos = () => {
     return photos.map((photo, index) => { 
        console.log(index);
        return  <PhotoListItem photoListItemData = {sampleDataForPhotoListItem} key={index}/>
        })
    }
    console.log(photos);
  return (
    <div className="App">
    <main className='photo-list'>
     { renderPhotos() }
    </main>

    </div>
  );
};

export default App;
