import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import { renderRoutes} from 'react-router-config';
import store from './redux/store';

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {renderRoutes(Routes)}
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();