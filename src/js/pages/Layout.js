import React from 'react';
import Loading from 'react-loading';

import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    //Make some fake loading - just to look cool and prepare for flux
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2750);
  }

  render () {
    return (
      <div>
        <Header />
        <main className="container">
          {this.state.isLoading ? <div id="loading"><Loading type="cylon" color="#323232" /></div> : this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
