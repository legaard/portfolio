import React from 'react';
import { Link, withRouter } from 'react-router';

import { resetPagePosition } from '../utils/page';
import PageTransitionGroup from '../components/PageTransitionGroup';

export default withRouter((props) => {
  resetPagePosition();
  
  return (
    <PageTransitionGroup component="section">
      <h1>404 – Not found 😵</h1>
      <p>
        The site that you are trying to reach cannot be found – sorry.
        Go <a onClick={props.router.goBack}>back</a> to the previous page or
        to the <Link to="/">home</Link> page.
      </p>
    </PageTransitionGroup>
  );
})
