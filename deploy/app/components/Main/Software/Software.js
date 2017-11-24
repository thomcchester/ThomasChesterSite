import React from 'react';
import {Link} from 'react-router';
import SoftwareStore from './SoftwareStore'
import SoftwareActions from './SoftwareActions';


class Software extends React.Component {

  constructor(props) {
    super(props);
    this.state = SoftwareStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SoftwareStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SoftwareStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var sqo="{";
    var sqc="}";
    var lt="<";
    var gt=">";
    var atimport="@import"
    var at="@"
    var apos="'"

    return (
      <div className="softWareHome">
      <div className="backgroundSoft">
        <div className="backgroundForLoop">
          <p>var makeStr=function(){sqo}</p>
            <p>&nbsp; &nbsp; &nbsp; str="";</p>
            <p>&nbsp; &nbsp; &nbsp; for(var i=0;i {lt} 255;i++){sqo}</p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var rdm=Math.round(Math.random());</p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; str=str+rdm; </p>
            <p>&nbsp; &nbsp; &nbsp;{sqc}</p>
            <p>&nbsp; &nbsp; &nbsp;return str</p>
          <p>{sqc}</p>
          <p>strArr=[]</p>
          <p>for(var j=0; j {lt} 1000; j++){sqo}</p>
            <p>&nbsp; &nbsp; &nbsp;strArr.push(makeStr)</p>
          <p>{sqc}</p>
          <p>console.log(strArr)</p>
        </div>
        <div className="backgroundHTML">
          <p>{lt} html {gt}</p>
            <p>&nbsp; &nbsp; &nbsp; {lt} head {gt}</p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  {lt} meta charset="utf-8" /{gt} </p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} meta http-equiv="X-UA-Compatible" content="IE=edge"/ {gt} /</p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} meta name="viewport" content="width=device-width, initial-scale=1" {gt} /</p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} title {gt} tcc {lt} / {gt}</p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" {gt} </p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet" {gt} </p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} link rel="stylesheet" href="/css/main.css" {gt} </p>
            <p>&nbsp; &nbsp; &nbsp;{lt} /head {gt}</p>
            <p>&nbsp; &nbsp; &nbsp;{lt} body {gt}</p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} div id="app" {gt} {sqo}{sqo} html|safe {sqc}{sqc} {lt} /div {gt} </p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} script src="/js/vendor.js" {gt} {lt} /script {gt}</p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} script src="/js/vendor.bundle.js" {gt} {lt} /script {gt}</p>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {lt} script src="/js/bundle.js" {gt} {lt} /script {gt}</p>
            <p>&nbsp; &nbsp; &nbsp;{lt} /body {gt}</p>
          <p>{lt} /html {gt}</p>
        </div>
        </div>

        <div className="articles">
          <div className="article">
            <div className="ImageArticle">
              <img className="artImage" src="../../../../../img/pexels-photo-247791.png"/>
            </div>
            <div className="titleArticle">
              <h1>Why Software?</h1>
            </div>
            <div className="subTitleArticle">
              <h2>The Best of Humanity</h2>
            </div>
            <div className="articleText">
              <div className="articleParagraph">
                <p>
                  <span>Software is more than games, more than angry dinosaurs, snipchip, mineswooper, NSA-PTA hacking, adult websites, momes, headtime, netflux, and instamicrograms. </span>
                  <span>Software is the ability to create, express, expand intelligence, understand, and grow humanity to new heights.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="article">
            <div className="ImageArticle">
              <img className="artImage" src="../../../../../img/mernstack.jpeg"/>
            </div>
            <div className="titleArticle">
              <h1>About</h1>
            </div>
            <div className="subTitleArticle">
              <h2>Software On this Site</h2>
            </div>
            <div className="articleText">
              <div className="articleParagraph">
                <p>blerg</p>
              </div>
            </div>
          </div>
          <div className="article">
            <div className="ImageArticle">
            </div>
            <div className="titleArticle">
              <h1>Would like to Learn</h1>
            </div>
            <div className="subTitleArticle">
              <h2>and future projects</h2>
            </div>
            <div className="articleText">
              <div className="articleParagraph">
                <p>blerg</p>
              </div>
            </div>
          </div>
          <div className="article">
            <div className="ImageArticle">
            </div>
            <div className="titleArticle">
              <h1>Current Software</h1>
            </div>
            <div className="subTitleArticle">
              <h2>What I currently using</h2>
            </div>
            <div className="articleText">
              <div className="articleParagraph">
                <p>blerg</p>
              </div>
            </div>
          </div>
        </div>



        </div>



    );
  }
}

export default Software;
