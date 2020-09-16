import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  SignIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const SignIn = useCallback(async ({ email, password }) => {
    const { data } = await api.post('/sessions', {
      email,
      password,
    });

    console.log(data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: '', SignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
