import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ isOpen, closeModal, photo, onToggleFavourite, favouritePhotos, fetchSimilarPhotos }) => {
  // if modal is already open then modal will not re-render
  if (!isOpen) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton photoId={photo.id} onToggleFavourite={onToggleFavourite} isFavourite={favouritePhotos.includes(photo.id)} />
      <img className='photo-details-modal__images photo-details-modal__image' src={photo.urls.full} alt="enlarged photo" />
      <div className="photo-details-modal__photographer-details">
        <img className='photo-details-modal__image photo-details-modal__photographer-profile' src={photo.user.profile} alt='user profile photo' />
        <div className="photo-details-modal__photographer-info">
          <span>
            {photo.user.name}
          </span>
          <p className="photo-details-modal__photographer-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
      <div className="photo-details-modal__header">
        <h2>Similar Photos</h2>
      <PhotoListItem key={photo.id} sample={photo} photoId={photo.id} onToggleFavourite={onToggleFavourite} isFavourite={favouritePhotos.includes(photo.id)} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
