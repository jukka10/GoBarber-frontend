import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypesVariant = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #e53030;
  `,
};

export const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 30px;
  overflow: hidden;
`;

export const ToastContainer = styled.div<ToastProps>`
  display: flex;
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  && + div {
    margin-top: 8px;
  }

  ${({ type }) => toastTypesVariant[type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    top: 15px;
    right: 16px;
    opacity: 0.6;
    border: 0;
    background: transparent;

    color: inherit;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;