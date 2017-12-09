import React from 'react';
import {Link} from 'react-router';
import MathStore from './MathStore.js';
import MathActions from './MathActions.js';
class Math extends React.Component {

	constructor(props) {
		super(props);
		this.state = MathStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		MathStore.listen(this.onChange);
	}


	componentWillUnmount() {
		MathStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Math Is Cool.</h1>
				<p>There is not much super cool things I write about or show here at the moment, I will update this to some of my favorite equations and proofs later. That being said I will say that my office walls are whiteboards and I often known to get sucked into an interesting problem.</p>
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

 export default Math
