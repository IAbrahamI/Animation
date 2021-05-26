import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AntDesign from './pages/AntDesign';
import "antd/dist/antd.css";
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className="main-content">
            <Nav />
            <Route path="/AntDesign/" component={AntDesign} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
