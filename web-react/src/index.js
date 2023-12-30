
import './index.css';
import Layout from '../src/Layout';
import reportWebVitals from './reportWebVitals';
import * as root from 'react-dom'
import React from 'react'


root.render(
  <React.StrictMode>
    <Layout><div>Contenido</div></Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();