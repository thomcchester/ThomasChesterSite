import React from 'react';

class BestOfHumanity extends React.Component {

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
            <h1 className="mainHeading">Why Software?</h1>
            <h2 className="subHeading">The Best of Humanity</h2>
          </div>
            <div className="mainText">
              <p className="Paragraph">
                <span className="sentence"> I have fallen for the world of software for primarily for two reasons. </span>
                <span className="sentence"> The first reason is personal, the second and universal. I have fallen in love with code because it is fun, interesting and powerful.</span>
                <span className="sentence"> Given enough time and energy you can write just about anything (get out of here p≠np we can have that fight later).</span>
                <span className="sentence"> Code is really just how you solve problems and puzzles.</span>
                <span className="sentence"> It is plainly, just fun.</span>
              </p>
              <p className="Paragraph">
                <span className="sentence"> It is my belief that software is so much more than it popularly viewed.</span>
                <span className="sentence"> The popular view is that software is one of two things, it is an app you can buy on the itunes store or it is tool that has a very exact purpose (that nerds use).</span>
                <span className="sentence"> Software is so much more than this, it is truly the greatest idea humanity has ever had and will be the ultimate legacy that humanity leaves behind.</span>
              </p>
              <p className="Paragraph">
                <span className="sentence"> Now I know that that this is a bold statement saying that software is this important, but let me explain myself. </span>
                <span className="sentence"> First humanity learned to manipulate simple objects, then we learned to manipulate those objects with other objects.</span>
                <span className="sentence"> We learned to adapt and control fire, we learned how to mix fire with objects to create the metals we wanted.</span>
                <span className="sentence"> We learned to manipulate the world around us. We  have learned / and still are learning to control the atom and the sub-atomic structure.</span>
                <span className="sentence"> We have held back rivers, gone to the moon, and sent probes out the solar system.</span>
                <span className="sentence"> However software is the manipulation of pure information, it is manipulation of ideas. </span>
              </p>
              <p className="Paragraph">
                <span className="sentence"> We are creating the tools that shape our world, we are creating the ideas that change lives and we are finding the answers to some of the greatest questions just by manipulating ones and zeros. </span>
                <span className="sentence"> This idea is should excite all who spend the time to think about, by controlling the flow of yes/no, up/down, 1/0, the fundamental duality, we are able to do so much more than our mind or body ever could. </span>
              </p>
              <p className="Paragraph">
                <span className="sentence"> Furthermore, software is the ability for a much greater meritocracy. </span>
                <span className="sentence"> It is not to say that the world of software engineers/developers/coders/programmers is a meritocracy, but that the best code is the best code no matter who wrote it.</span>
                <span className="sentence"> The barrier to entry get lower and lower every day, all that is needed is a computer and internet access and you can become a better programmer than anybody else.  </span>
              </p>
            </div>
        </div>
      </div>
    )
  }
}

export default BestOfHumanity
