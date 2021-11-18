import './index.css';

import { Header } from './app/components';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Tasks } from './tasks/pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/tasks" element={<Tasks />} />
        </Routes>

      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
