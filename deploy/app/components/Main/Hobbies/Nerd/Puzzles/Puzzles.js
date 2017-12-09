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
			<div>
				<h1>Puzzles</h1>
				<h2>I love any form of puzzle to be honest.</h2>
				<p>I love Sudoku, actual puzzles, riddles, Rubik'<span className="annoying">'</span>s cubes, twisted metal things, wooden Japanese puzzles, logic puzzles, mathematic puzzles, they are all fun to solve...or not solve.</p>
			</div>
		);
	}
}

 export default Puzzles
