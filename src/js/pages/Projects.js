import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';

import NotFound from './NotFound';
import ProjectCover from '../components/ProjectCover';
import PageTransitionGroup from '../components/PageTransitionGroup';
import SearchField from '../components/SearchField';
import Loading from '../components/Loading';
import * as actions from '../actions/projects';

class Projects extends React.Component {
  componentWillMount() {
    if (this.props.projects.length === 0) { 
      setTimeout(this.props.loadProjects, 1750);
    };
  }

  render() {
    if(this.props.children) return this.props.children;

    if(this.props.isLoading) return <Loading />;

    if(this.props.error) return <NotFound />;

    let projects = this.props.projects
      .filter((project) => {
        const isInName = project.name.toLowerCase().includes(this.props.filterValue.toLowerCase());
        const isInClient = project.client.toLowerCase().includes(this.props.filterValue.toLowerCase());
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
        <SearchField searchValue={this.props.filterValue} search={this.props.updateFilterValue}/>
        <div className="row">
          {projects}
        </div>
      </PageTransitionGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectsReducer.projects,
    isLoading: state.projectsReducer.isLoading,
    filterValue: state.projectsReducer.filterValue,
    error: state.projectsReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  let cancelToken = axios.CancelToken.source();

  return {
    loadProjects: () => {
      axios.get('/assets/projects.json', { 
        cancelToken: cancelToken.token 
      })
      .then((response) => {
        dispatch(actions.setProjects(response.data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(actions.setError(err.message));
      });
    },
    updateFilterValue: (event) => {
      dispatch(actions.setFilterValue(event.target.value.substr(0, 15)));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects));
