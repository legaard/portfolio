import React from 'react';
import axios from 'axios';

import NotFound from './NotFound';
import PageTransitionGroup from '../components/PageTransitionGroup';
import ImageGallery from '../components/ImageGallery';

export default class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      project: undefined,
      description: ''
    };
  }

  componentWillMount() {
    this.cancelToken = axios.CancelToken.source();

    axios.all([
      axios.get('/assets/text/' + this.props.params.id + '.txt'),
      axios.get('/assets/projects.json')
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

    let technologies = this.state.project.technologies.map((technology, index, arr) => {
      return (
        <span key={index}>{technology + (index === arr.length - 1 ? '' : ', ')}</span>
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
          <a href={link.url} target="_blank">{link.name}</a>
          {index === arr.length - 1 ? '' : ', '}
        </span>
      );
    });

    return (
      <PageTransitionGroup component="section">
        <h1>{this.state.project.name}</h1>
        <h3><i>Client: {this.state.project.client}, {this.state.project.year}</i></h3>
        <div className="row">
          <div className="project-description col-lg-8 col-md-6 col-sm-12">
            <p>{this.state.description}</p>
            <p><i>Technologies</i><br/>{technologies}</p>
            <p><i>Skills</i><br/>{skills}</p>
            <p><i>Links</i><br/>{links}</p>
          </div>
          <div className="project-images col-lg-4 col-md-6 col-sm-12">
            <ImageGallery images={this.state.project.images}/>
          </div>
        </div>
      </PageTransitionGroup>
    );
  }
}
