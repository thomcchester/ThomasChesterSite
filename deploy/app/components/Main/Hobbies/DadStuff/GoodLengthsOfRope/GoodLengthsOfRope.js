import React from 'react';
import {Link} from 'react-router';
import GoodLengthsOfRopeStore from './GoodLengthsOfRopeStore.js';
import GoodLengthsOfRopeActions from './GoodLengthsOfRopeActions.js';
class GoodLengthsOfRope extends React.Component {

	constructor(props) {
		super(props);
		this.state = GoodLengthsOfRopeStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		GoodLengthsOfRopeStore.listen(this.onChange);
	}


	componentWillUnmount() {
		GoodLengthsOfRopeStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1 className="hobbyPageHeader ropeHeader">Who doesnt like a good length of rope?</h1>
				<h2 className="hobbyPageSubHeader ropeSubHeader">Here are some ropes:</h2>
				<img src={'../../../../../img/Boat.jpg'}/>
				<img src={'../../../../../img/rope.jpg'}/>
				<img src={'../../../../../img/skiRope.jpg'}/>
				<img src={'../../../../../img/climbingRope.jpg'}/>
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

 export default GoodLengthsOfRope
