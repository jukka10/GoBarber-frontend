import React, { createContext, useContext, useCallback } from 'react';

import Toast from '../components/Toast/index';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addtoast');
  }, []);
  const removeToast = useCallback(() => {
    console.log('removetoast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };
