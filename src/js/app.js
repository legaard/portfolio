import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import style from '../style/main.scss';

import Layout from './pages/Layout';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="/projects" />
      <Route path="projects" component={Projects}>
        <Route path=":id" component={Project} />
      </Route>
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
document.getElementById('app'));
