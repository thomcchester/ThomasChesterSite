import React from 'react';
import {Link} from 'react-router';
import NerdOtherStore from './NerdOtherStore.js';
import NerdOtherActions from './NerdOtherActions.js';
class NerdOther extends React.Component {

	constructor(props) {
		super(props);
		this.state = OtherStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		OtherStore.listen(this.onChange);
	}


	componentWillUnmount() {
		OtherStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Other</h1>
				<p>I know that this will have to be updated as the ideas come along, but for now I will just just put a little list.</p>
				<ul>
					<li>If someone want to argue about even the most mundane of things (notice I said argue, not fight, one is the exchange of ideas the other personal combativeness) then I will gladly argue about which grass is best.</li>
					<li>I have a particular stance on negative numbers.</li>
					<li>Although I dont really wear them, I think both bowties and Kilts are cool.</li>
					<li>I struggle with the inconsitences of Star Wars.</li>
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

 export default NerdOther
