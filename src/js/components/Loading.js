import React, { PropTypes } from 'react';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.loadingTimeout = setTimeout(() => {
      this.props.onFinish();
    }, this.props.maxLoadingTime);
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  render() {
    return (
      <div id="loading"></div>
    );
  }
}

Loading.propTypes = {
  onFinish: PropTypes.func,
  maxLoadingTime: PropTypes.number.isRequired
}
