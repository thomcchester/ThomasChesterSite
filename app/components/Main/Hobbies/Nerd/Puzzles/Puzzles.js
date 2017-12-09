import React from 'react';
import {Link} from 'react-router';
import PuzzlesStore from './PuzzlesStore.js';
import PuzzlesActions from './PuzzlesActions.js';
class Puzzles extends React.Component {

	constructor(props) {
		super(props);
		this.state = PuzzlesStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		PuzzlesStore.listen(this.onChange);
	}


	componentWillUnmount() {
		PuzzlesStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Puzzles</h1>
				<h2>I love any form of puzzle to be honest.</h2>
				<p>I love Sudoku, actual puzzles, riddles, Rubik'<span className="annoying">'</span>s cubes, twisted metal things, wooden Japanese puzzles, logic puzzles, mathematic puzzles, they are all fun to solve...or not solve.</p>
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

 export default Puzzles
