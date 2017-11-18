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
    var techSkills = this.state.TechnicalSkills.map(function(skill){
      return(
      <li key={skill.value} className='skillsResume resume'>{skill.value}</li>
    )
    });
    var exp = this.state.Experience.map(function(expo){
      var partialAbout = expo.About.map(function(abouts){
        return(
          <li key={abouts.Header} className='companyAbout'>
            <a className="companyProject">{abouts.Header}</a>
            <a className="companyProjectAbout">{abouts.Body}</a>
          </li>
        )
      });
      return(
        <li key={expo.Company} className="job">
          <a className="company">{expo.Company}</a>
          <a className="Dates">{expo.Dates}</a>
          <ul className="entails">
            <li className="jobTitle">{expo.Title}</li>
            {partialAbout}
          </ul>
        </li>
      )
    })

    var edu = this.state.Education.map(function(eds){
      var aboutBody = eds.About.Body.map(function(body){
        return (
          <li key={body.value}>
            <a className="companyProjectAbout">{body.value}</a>
          </li>
        )
      })
      return(
        <li className="job" key={eds.School}>
          <a className="company"><span className="school">{eds.School}</span>,<span className="schoolCity"> {eds.City}</span>, <span className="schoolState"> {eds.State}</span></a>
          <a className="schoolDates Dates">{eds.GradDate}</a>
          <ul className="entails">
            <li className="jobTitle">{eds.About.header}</li>
            {aboutBody}
          </ul>
        </li>
      )
    })

    return (
      <resume>
        <div className="content">
        <img className="backgroundImage" src="../../../../../img/icons.png" />
        <div className="topSection">
          <h1 className='centered mainHead'>Thomas Charles Chester</h1>
          <h4 className='centered subHead'><a href="mailto:thomas.charles.chester@gmail.com?Subject=Saw%your%website">Thomas.Charles.Chester<span className="atMail">@</span>gmail.com</a></h4>
          <p className='centered centerLine'>&nbsp; </p>
        </div>
        <div className='centered techSkills'>
          <h3 className='subHeadContent'>Technical Skills</h3>
          <p className='subHeadBlackLine'> </p>
          <ul className='techUl'>
            {techSkills}
          </ul>
        </div>
        <div className="experience">
          <h3 className="subHeadExperience"><span className="textWidth">Experience</span></h3>
          <p className='subHeadBlackLine'> </p>
          <ul className="ExperienceUl">
            {exp}
          </ul>
        </div>
        <div className="experience">
          <h3 className="subHeadExperience">Education</h3>
          <p className='subHeadBlackLine'> </p>
          <ul className='ExperienceUl'>
            {edu}
          </ul>
        </div>
      </div>
      </resume>
    );
  }
}

export default Resume;
