import { useReducer, useCallback } from 'react';

const initialState = {
  favouritePhotos: [],
  clickedPhoto: null,
  isModalOpen: false,
};

export const ACTIONS = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
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

  return {
    isModalOpen: state.isModalOpen,
    favouritePhotos: state.favouritePhotos,
    clickedPhoto: state.clickedPhoto,
    openModal,
    closeModal,
    toggleFavourite
  };
};

export default useApplicationData;
