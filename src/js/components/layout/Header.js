import React from 'react';
import { Link, withRouter } from 'react-router';

export default withRouter(class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  toggleMenu() {
    this.setState({show: !this.state.show});
  }

  hideMenu() {
    this.setState({show: false});
  }

  render () {
    return (
      <header>
        <div className="container">
          <img onClick={(() => this.props.router.push('/') ).bind(this)}
               id="logo" src="/assets/img/logo.svg" alt="logo"/>
          <i onClick={ (() => this.setState({show: !this.state.show})).bind(this) }
             className={"fa " + (this.state.show ? 'fa-times' : 'fa-bars')}
             aria-hidden="true"></i>
          <nav className={this.state.show ? 'show' : 'hide'}>
            <Link onClick={this.hideMenu.bind(this)}
                  to="/projects" activeClassName="active">Projects</Link>
            <Link onClick={ this.hideMenu.bind(this) }
                  to="/about" activeClassName="active">About</Link>
            <Link onClick={this.hideMenu.bind(this)}
                  to="/contact" activeClassName="active">Contact</Link>
          </nav>
        </div>
      </header>
    );
  }
})
