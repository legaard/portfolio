import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

let ProjectCover = (props) => {
  return (
    <div className="project-cover" onClick={props.onClick}>
      <div className="project-name">{props.project.name}</div>
      <div className="image-container">
        <Image src={props.project.images[0].src}
             alt={props.project.images[0].caption}
             title="Click to view project"/>
      </div>
    </div>
  );
};

ProjectCover.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCover;
