import React from 'react';

import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
