import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./styles/global";
import 'antd/dist/antd.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Providers from "./providers";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);