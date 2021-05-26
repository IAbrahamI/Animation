import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './styles.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="header-nav">
            <Link className="header-nav__item" to="/AntDesign/">AntDesign</Link>
            <a href="" className="header__link">GitHub</a>
          </div>

        </header>
      </Fragment>
    );
  }
}

export default App;
