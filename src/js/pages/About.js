import React from 'react';

import PageTransitionGroup from '../components/PageTransitionGroup';
import SkillBar from '../components/SkillBar';

export default class About extends React.Component {
  render () {
    return (
      <PageTransitionGroup component="section">
        <h1>About</h1>
        <div className="row">
          <p className="col-md-7">
            Sit tight – I am working on the site and real content will be available soon!
          </p>
          <div className="col-md-5">
            <SkillBar name="Software Development" level={9}/>
            <SkillBar name="Prototyping" level={8}/>
            <SkillBar name="Graphical Design" level={7}/>
            <SkillBar name="Concept Development" level={8}/>
            <SkillBar name="Interaction Design" level={9}/>
            <SkillBar name="User Experience Design" level={8}/>
          </div>
        </div>
      </PageTransitionGroup>
    );
  }
}
