import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.STORAGE_KEY_MEDIA_SHOW = 'MEDIA_SHOW';
    let showMedia = sessionStorage.getItem(this.STORAGE_KEY_MEDIA_SHOW);

    if(showMedia !== null) {
      this.state = {
        show: (showMedia === 'true')
      }
    } else {
      this.state = {
        show: true
      }
    }
  }

  toggleMedia() {
    let shouldShow = !this.state.show;
    this.setState({show: shouldShow});
    sessionStorage.setItem(this.STORAGE_KEY_MEDIA_SHOW, shouldShow);
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className={this.state.show ? 'show' : 'hide'} id="social-media">
            <i onClick={this.toggleMedia.bind(this)}
              className="fa fa-caret-up fa-2x" aria-hidden="true"></i>
            <a href="https://linkedin.com/in/lasselegaard" target="_blank" rel="noopener">
              <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/legaard" target="_blank" rel="noopener">
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://bitbucket.com/legaard" target="_blank" rel="noopener">
              <i className="fa fa-bitbucket fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://instagram.com/lasselegaard" target="_blank" rel="noopener">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/lasse_legaard" target="_blank" rel="noopener">
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
