import React from 'react';
import {Link} from 'react-router';
import MountainBikingStore from './MountainBikingStore.js';
import MountainBikingActions from './MountainBikingActions.js';
class MountainBiking extends React.Component {

	constructor(props) {
		super(props);
		this.state = MountainBikingStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		MountainBikingStore.listen(this.onChange);
	}


	componentWillUnmount() {
		MountainBikingStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Mountain Biking</h1>
				<h2>My father, brother and I love to mountain bike, honestly my dad is probably the best.</h2>
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

 export default MountainBiking
