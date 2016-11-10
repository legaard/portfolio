import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="layout-wrapper">
          <div id="social-media">
            <a href="https://linkedin.com/in/lasselegaard" target="_blank">
              <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/legaard" target="_blank">
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/lasse_legaard" target="_blank">
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://www.youtube.com/user/TheGaards" target="_blank">
              <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/lasselegaard" target="_blank">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
