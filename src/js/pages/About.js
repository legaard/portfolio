import React from 'react';

import PageTransitionGroup from '../components/PageTransitionGroup';

export default class About extends React.Component {
  render () {
    return (
      <PageTransitionGroup component="section">
        <h1>About</h1>
        <p>
          Sit tight – I am working on the site and real content will be available soon!
        </p>
      </PageTransitionGroup>
    );
  }
}
