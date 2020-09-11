import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border: 0;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  margin: 24px 0;
  color: #312e38;
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
