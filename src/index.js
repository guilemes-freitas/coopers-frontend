import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./styles/global";
import 'antd/dist/antd.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);