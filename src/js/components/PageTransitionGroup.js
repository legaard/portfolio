import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let PageTransitionGroup = (props) =>  {
  return (
    <ReactCSSTransitionGroup
      component={props.component}
      transitionName="page"
      transitionAppear={true}
      transitionAppearTimeout={400}
      transitionLeaveTimeout={200}
      transitionEnterTimeout={400}>
      {props.children}
    </ReactCSSTransitionGroup>
  );
}

PageTransitionGroup.propTypes = {
  component: PropTypes.string.isRequired
};

export default PageTransitionGroup;
