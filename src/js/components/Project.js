import React, { PropTypes } from 'react';
import axios from 'axios';

export default class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      description: ''
    };
  }

  componentWillMount() {
    this.cancelToken = axios.CancelToken.source();

    axios.get('/data/text/' + this.props.project.id + '.txt', {
      cancelToken: this.cancelToken.token
    })
    .then(((response) => {
      this.setState({ description: response.data })
    }).bind(this)).catch((err) => { console.error(err); })
  }

  componentWillUnmount() {
    this.cancelToken.cancel('Request cancelled due to unmount');
  }

  render () {
    return (
      <div>
        <h2>{this.props.project.name}</h2>
        <img src={this.props.project.images.cover}/>
        <section>{this.state.description}</section>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
