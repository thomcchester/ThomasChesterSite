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
			<div className="Ropes">
				<br></br>
				<br></br>
				<div className="imageGroup">
					<img className="imageRope" src="../../../../../img/rope0.jpg" />
				</div>
				<div className="imageGroup">
					<img className="imageRope" src="../../../../../img/rope1.jpg" />
				</div>
				<div className="imageGroup">
					<img className="imageRope" src="../../../../../img/rope2.jpeg" />
				</div>
				<div className="imageGroup">
					<img className="imageRope" src="../../../../../img/rope3.jpeg" />
				</div>
				<div className="imageGroup">
					<img className="imageRope" src="../../../../../img/rope5.jpeg" />
				</div>
			</div>
		);
	}
}

 export default GoodLengthsOfRope
