import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { transitionSettings } from '../settings';

export default () => {
  return (
    <ReactCSSTransitionGroup
      component="section"
      transitionName={transitionSettings.transitionName}
      transitionAppear={transitionSettings.transitionAppear}
      transitionAppearTimeout={transitionSettings.transitionAppearTimeout}
      transitionLeaveTimeout={transitionSettings.transitionLeaveTimeout}
      transitionEnterTimeout={transitionSettings.transitionEnterTimeout}>
      <div>Not found!</div>
    </ReactCSSTransitionGroup>
  );
}
