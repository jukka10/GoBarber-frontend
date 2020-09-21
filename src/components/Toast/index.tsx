import React from 'react';

import ToastContainer from './ToastContainer';
import { Container } from './styles';

interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}

interface Messages {
  messages: ToastMessage[];
}

const Toast: React.FC<Messages> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <ToastContainer key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default Toast;
