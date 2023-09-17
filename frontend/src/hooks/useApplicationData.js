import { useState, useReducer } from "react"

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
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
  };
  //const [likes, setLikes] = useState([]);
  //const [selectedPhoto, setSelectedPhoto] = useState(null)

  const [state, dispatch] = useReducer(reducer, initialState);



  const toggleLikes = (id) => {
    if (state.likedPhotos.includes(id)) {
      const newArray = state.likedPhotos.filter((num) => num !== id)
      dispatch({type: "FAV_PHOTO_REMOVED", payload: newArray});
    } else {
      state.likedPhotos.push(id);
      dispatch({type: "FAV_PHOTO_ADDED", payload: state.likedPhotos});
    }
  };

  const toggleModal = (id) => {
    dispatch({type: "SELECT_PHOTO", payload: id});
  }


  return [state.likedPhotos, toggleLikes, state.selectedPhoto, toggleModal]
}