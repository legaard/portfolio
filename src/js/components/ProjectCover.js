import React, { PropTypes } from 'react';

let ProjectCover = (props) => {
  return (
    <section className="project-cover" onClick={props.onClick}>
      <h3>{props.project.client}</h3>
      <div>{props.project.name}</div>
      <img src={props.project.images.cover}/>
    </section>
  );
};

ProjectCover.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCover;
