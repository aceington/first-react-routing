import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import App from './App';
import './index.css';
import Store from './Store';
import Product from './Product';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/store' component={Store}/>
      <Route path='/product/:id' component={Product}/>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
