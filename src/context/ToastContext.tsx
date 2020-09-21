import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Toast from '../components/Toast/index';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, type, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const messageToast = {
        id,
        title,
        description,
        type,
      };
      setMessages(lastMessage => [...lastMessage, messageToast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(lastMessage =>
      lastMessage.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
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
