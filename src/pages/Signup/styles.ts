import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 40px 0 40px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-weight: 600;
      margin-bottom: 24px;
    }
    a {
      text-decoration: none;
      line-height: 21px;
      text-align: center;
      color: #f4ede8;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    line-height: 21px;
    text-align: center;
    color: #ff9000;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
`;
