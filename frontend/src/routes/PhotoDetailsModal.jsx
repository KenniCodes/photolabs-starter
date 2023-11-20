import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = appData => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={appData.onClosePhotoDetialsModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item">
        <PhotoFavButton {...appData} id={appData.state.modal.id}/>
        <img className="photo-details-modal__image" src={appData.state.modal.urls.full}/>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={appData.state.modal.user.profile} />
          <div className="photo-details-modal__header">
            <span>{appData.state.modal.user.name}</span>
            <p className="photo-list__user-location">{`${appData.state.modal.location.city}, ${appData.state.modal.location.country}`}</p>
          </div>
        </div>
      </div>
      <header className='photo-details-modal__header'>Similar Photos</header>
      <PhotoList list={appData.state.modal.similar_photos} {...appData}/>
    </div>
  );
};

export default PhotoDetailsModal;