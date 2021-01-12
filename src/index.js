import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { InfoProvider } from './context';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <InfoProvider>
      <Router>
        <App />
      </Router>
    </InfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
