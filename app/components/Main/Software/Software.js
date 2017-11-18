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
    return (
      <div className="totSoft">
      <div className="softwaref content">
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
        <div className='softwareA'>
          <h1 className="softwareHeader">Software</h1>
          <div className="WhySoftware">
            <h2 className="headSoftwareIndividual">Why Software?</h2>
            <h3 className="subHeadSoftwareIndividual">The Best of Humanity</h3>
            <p className="bodySoftwareIndividual">When I first started to program and code I thought the barrier to entry was going to be impossibly hard to overcome and once over the initial hurdle it would start to become easier. I had studied mathematics and physics, so I did have a fairly good understanding of what I was getting into, however I really believed I was going to have learn so much to do any of what I wanted. I could not have been more wrong.</p>
            <p className="bodySoftwareIndividual">Getting started proved to be much easier then I have previously imagined. However it just kept getting harder. That is the amazing thing, anyone can start, however it takes dedication to excel. I could help but draw the metaphor that it is much like the ideal democracy and modern society strive for. Anyone can enter but the hardest working, smartest, and creative people can achieve just about anything they set out to complete.</p>
            <p className="bodySoftwareIndividual">Furthermore software shows the human desire for understanding and the mastery over our minds and the world around us to create a better society. Now I am sure that I sound like a dentist talking about great teeth are, but let me explain. Not only have been understand and master ferromagnetism to such a manner that we can manipulate quadrillions (or vastly more) semiconductors to store yes/no’s or 1/0’s, but we have been able to manipulate those 1’s and 0’s to create everything from auto-updating pacemakers to Biden memes. It is a testament of our creativity and extreme understanding of logic that we have been able build a world where anyone can connect with anyone else simply by controlling little one’s and zero’s.</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Software;
