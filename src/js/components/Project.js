import React, { PropTypes } from 'react';

let Project = (props) => {
  return (
    <div>
      <h2>{props.project.name}</h2>
      <img src={props.project.images.cover}/>
      <section>{props.project.description}</section>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
