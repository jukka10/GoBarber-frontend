import React from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';

import { Container, ToastContainer } from './styles';

const Toast: React.FC = () => {
  return (
    <Container>
      <ToastContainer type="info" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Erro com o servidor, tente novamente</p>
        </div>

        <button type="button">
          <FiX size={18} />
        </button>
      </ToastContainer>

      <ToastContainer type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiX size={18} />
        </button>
      </ToastContainer>

      <ToastContainer type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Erro com o servidor, tente novamente</p>
        </div>

        <button type="button">
          <FiX size={18} />
        </button>
      </ToastContainer>
    </Container>
  );
};

export default Toast;
