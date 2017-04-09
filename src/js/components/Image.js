import React from 'react';

export default class Image extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hasLoaded: false
    }
  }

  render() {
    return (
      <img {...this.props}
           onLoad={(() => this.setState({hasLoaded: true})).bind(this)}
           className={(this.state.hasLoaded ? 'loaded ' : '') + 'image'}/>
    );
  }
}
