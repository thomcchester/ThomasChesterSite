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
			<div className="maths">
				<h1 className="MathHead">Math is Cool.</h1>
				<h2 className="MathSubHead">If you do not agree, you are probably a moron</h2>
				<div className="Identities mathSection">
					<h3 className="mathSectionHeader">Favorite Identities:</h3>
						<div className="subMathSection">
							$a 
								&sum;
						</div>
				</div>
				<div className="Proofs mathSection">
					<h3 className="mathSectionHeader">Most Interesting Proofs:</h3>
						<div className="subMathSection">
							<h3 className="subMathSectionHeader"></h3>
						</div>
				</div>
				<div className="Theorems mathSection">
					<h3 className="mathSectionHeader">Dope Theorems:</h3>
				</div>
				<div className="Why mathSection">
					<h3 className="mathSectionHeader">Why Math?</h3>
				</div>
				<div className="Ideas mathSection">
					<h3 className="mathSectionHeader">Coolest Ideas:</h3>
				</div>
			</div>
		);
	}
}

 export default Math
