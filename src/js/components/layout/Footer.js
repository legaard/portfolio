import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className={this.state.show ? 'show' : 'hide'} id="social-media">
            <i onClick={ (() => { this.setState({show: !this.state.show}); }).bind(this) }
              className="fa fa-caret-up fa-2x" aria-hidden="true"></i>
            <a href="https://linkedin.com/in/lasselegaard" target="_blank">
              <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/legaard" target="_blank">
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://instagram.com/lasselegaard" target="_blank">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/lasse_legaard" target="_blank">
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
