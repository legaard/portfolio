import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import style from '../style/main.scss';

import Layout from './pages/Layout';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="/projects" />
      <Route path="projects(/:id)" component={Projects}></Route>
      <Route path="about" component={About}></Route>
      <Route path="contact" component={Contact}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>,
document.getElementById('app'));
