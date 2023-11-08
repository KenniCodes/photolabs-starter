import { useReducer, useCallback, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  favouritePhotos: [],
  clickedPhoto: null,
  isModalOpen: false,
  photoData: [],
  topicData: []
};

export const ACTIONS = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA,'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVOURITE:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.includes(action.payload)
          ? state.favouritePhotos.filter(id => id !== action.payload)
          : [...state.favouritePhotos, action.payload],
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        clickedPhoto: action.payload,
        isModalOpen: true,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        clickedPhoto: null,
        isModalOpen: false,
      };
      case ACTIONS.SET_PHOTO_DATA:
        return { 
          ...state, 
          photoData: action.payload
        };
      case ACTIONS.SET_TOPIC_DATA:
        return {
          ...state, 
          topicData: action.payload
        };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = useCallback((photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  }, []);

  const toggleFavourite = useCallback((photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVOURITE, payload: photoId });
  }, []);

  useEffect(() => {
    axios.get("/api/photos")
    .then((response) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data }))
    .catch((error) => {
      console.error("Error fetching photos:", error);
    });
}, []);

  useEffect(() => {
    axios.get("/api/topics")
    .then((response) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data}))
    .catch((error) => {
      console.error("Error fetching topics:", error);
    });
  }, []);
  
  const fetchPhotosByTopic = useCallback((topicId) => {
    axios.get(`/api/topics/photos/${topicId}`)
      .then((response) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch((error) => {
        console.error(`Error fetching photos for topic ${topicId}:`, error);
      });
  }, []);
  

  return {
    isModalOpen: state.isModalOpen,
    favouritePhotos: state.favouritePhotos,
    clickedPhoto: state.clickedPhoto,
    photoData: state.photoData,
    topicData: state.topicData,
    fetchPhotosByTopic,
    openModal,
    closeModal,
    toggleFavourite
  };
};

export default useApplicationData;
