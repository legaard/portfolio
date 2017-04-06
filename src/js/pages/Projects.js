import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

import NotFound from './NotFound';
import ProjectCover from '../components/ProjectCover';
import PageTransitionGroup from '../components/PageTransitionGroup';
import SearchField from '../components/SearchField';
import Loading from '../components/Loading';

export default withRouter(class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      projects: undefined,
      searchValue: ''
    };
  }

  componentWillMount() {
    // Fetch project data and set/update state
    this.cancelToken = axios.CancelToken.source();

    axios.get('/assets/projects.json', {
      cancelToken: this.cancelToken.token
    })
    .then(((response) => {
      this.setState({ projects: response.data });
    }).bind(this))
    .catch(((err) => {
      console.error(err);
      this.setState({
        projects: null
      })
    }).bind(this));
  }

  componentWillUnmount() {
    this.cancelToken.cancel('Request cancelled due to unmount');
  }

  updateSearchValue(event) {
    this.setState({ searchValue: event.target.value.substr(0, 15) });
  }

  onFinishLoading() {
    this.setState({
      isLoading: false
    })
  }

  render() {
    //If a project has been selected --> render project instead
    if(this.props.children) return this.props.children;

    //If request have not been received or is still "loading" --> show loader
    if(this.state.projects === undefined || this.state.isLoading) {
      return <Loading maxLoadingTime={1500} onFinish={this.onFinishLoading.bind(this)}/>;
    }

    //If the projects failed to load
    if(this.state.projects === null) return <NotFound />;

    //Filter projects based on client or name
    let projects = this.state.projects
    .filter((project) => {
      const isInName = project.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1;
      const isInClient = project.client.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1;
      return isInName || isInClient;
    })
    .sort((projectOne, projectTwo) => {
      return projectTwo.year - projectOne.year;

    })
    .map((project) => {
      return (
        <div key={project.id} className="col-md-6 col-lg-4">
          <ProjectCover project={project}
                        onClick={(() => {this.props.router.push('projects/' + project.id)}).bind(this)}/>
        </div>
      );
    });

    return (
      <PageTransitionGroup component="section">
        <h1>All projects</h1>
        <SearchField searchValue={this.state.searchValue} search={this.updateSearchValue.bind(this)}/>
        <div className="row">
          {projects}
        </div>
      </PageTransitionGroup>
    );
  }
})
