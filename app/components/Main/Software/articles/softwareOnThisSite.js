import React from 'react';

class SoftwareOnThisSite extends React.Component {
  render(){
    var firstNumberFunc = function(){
      var numberHold= "";
      for (var i=0; i<1000; i++){
        numberHold += Math.floor(Math.random()*2)
      }
      return numberHold
    }
    var allOnesAndZeros = [];
    for (var i=0; i<40; i++){
      allOnesAndZeros.push(<span key={i}>{firstNumberFunc()}</span>)
    }
    return(
      <div className="fullArtContainer">
        <div className="backGroundArticles">
          <div className="backgroundArticlesNumbers">
            {allOnesAndZeros}
          </div>
        </div>
      <div className="fullArticle">
        <div className="headingForArticle">
          <h1 className="mainHeading"></h1>
          <h2 className="subHeading"></h2>
          <div className="mainText">
            <p className="Paragraph">
              <span className="sentence">software On This Site</span>
            </p>
            <p className="Paragraph">
              <span className="sentence">software On This Site</span>
            </p>
            <p className="Paragraph">
              <span className="sentence">software On This Site</span>
            </p>
            <p className="Paragraph">
              <span className="sentence">
                <div className="columnSoftware">
                  <a href="https://expressjs.com/">Express.js</a>
                  <a href="https://nodejs.org/en/">Node.js</a>
                  <a href="https://reactjs.org/">React.js</a>
                  <a href="https://nodemon.io/">nodemon</a>
                  <a href="http://alt.js.org/">Alt.js</a>
                </div>
                <div className="columnSoftware">
                  <a href="https://www.npmjs.com/package/body-parser-json">body-parser</a>
                  <a href="https://www.npmjs.com/package/jwt-decode">JWT-decode</a>
                  <a href="http://mongoosejs.com/">Moongoose.js</a>
                  <a href="https://github.com/expressjs/morgan">Morgan</a>
                  <a href="https://www.mongodb.com/cloud/atlas/lp/general?jmp=search&utm_source=google&utm_campaign=Americas-US-MongoDB-to-Atlas-Brand-Alpha&utm_keyword=mongodb&utm_device=c&utm_network=g&utm_medium=cpc&utm_creative=237614219714&utm_matchtype=e&_bt=237614219714&_bk=mongodb&_bm=e&_bn=g&gclid=Cj0KCQiAsK7RBRDzARIsAM2pTZ9bYSqxVfq9raZlO0VjVH75vP99Ngj_AQH_t_jhPfjIYzbr17LYWr0aAlSaEALw_wcB">MongoDB</a>
                </div>
                <div className="columnSoftware">
                  <a href="https://github.com/ReactTraining/react-router">React-router</a>
                  <a href="https://github.com/visionmedia/superagent">Superagent</a>
                  <a href="http://node-swig.github.io/swig-templates/">Swig.js</a>
                  <a href="http://underscorejs.org/">Underscore.js</a>
                  <a href="https://www.npmjs.com/package/xml2js-parser">xml2js</a>
                </div>
                <div className="columnSoftware">
                  <a href="https://babeljs.io/">Babel</a>
                  <a href="https://bower.io/">Bower</a>
                  <a href="https://gulpjs.com/">Gulp</a>
                  <a href="https://jquery.com/">jQuery</a>
                  <a href="https://getbootstrap.com/">Bootstrap</a>
                </div>
                <div className="columnSoftware">
                  <a href="https://www.npmjs.com/package/react-dom">React-dom</a>
                  <a href="http://dimsemenov.com/plugins/magnific-popup/">magnific-popup</a>
                  <a href="https://codeseven.github.io/toastr/">Toastr</a>
                </div>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default SoftwareOnThisSite
