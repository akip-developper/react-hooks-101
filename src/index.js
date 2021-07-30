import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Souba from './Souba';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Souba namze="マグロ" przice="800" />
  </React.StrictMode>,
  document.getElementById('root')
);
