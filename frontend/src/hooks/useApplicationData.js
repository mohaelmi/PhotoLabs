import {useReducer, useEffect } from "react";
import axios from 'axios';

const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTOS_PER_TOPIC: "DISPLAY_PHOTOS_PER_TOPIC",
};

 const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likedPhotos: action.payload,
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        likedPhotos: action.payload,
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };

    case ACTIONS.DISPLAY_PHOTOS_PER_TOPIC:
      return {
        ...state,
        photoData: action.payload,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }

};

export const useApplicationData = () => {
  const initialState = {
    likedPhotos: [],
    selectedPhoto: null,
    photoData: [],
    topicData: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("/api/photos")
    .then((response, d) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data })
    })
    .catch((error) => console.log("error: ", error))

    axios.get("/api/topics")
    .then((response) => {
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data })
    })
    .catch((error) => console.log("error: ", error))

  }, []);

  const toggleLikes = (id) => {
    if (state.likedPhotos.includes(id)) {
      const unLikePhoto = state.likedPhotos.filter((num) => num !== id);
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: unLikePhoto });
    } else {
      state.likedPhotos.push(id);
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: state.likedPhotos });
    }
  };

  const toggleModal = (id) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: id });
  };

  const selectTopic = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then((response) => response.json())
      .then((photosPerTopic) =>
        dispatch({
          type: ACTIONS.DISPLAY_PHOTOS_PER_TOPIC,
          payload: photosPerTopic,
        })
      )
      .catch((err) => console.log("error: ", err));
  };

  return [state, toggleLikes, toggleModal, selectTopic];
};
