import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
       <App />
     </BrowserRouter>
    </Provider>
  </React.StrictMode>,
//   document.getElementById('root'),
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
