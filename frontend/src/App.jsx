import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  // importing hooks via single hook 'useApplicationData' 
  const appData = useApplicationData();

  return (
    <div className={`${appData.theme}-mode App`}>
      <HomeRoute {...appData} />
    </div>
  );
};

export default App;
