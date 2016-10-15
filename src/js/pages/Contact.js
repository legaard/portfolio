import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { transitionSettings } from '../settings';

export default class Contact extends React.Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        component="section"
        transitionName={transitionSettings.transitionName}
        transitionAppear={transitionSettings.transitionAppear}
        transitionAppearTimeout={transitionSettings.transitionAppearTimeout}
        transitionLeaveTimeout={transitionSettings.transitionLeaveTimeout}
        transitionEnterTimeout={transitionSettings.transitionEnterTimeout}>
        <div>Contact</div>
      </ReactCSSTransitionGroup>
    );
  }
}
