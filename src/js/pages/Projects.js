import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router';
import axios from 'axios';

import NotFound from './NotFound';
import Project from '../components/Project';
import ProjectCover from '../components/ProjectCover';
import { transitionSettings } from '../settings';

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
    this.cancelToken.cancel('Request cancel by unmount');
  }

  updateSearchValue(event) {
    this.setState({ searchValue: event.target.value.substr(0, 15) });
  }

  render() {
    let toBeRendered;
    let projectId = this.props.params.id;

    // If the URL does not contain a specific project id --> show all projects
    if (!projectId) {

      // Filter projects based client or name
      toBeRendered = this.state.projects
      .filter((project) => {
        const isInName = project.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1;
        const isInClient = project.client.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1;
        return isInName || isInClient;
      })
      .map((project) => {
        return <ProjectCover project={project} key={project.id}
                             onClick={(() => {this.props.router.push('projects/' + project.id)}).bind(this)}/>
      });

    } else {
      let projectToShow = <NotFound />;

      this.state.projects.forEach((project) => {
        if(project.id == projectId) {
          projectToShow = <Project project={project}/>;
        }
      });

      toBeRendered = projectToShow;
    }

    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName={transitionSettings.transitionName}
        transitionAppear={transitionSettings.transitionAppear}
        transitionAppearTimeout={transitionSettings.transitionAppearTimeout}
        transitionLeaveTimeout={transitionSettings.transitionLeaveTimeout}
        transitionEnterTimeout={transitionSettings.transitionEnterTimeout}>
        {Array.isArray(toBeRendered) ? <input type="search"
                                              placeholder="Search for project"
                                              value={this.state.searchValue}
                                              onChange={this.updateSearchValue.bind(this)}/> : null}
        {toBeRendered}
      </ReactCSSTransitionGroup>
    );
  }
})
