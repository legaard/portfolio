import React from 'react';
import axios from 'axios';

import NotFound from './NotFound';
import PageTransitionGroup from '../components/PageTransitionGroup';

export default class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {},
      description: ''
    };
  }

  componentWillMount() {
    this.cancelToken = axios.CancelToken.source();

    axios.all([
      axios.get('/data/text/' + this.props.params.id + '.txt'),
      axios.get('data/projects.json')
    ], {
      cancelToken: this.cancelToken.token
    })
    .then(axios.spread((description, projects) => {
      let projectToShow;

      projects.data.forEach((project) => {
        if(this.props.params.id == project.id) projectToShow = project;
      })

      this.setState({
        project: projectToShow,
        description: description.data
      })
    }).bind(this))
    .catch(((err) => {
      this.setState({
        project: null
      })
    }).bind(this));
  }

  componentWillUnmount() {
    this.cancelToken.cancel('Request cancelled due to unmount');
  }

  render () {
    //If no project were found
    if(this.state.project == null) return <NotFound />;

    return (
      <PageTransitionGroup component="section">
        <h1>{this.state.project.name}</h1>
        <section>{this.state.description}</section>
      </PageTransitionGroup>
    );
  }
}
