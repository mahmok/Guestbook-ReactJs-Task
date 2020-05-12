import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';
import MessagesPage from './pages/messages/Messages';
import MessageDetailsPage from './pages/message-details/MessageDetails';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/messages/:id" component={MessageDetailsPage} />
          <Route path="/messages" component={MessagesPage} />
       </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
