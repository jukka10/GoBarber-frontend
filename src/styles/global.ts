import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box
  }
  body{
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  border-style, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`;
