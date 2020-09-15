import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
import Signup from './pages/Signup/index';

const App: React.FC = () => {
  return (
    <>
      <Signin />
      <GlobalStyle />
    </>
  );
};

export default App;
