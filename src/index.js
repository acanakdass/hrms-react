import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { configureStore } from './redux/store/configureStore';


const store = configureStore();

ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

