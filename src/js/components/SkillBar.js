import React from 'react';
import PropTypes from 'prop-types';

let SkillBar = (props) => {
  return(
    <div className="skill-bar">
      <div className="name">{props.name}</div>
      <div className="bar">
        <div className={'level-' + props.level} title={'~' + props.level * 10 + '%'}></div>
      </div>
    </div>
  );
}

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
}

export default SkillBar;
