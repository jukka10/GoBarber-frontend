import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheck, FiInfo, FiX } from 'react-icons/fi';

import { useToast } from '../../../context/ToastContext';
import { Container } from './styles';

interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}

interface Messages {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheck size={24} />,
  error: <FiAlertCircle size={24} />,
};

const ToastContainer: React.FC<Messages> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('ERRRRRRRRO');
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiX size={18} />
      </button>
    </Container>
  );
};

export default ToastContainer;
