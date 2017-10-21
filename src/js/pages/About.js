import React from 'react';
import { Link } from 'react-router';

import { resetPagePosition } from '../utils/page'; 
import PageTransitionGroup from '../components/PageTransitionGroup';
import SkillBar from '../components/SkillBar';
import Image from '../components/Image';

export default class About extends React.Component {
  componentWillMount() {
    resetPagePosition();
  }

  render () {
    return (
      <PageTransitionGroup component="section">
        <h1>About</h1>
        <div className="row">
          <div className="col-md-8">
            <p>
              Hi there – hope you are enjoying my portfolio!<br/>
            My name is Lasse Legaard and I am a Danish (yep, I am a viking) IT product developer with a strong focus on software development and interaction design. As you might already have experienced (in the <Link to="/projects">projects</Link> section), I am a fairly versatile guy who can create almost anything from simple mock-ups to more sophisticated and functional products. I have a great interest in IoT devices and concept development, and I always work on a small project in my spare time, e.g. building a small NAS-server using a Raspberry Pi or making a physical Pomodoro timer from an Particle Photon and a NeoPixel ring. When I am not exercising my tech muscles I spend time with family and friends, and sometimes I even find time to do physial workouts (wow!).
            </p>
            <p>
              I hold a BSc degree in IT from Aarhus University (AU) and currently pursuing a MSc degree in IT Product Development from the same university. During my last year as a master student – which is this year – I went abroad to study at the Industrial Design department at Eindhoven University of Technology (TU/e). My stay there broadened my perspective on visual and functional aesthetics and I acquired some new cool design modelling techniques as well.
            </p>
            <p>
              If you want to learn more about my work experience or academic background feel free to visit my <a href="https://linkedin.com/in/lasselegaard" target="_blank" rel="noopener">profile</a> on LinkedIn.
            </p>
          </div>
          <div className="col-md-4">
            <Image id="profile-image" src="assets/img/profile.jpg"/>
            <h3>Skills</h3>
            <SkillBar name="Software Development" level={9}/>
            <SkillBar name="Prototyping" level={8}/>
            <SkillBar name="Graphical Design" level={6}/>
            <SkillBar name="Ideation" level={8}/>
            <SkillBar name="Sketching" level={4}/>
            <SkillBar name="Interaction Design" level={9}/>
            <SkillBar name="User Experience Design" level={7}/>
          </div>
        </div>
      </PageTransitionGroup>
    );
  }
}
