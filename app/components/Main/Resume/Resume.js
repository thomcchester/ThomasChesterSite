import React from 'react';
import {Link} from 'react-router';
import ResumeStore from './ResumeStore';
import ResumeActions from './ResumeActions';

class Resume extends React.Component {

  constructor(props) {
    super(props);
    this.state = ResumeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ResumeStore.listen(this.onChange);
    ResumeActions.findDefaults();
  }

  componentWillUnmount() {
    ResumeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);

  }

  render() {

    return (
      <resume>
        <img className="backgroundImage" src="../../../../../img/icons0.png" />
        <br></br>
        <br></br>
        <h1 className="TitleResume">Thomas Chester</h1>
        <h2 className="subResume"><a href="mailto:thomas.charles.chester@gmail.com">thomas.charles.chester@gmail.com</a></h2>
        <ul>
          <li className="ListResume MainList"> Summary </li>
            <ul className="MainSections listParts">
              <li><strong>Technical Specialist &amp; Full Stack Software Developer</strong> with <strong>3 years</strong> of strong experience, passionate about solving
techno-business optimization problems at scale and developing a new class of services, with a deep understanding of
customer expectations.</li>
              <li>Skilled at providing complex technical support to field engineers, technicians, product support and customers;
identifying and fixing equipment or software issues; and contributing to continuous process improvement in day-to- day
team operations across SaaS and Full-Stack Software Development.</li>
              <li>Effectively improves effectiveness of support service and monitors quality of service delivered.</li>
              <li>Proficient in handling high severity/high visibility escalations, coordinates internal resources and ensure customer
confidence. Ability to effectively resolve issues in a timely manner using sound judgment and critical thinking.</li>
            </ul>
          <li className="ListResume MainList"> Core Competency </li>
            <ul className="coreComp">
              <li className="coreCompItem">Full-Stack Software Development</li>
              <li className="coreCompItem">Customer Service Support</li>
              <li className="coreCompItem">Prototyping &amp; Coding</li>
              <li className="coreCompItem">Technical Support</li>
              <li className="coreCompItem">Event Tracking</li>
              <li className="coreCompItem">Incident Management</li>
              <li className="coreCompItem">Design &amp; Development</li>
              <li className="coreCompItem">Troubleshooting</li>
              <li className="coreCompItem">Team Supervision &amp; Leadership</li>
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p className="technicalSkills"><strong>Technical Skills:</strong>HTML 5, Sass, React, Java, Javascript, Socket.io, Underscore.js, Python, Zendesk, CSS 3, Git, Ipware, Grunt,
Bourbon, Catalyst, React-Router, Jade, Jira, Node.js, SQL, Passport, Gulp, Express, PostgreSql, Angular-Route Gulp
Bash, jQuery, IDL, Heroku, Bower, Bootstrap, Webpack, Angular-Material, Octave, powershell, Github, R, Latex, MySQL,
Labview, Beamer, Mathematica, NodeMailer, ES6, Bcrypt, JSON, Babel, Postico, Angular, TinkerCad, MongoDB,
Bitbucket, Lodash</p>
          <li className="ListResume MainList"> Professional Background </li>
            <ul>
              <li className="Company">
                <span className="companyTitle">Technical Support Engineer II, Siteimprove <span className="dateJob">May 2017 - Present </span></span>
                <ul className="companyText">
                  <li>Deliver technical leadership; code review, design review, drive process improvement, help team maintain high code quality. Provide Technical support including initial root cause analysis; escalate the issues to engineering when necessary and manage the customer expectation through to issue close.</li>
                  <li>Coordinate with development teams and plan for the delivery, test and implementation of software for the customer.</li>
                  <li>Document the technical and operational installation before signoff; conduct a post implementation review with the customer.</li>
                  <li>Assist in integration support by monitoring error logs, fixing data issues, and confer with other teams and clients on implementations.</li>
                  <li>Use JS snippets to create minimally invasive tracking approaches to tag and capture various events occurring on a page. Track events such as clicks on DOM objects, input searches and hits, component state changes, and page redirection.</li>
                  <li>Troubleshoot customer service issues in Siteimprove’s digital certainty platform by use a non-linear sequential bisection methodology; analyzing and understanding the issues and breaking down problems into the component issues while maintaining a gestalt view of the customers’ needs and uses for the platform.</li>
                  <li>Provide inputs to projects as a customer and service advocate; and design and test methods for verification of all service procedures.</li>
                </ul>
              </li>
              <li className="Company">
                <span className="companyTitle">Freelance Software Engineer, Self Employed <span className="dateJob">Apr 2016 - Mar 2017 </span></span>

                <ul className="companyText">
                  <li>Developed features across multiple sub modules within applications, including collaboration in requirements definition, prototyping, design, coding, testing, debugging, effort estimation, and continuous quality improvement of the design &amp; code and deployment.</li>
                  <li>Designed and implemented new features, provide fixes/workarounds to bugs and innovate in alternate solutions.</li>
                  <li>Provided quick solutions to problems and taking a feature/component through the entire life cycle with focus on improving the time performance, and usability/reliability.</li>
                  <li>Designed, implemented, and adhered to the overall architecture to fulfill the functional requirements through software components.</li>
                  <li>Took accountability of successful delivery of functionality or module for the overall product objective.</li>
                </ul>
              </li>
            </ul>
          <li className="ListResume MainList otherExperience"> Other Experience </li>
            <ul className="otherExperience">
              <li>
                <span className="otherHead">Augsburg College <span className="otherDate">May. 2013 – Aug. 2013 &amp; May. 2014 – Aug. 2014</span></span>
                <br></br>
                <span className="otherSub">Researcher - Physics Department</span>
                <ul className="researcher">
                  <li>Researched the fractal dimension, width distribution and hygroscopicity of entangled glass-phase saccharide amorphous microfilaments through the use of scanning electron microscopy, time lapse photography, fourth order analytical scales, MATLAB and ImageJ.</li>
                  <li>Performed LabView, Arduino coding and wiring, and 3d printing in the creation of working Langmuir troughs allowing other researchers to effectively study lipid monolayers.</li>
                  <li>Supervised and ran the Augsburg College 3d printer, allowing for other students and faculty to prototype equipment and visualize complex mathematical patterns.</li>
                </ul>
              </li>
              <br></br>

              <li>
                <span className="otherHead">Augay Farms <span className="otherDate">Apr. 2009 – Aug. 2009</span></span>
                <br></br>
                <span className="otherSub">Dairy Farmer</span>
              </li>
              <br></br>
              <li>
                <span className="otherHead">Wild Apple Graphics <span className="otherDate">Apr. 2007 – Aug. 2007 &amp; Apr. 2008 – Aug. 2008</span></span>
                <br></br>
                <span className="otherSub">Warehouse Associate</span>
              </li>
            </ul>
          <li className="ListResume MainList"> Academics </li>
          <ul className="academics">
            <li>
              <p>Prime Digital Academy <span className="otherDate">May 2016</span></p>
              <p><strong>Full Stack Software Development Student</strong></p>
              <p className="projectHandled"> <strong>• Project Handled</strong>
                <ul>
                  <li><strong>Project Description:</strong> Developed a gym app allowing for multiple variables and sub variables for a given exercise. It allows one to create particular exercises and track them over time.</li>
                  <li><strong>Technology Used:</strong> SEAN Stack HTML5, CSS3, JavaScript, AngularJS, Underscore.js, PostgreSQL, Sass, Express.js, Node.js.</li>
                </ul>
              </p>
            </li>
            <br></br>
            <li>
              <p>Augsburg College, Minneapolis, MN  <span className="otherDate">May 2015</span></p>
              <p><strong>B.S. Mathematics and Physics</strong></p>
              <p>
                <ul>
                  <li>Inducted into Pi Mu Epsilon Honor Society for mathematics.</li>
                  <li>Focus interest in studying entangled glass-phase saccharide amorphous microfilaments and the effects of width
distribution on hygroscopicity, relaxation by creating using appropriate hardware and software.</li>
                </ul>
              </p>
            </li>
          </ul>
        </ul>
      </resume>
    );
  }
}

export default Resume;
