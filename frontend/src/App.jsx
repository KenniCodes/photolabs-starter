import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

//  importing hook to pass down to children components
  const appData = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute {...appData}/>
      {/* if modal state is true then render component otherwise render empty string */}
      { appData.state.modal ? <PhotoDetailsModal {...appData}/> : ""}
    </div>
  );
};

export default App;