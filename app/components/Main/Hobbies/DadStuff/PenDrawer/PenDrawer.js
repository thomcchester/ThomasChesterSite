import React from 'react';
import {Link} from 'react-router';
import PenDrawerStore from './PenDrawerStore.js';
import PenDrawerActions from './PenDrawerActions.js';
class PenDrawer extends React.Component {

	constructor(props) {
		super(props);
		this.state = PenDrawerStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		PenDrawerStore.listen(this.onChange);
	}


	componentWillUnmount() {
		PenDrawerStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*}
			<div>
				<h1>One thing I learned from my father:</h1>
				<h2>Make sure your pen drawer is in good condition</h2>
				<div>
					<img src="../../../../../img/disorder.jpg" />
					<p>Before</p>
				</div>
				<div>
					<img src="../../../../../img/order.jpg" />
					<p>After</p>
				</div>

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

 export default PenDrawer
