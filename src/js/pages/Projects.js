import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router';
import $ from 'jquery';

import NotFound from './NotFound';
import Project from '../components/Project';
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
    $.get('/data/projects.json', ((data) => {
      let newState = this.state;
      newState.projects = data;
      this.setState(newState);
    }).bind(this));
  }

  updateSearchValue(event) {
    let newState = this.state;
    newState.searchValue = event.target.value.substr(0, 15);
    this.setState(newState);
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

      // Create project covers
      //TODO: Make a stateless component out of this (ProjectCovers – or something like that!)!
      .map((project, index) => {
         return (
           <section key={index} onClick={() => {this.props.router.push('projects/' + project.id)}}>
             <h3>{project.client}</h3>
             <div>{project.name}</div>
             <img src={project.images.cover} alt={project.name}/>
           </section>
         );
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
