import React, { useState, useRef, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import TopNav from './navbar.js';
import Landing from './landing.js';
import Blog from './blog.js';
// import Portfolio from './portfolio.js';



function App() {
  return (
    <>
    <TopNav />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          {/* <Route path="/portfolio">
            <Portfolio />
          </Route> */}

        </Switch>

      </Router>


    </>
  );
}

export default App;
