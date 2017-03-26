import React from 'react';

import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

let Layout = (props) => {
  return (
    <div>
      <Header />
      <main className="container">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
