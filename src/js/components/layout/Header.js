import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <div className="layout-wrapper">
          <img id="logo" src="/data/img/logo.svg" alt="logo"/>
          <nav>
            <Link to="/projects" activeClassName="active">Projects</Link>
            <Link to="/about" activeClassName="active">About</Link>
            <Link to="/contact" activeClassName="active">Contact</Link>
          </nav>
        </div>
      </header>
    );
  }
}
