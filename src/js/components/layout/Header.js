import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <nav>
          <Link to="/projects" activeClassName="active">Projects</Link>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/contact" activeClassName="active">Contact</Link>
        </nav>
      </header>
    );
  }
}
