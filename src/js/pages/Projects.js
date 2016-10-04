import React from 'react';

export default class Projects extends React.Component {
  constructor() {
    super();
    this.projects = [];
    this.state = {};
  }

  render () {
    return (
      <div>All projects {this.props.params.projectId}</div>
    );
  }
}
