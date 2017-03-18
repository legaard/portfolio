import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

import NotFound from './NotFound';
import ProjectCover from '../components/ProjectCover';
import PageTransitionGroup from '../components/PageTransitionGroup';
import SearchField from '../components/SearchField';

export default withRouter(class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      searchValue: ''
    };
  }

  componentWillMount() {
    // Fetch project data and set/update state
    this.cancelToken = axios.CancelToken.source();

    axios.get('/data/projects.json', {
      cancelToken: this.cancelToken.token
    })
    .then(((response) => {
      this.setState({ projects: response.data });
    }).bind(this))
    .catch((err) => { console.error(err); });
  }

  componentWillUnmount() {
    this.cancelToken.cancel('Request cancelled due to unmount');
  }

  updateSearchValue(event) {
    this.setState({ searchValue: event.target.value.substr(0, 15) });
  }

  render() {
    // If a project has been selected --> render project instead
    if (this.props.children) return this.props.children;

    // Filter projects based on client or name
    let projects = this.state.projects
    .filter((project) => {
        const isInName = project.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1;
        const isInClient = project.client.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1;
        return isInName || isInClient;
      })
    .map((project) => {
        return <ProjectCover project={project} key={project.id}
                             onClick={(() => {this.props.router.push('projects/' + project.id)}).bind(this)}/>
      });

    return (
      <PageTransitionGroup component="div">
        <h1>All projects</h1>
        <SearchField searchValue={this.state.searchValue} search={this.updateSearchValue.bind(this)}/>
        <div className="row">
          {projects}
        </div>
      </PageTransitionGroup>
    );
  }
})
