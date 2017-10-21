import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import NotFound from './NotFound';
import PageTransitionGroup from '../components/PageTransitionGroup';
import ImageGallery from '../components/ImageGallery';
import Loading from '../components/Loading';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: undefined,
      description: '',
      isLoading: true
    };
  }

  componentDidUpdate() {
    if (!this.state.project && this.props.projects.length > 1) {
      this.getProjectDescription(this.props.params.id);
    }
  }

  componentWillUnmount() {
    this.cancelToken.cancel('Request for project cancelled due to component unmount');
  }

  getProjectDescription(projectId) {
    this.cancelToken = axios.CancelToken.source();

    axios.get('/assets/text/' + projectId + '.txt', {
      cancelToken: this.cancelToken.token
    })
    .then(((response) => {
      let projectDescription = response.data;
    
      let projectToRender = this.props.projects.find((project) => {
        return this.props.params.id === project.id;
      });

      this.setState({
        isLoading: false,
        project: projectToRender,
        description: projectDescription
      });
    }).bind(this))
    .catch(((err) => {
      console.error(err);

      this.setState({
        isLoading: false,
        project: undefined
      });
    }).bind(this));
  }

  render () {
    if(this.state.isLoading) return <Loading />;
    
    if(!this.state.project) return <NotFound />;

    let descriptionSections = this.state.description.split('\n').map((section, index) => {
      return (
        <p key={index}>{section}</p>
      )
    });

    let technologies = this.state.project.technologies.map((technology, index, arr) => {
      return (
        <span key={index}>{technology + (index === arr.length - 1 ? '' : ', ')}</span>
      );
    });

    let contributors = this.state.project.contributors.map((contributor, index, arr) => {
      return (
        <span key={index}>
          <a href={contributor.contact} target="_blank" rel="noopener">{contributor.name}</a>
          {index === arr.length - 1 ? '' : ', '}
        </span>
      );
    });

    let skills = this.state.project.skills.map((skill, index, arr) => {
      return (
        <span key={index}>{skill + (index === arr.length - 1 ? '' : ', ')}</span>
      );
    });

    let links = this.state.project.links.map((link, index, arr) => {
      return (
        <span key={index}>
          <a href={link.url} target="_blank" rel="noopener">{link.name}</a>
          {index === arr.length - 1 ? '' : ', '}
        </span>
      );
    });

    return (
      <PageTransitionGroup component="section">
        <h1>{this.state.project.name}</h1>
        <h3>Client: {this.state.project.client}, {this.state.project.year}</h3>
        <div className="row">
          <div className="project-description col-lg-8 col-md-6 col-sm-12">
            <div>{descriptionSections}</div>
            <h4>Contributors</h4>
            <p>{contributors}</p>
            <h4>Technologies</h4>
            <p>{technologies}</p>
            <h4>Skills</h4>
            <p>{skills}</p>
            <h4>Links</h4>
            <p>{links}</p>
          </div>
          <div className="project-images col-lg-4 col-md-6 col-sm-12">
            <ImageGallery images={this.state.project.images}/>
          </div>
        </div>
      </PageTransitionGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectsReducer.projects
  };
}

export default connect(mapStateToProps)(Project);
