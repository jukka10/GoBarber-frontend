import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import ContextProvider from './context';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <ContextProvider>
      <Routes />
    </ContextProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
