import React, { PropTypes } from 'react';

let ProjectCover = (props) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="project-cover" onClick={props.onClick}>
        <div className="project-name">{props.project.name}</div>
        <div className="image-container">
          <img src={props.project.images.cover} />
        </div>
      </div>
    </div>
  );
};

ProjectCover.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCover;
