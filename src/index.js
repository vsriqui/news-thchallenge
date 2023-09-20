import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
  body, #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: red;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: url('https://t3.ftcdn.net/jpg/00/97/87/38/240_F_97873827_9UJtWFSHxxJvg2qxF6LBH44Yk1tdQ8sP.jpg');
    background-repeat:no-repeat;
    background-size:cover;
  }

  
`;

root.render(
  <>
  <GlobalStyle />
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </>
);


reportWebVitals();
