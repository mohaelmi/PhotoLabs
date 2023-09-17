import { useState, useReducer } from "react";

export const useApplicationData = () => {
  const [likes, setLikes] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null)


  const toggleLikes = (id) => {
    // setLike(!like)
    if (likes.includes(id)) {
      const newArray = [...likes];
      newArray.pop();
      setLikes(newArray);
    } else {
      const newArray = [...likes];
      newArray.push(id);
      setLikes(newArray);
    }
  };

  const toggleModal = (id) => {
    setSelectedPhoto(id)
  }



  return [likes, toggleLikes, selectedPhoto, toggleModal]
}