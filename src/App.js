import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/Sidebar';
import MainData from './components/MainData';
import Basket from './components/Basket'
import Order from './components/Order'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <a className="logo-link" href='/'><img src={logo} className="App-logo" alt="logo" /></a>
        </header>
        <body>
          <div className="main">
            <SideBar />
            <div className="right-side">
              <Route exact path='/' render={() => <MainData name="Олег" surname="Громов" age="33 года" phone="0933452903" email="rekops@ukr.net" />} />
              <Route path='/basket' render={() => <Basket products="0" />} />
              <Route path='/order' render={() => <Order orders="0" />} />
            </div>
          </div>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
