import React, { PropTypes } from 'react';

let Loading = (props) => {
  setTimeout(() => {
    props.onFinish();
  }, props.maxLoadingTime);

  return (
    <div id="loading"></div>
  );
}

Loading.propTypes = {
  onFinish: PropTypes.func,
  maxLoadingTime: PropTypes.number.isRequired
}

export default Loading;
