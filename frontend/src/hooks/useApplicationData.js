import { useState, useReducer, useEffect } from "react"

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: 
      return {
        ...state,
        likedPhotos: action.payload
      }

    case ACTIONS.FAV_PHOTO_REMOVED: 
      return {
        ...state,
        likedPhotos: action.payload
      }
    
    case ACTIONS.SELECT_PHOTO: 
      return {
        ...state,
        selectedPhoto: action.payload
      }

      case ACTIONS.SET_PHOTO_DATA: 
      return {
        ...state,
        photoData: action.payload
      }

      case ACTIONS.SET_TOPIC_DATA: 
      return {
        ...state,
        topicData: action.payload
      }
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
        );
  }
  }

export const useApplicationData = () => {
  const initialState = {
    likedPhotos: [],
    selectedPhoto: null,
    photoData: [],
    topicData: []
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);



  useEffect(() => {
    fetch("/api/photos")
    .then((response)=> response.json())
    .then((photoData) =>  dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: photoData}))

    fetch("/api/topics")
    .then((response)=> response.json())
    .then((topicData) =>  dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: topicData}))
  }, [])

  const toggleLikes = (id) => {
    if (state.likedPhotos.includes(id)) {
      const newArray = state.likedPhotos.filter((num) => num !== id)
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: newArray});
    } else {
      state.likedPhotos.push(id);
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: state.likedPhotos});
    }
  };

  const toggleModal = (id) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: id});
  }


  return [state.likedPhotos, state.photoData, state.topicData, toggleLikes, state.selectedPhoto, toggleModal]
}