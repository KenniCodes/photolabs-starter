import { useReducer, useEffect, useState } from "react";
import axios from "axios";

const ACTIONS = {
  FAVOURITE_PHOTO_TOGGLE: 'toggleFavourite',
  SET_MODAL: 'setModal',
  SET_PHOTOS: 'setPhotos',
  SET_TOPICS: 'setTopics'
};
// hook to set state data
const reducer = (state, { type, params }) => {
  const actions = {};
  
  actions[ACTIONS.FAVOURITE_PHOTO_TOGGLE] = id => {
    const stateCopy = { ...state };
    if (state.favourites.includes(id)) {
      const updatedFavourites = stateCopy.favourites.filter(state => state !== id);
      stateCopy.favourites = updatedFavourites;
      return stateCopy;
    }
    stateCopy.favourites = stateCopy.favourites.concat(id);
    return stateCopy;
  };

  actions[ACTIONS.SET_MODAL] = appData => {
    return { ...state, modal: appData };
  };
  
  actions[ACTIONS.SET_PHOTOS] = photos => {
    return { ...state, photosArray: [...photos] };
  };

  actions[ACTIONS.SET_TOPICS] = topics => {
    return { ...state, topicsArray: [...topics] };
  };

  const actType = actions[type];
  if (!actType) {
    throw new Error(`Action type ${type} is invalid`);
  }

  return actType(params);
};
// initialize all states and axios calls
const initialState = {
  favourites: [],
  modal: null,
  photosArray: [],
  topicsArray: []
};
// hook to hold axios calls + states
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [topicId, setTopicId] = useState(0);
// promise to return all data or error if any data fetch fails
  useEffect(() => {
    const fetchTopics = axios.get('api/topics');
    const fetchPhotos = topicId === 0 ? axios.get('/api/photos') : axios.get(`api/topics/photos/${topicId}`);
  
    Promise.all([fetchTopics, fetchPhotos])
      .then(([topicsResponse, photosResponse]) => {
        dispatch({ type: ACTIONS.SET_TOPICS, params: topicsResponse.data });
        dispatch({ type: ACTIONS.SET_PHOTOS, params: photosResponse.data });
      })
      .catch(error => console.log(error.message));
  }, [topicId]);
  

  const onPhotoSelect = appData => {
    if (!appData.similar_photos) {
      const similarPhotos = state.photosArray.filter(state => state.id === appData.id)[0].similar_photos;
      dispatch({ type: ACTIONS.SET_MODAL, params: { ...appData, 'similar_photos': similarPhotos } });
      return;
    }
    dispatch({ type: ACTIONS.SET_MODAL, params: appData });
  };
// helper functions
  const onClosePhotoDetialsModal = () => dispatch({ type: ACTIONS.SET_MODAL, params: null });

  const updateToFavPhotoIds = id => dispatch({ type: ACTIONS.FAVOURITE_PHOTO_TOGGLE, params: id });

  const isFav = id => state.favourites.includes(id);

  const isFavPhotoExist = state.favourites.length > 0;

  const onLoadTopic = topicId => setTopicId(topicId);

  return { state, onPhotoSelect, updateToFavPhotoIds, isFav, isFavPhotoExist, onLoadTopic, onClosePhotoDetialsModal };
};

export default useApplicationData;