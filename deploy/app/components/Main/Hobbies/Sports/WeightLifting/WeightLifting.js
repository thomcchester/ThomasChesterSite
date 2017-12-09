import React from 'react';
import {Link} from 'react-router';
import WeightLiftingStore from './WeightLiftingStore.js';
import WeightLiftingActions from './WeightLiftingActions.js';
class WeightLifting extends React.Component {

	constructor(props) {
		super(props);
		this.state = WeightLiftingStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		WeightLiftingStore.listen(this.onChange);
	}


	componentWillUnmount() {
		WeightLiftingStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/* <div>
				<h1>Weight Lifting</h1>
				<p>I have two goals when lifting:</p>
				<ol>
					<li>Get as much of a work out in as possible for the endorphins.</li>
					<li>Be stronger than last time.</li>
				</ol>
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

 export default WeightLifting
