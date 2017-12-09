import React from 'react';

class PreviousLike extends React.Component {
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
              <span className="sentence"> previous like</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default PreviousLike
