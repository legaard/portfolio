import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  render () {
    return (
      <header>
        <div className="layout-wrapper">
          <img id="logo" src="/data/img/logo.svg" alt="logo"/>
          <i onClick={(() => {
              this.setState({show: !this.state.show}) }).bind(this)
            }
            className={"fa " + (this.state.show ? 'fa-times' : 'fa-bars')}
            aria-hidden="true"></i>
          <nav className={this.state.show ? 'show' : 'hide'}>
            <Link to="/projects" activeClassName="active">Projects</Link>
            <Link to="/about" activeClassName="active">About</Link>
            <Link to="/contact" activeClassName="active">Contact</Link>
          </nav>
        </div>
      </header>
    );
  }
}
