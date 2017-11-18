import React from 'react';
import {Link} from 'react-router';
import IOTStore from './IOTStore'
import IOTActions from './IOTActions';


class IOT extends React.Component {

  constructor(props) {
    super(props);
    this.state = IOTStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    IOTStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      {/*
      <div>
        <h1>Internet of things:</h1>
        <h2>Currently not very advanced</h2>
        <p>I am more in the preliminary stages of advancing my house to be a little smarter.</p>
        <ul>
          <li>Wi-fi controlled lighting</li>
          <li>Electronic locks and monitoring</li>
          <li>Nest thermostat</li>
          <li>Nest Cams</li>
          <li>Series of buttons that make http request for everything from find my phone to record time to order toilet paper.</li>
        </ul>
      </div>
      */},
			<div className="closed">
				<p className="backClosedOne">Closed</p>
				<p className="backClosedTwo">Closed</p>
				<p className="backClosedThree">Closed</p>
				<p className="backClosedFour">Closed</p>
				<p className="backClosedFive">Closed</p>
				<p className="backClosedSix">Closed</p>
				<p className="frontClosed">It will be up very soon</p>
				<p className="midClosedOne">Closed</p>
				<p className="midClosedTwo">Closed</p>
				<p className="midClosedThree">Closed</p>
				<p className="midClosedFour">Closed</p>
				<p className="midClosedFive">Closed</p>
				<p className="midClosedSix">Closed</p>
				<p className="midClosedEight">Closed</p>
				<p className="midClosedNine">Closed</p>
				<p className="midClosedTen">Closed</p>
				<p className="midClosedEleven">Closed</p>
				<p className="midClosedTwelve">Closed</p>
				<p className="midClosedThirteen">Closed</p>
				<p className="midClosedFourteen">Closed</p>
			</div>
    );
  }
}

export default IOT;
