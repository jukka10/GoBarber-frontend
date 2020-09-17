import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';

import { AuthProvider } from './context/AuthContext';
import Toast from './components/Toast';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Signin />
      </AuthProvider>
      <Toast />
      <GlobalStyle />
    </>
  );
};

export default App;
