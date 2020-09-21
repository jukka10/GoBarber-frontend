import React from 'react';
import { useTransition } from 'react-spring';

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
  const messageWithTransitions = useTransition(
    messages,
    Message => Message.id,
    {
      from: { left: '120%', opacity: 0, transition: 'opacity 0.2s' },
      enter: { left: '0%', opacity: 1, transition: 'opacity 0.2s' },
      leave: { left: '120%', opacity: 0, transition: 'opacity 0.2s' },
    },
  );

  return (
    <Container>
      {messageWithTransitions.map(({ key, item, props }) => (
        <ToastContainer key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default Toast;
