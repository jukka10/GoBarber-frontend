import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';

import ContextProvider from './context';

const App: React.FC = () => {
  return (
    <>
      <ContextProvider>
        <Signin />
      </ContextProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
