import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  showOrHideMenu() {
    this.setState({show: !this.state.show});
  }

  render () {
    return (
      <header>
        <div className="container">
          <img id="logo" src="/assets/img/logo.svg" alt="logo"/>
          <i onClick={this.showOrHideMenu.bind(this)}
             className={"fa " + (this.state.show ? 'fa-times' : 'fa-bars')}
             aria-hidden="true"></i>
          <nav className={this.state.show ? 'show' : 'hide'}>
            <Link onClick={this.showOrHideMenu.bind(this)}
                  to="/projects" activeClassName="active">Projects</Link>
            <Link onClick={this.showOrHideMenu.bind(this)}
                  to="/about" activeClassName="active">About</Link>
            <Link onClick={this.showOrHideMenu.bind(this)}
                  to="/contact" activeClassName="active">Contact</Link>
          </nav>
        </div>
      </header>
    );
  }
}
