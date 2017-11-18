import React from 'react';
import {Link} from 'react-router';
import HomeStore from './HomeStore'
import HomeActions from './HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div className="content homeScreen">
        <div className="backgroundNumbers">
          <p>11011010101010111010101010101</p>
          <p>00100101010110100110101000111</p>
          <p>10110010111011101011110101010</p>
        </div>

        <div className="whitening">
        <h1 className="mainHeader">
          <span className="thomas">
            <span className="letter thomasT">T</span>
            <span className="letter thomasH">H</span>
            <span className="letter thomasO">0</span>
            <span className="letter thomasM">M</span>
            <span className="letter thomasA">A</span>
            <span className="letter thomasS">S</span>
            <p></p>
            <div className="horLine">
            </div>
          </span>
          <span className="charles">
           <span className="letter charlesC">C</span>
           <span className="letter charlesH">H</span>
           <span className="letter charlesA">A</span>
           <span className="letter charlesR">R</span>
           <span className="letter charlesL">L</span>
           <span className="letter charlesE">E</span>
           <span className="letter charlesS">S</span>
           <p></p>
           <div className="horLine">
           </div>
          </span>
          <span className="chester">
           <span className="letter chesterC">C</span>
           <span className="letter chesterH">H</span>
           <span className="letter chesterE">E</span>
           <span className="letter chesterS">S</span>
           <span className="letter chesterT">T</span>
           <span className="letter chesterE">E</span>
           <span className="letter chesterR">R</span>
          </span>
        </h1>
        <h2 className="mainSubHeader">
          <div className="tcc">Engineer</div>
          <div className="vertLine"></div>
          <div className="tcc">Developer</div>
          <div className="vertLine"></div>
          <div className="tcc">Nerd</div>
        </h2>
        </div>

      </div>
    );
  }
}

export default Home;
