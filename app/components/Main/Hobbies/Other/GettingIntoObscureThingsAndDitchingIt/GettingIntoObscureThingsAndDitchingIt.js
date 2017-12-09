import React from 'react';
import {Link} from 'react-router';
import GettingIntoObscureThingsAndDitchingItStore from './GettingIntoObscureThingsAndDitchingItStore.js';
import GettingIntoObscureThingsAndDitchingItActions from './GettingIntoObscureThingsAndDitchingItActions.js';
class GettingIntoObscureThingsAndDitchingIt extends React.Component {

	constructor(props) {
		super(props);
		this.state = GettingIntoObscureThingsAndDitchingItStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		GettingIntoObscureThingsAndDitchingItStore.listen(this.onChange);
	}


	componentWillUnmount() {
		GettingIntoObscureThingsAndDitchingItStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Getting Into Obscure Things And Ditching It</h1>
				<h3>Some Things I have gotten into and ditched</h3>
				<ul>
					<li>Modernist Cooking</li>
					<li>Muy Thai</li>
					<li>Strongman Competitions</li>
					<li>Woodworking</li>
					<li>Eating healthy</li>
					<li>Painting</li>
					<li>Color Pencil Drawing</li>
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

 export default GettingIntoObscureThingsAndDitchingIt
