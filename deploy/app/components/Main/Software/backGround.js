import React from 'react';


class BackgroundSoftware extends React.Component {
  render() {
    var sqo="{";
    var sqc="}";
    var lt="<";
    var gt=">";
    var atimport="@import"
    var at="@"
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
    </div>

    );
  }

}
