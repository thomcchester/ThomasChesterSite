import React from 'react';
import {Link} from 'react-router';
import NerdStore from './NerdStore.js';
import NerdActions from './NerdActions.js';
class Nerd extends React.Component {

	constructor(props) {
		super(props);
		this.state = NerdStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		NerdStore.listen(this.onChange);
	}


	componentWillUnmount() {
		NerdStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			<div className='hobbyDivParticular'>
				<div className="backgroundNerd">
					<img className="backgroundImage nerdBackground" src="../../../../../img/nerdBackground.png" />
				</div>
				<h1 className='hobbyDivParticularHOne'>I am absolutely a Nerd</h1>
				<h2 className='hobbyDivParticualrHTwo'>why I am a Nerd</h2>
				<div className='hobbyDivParticularDiv NerdDiv'>
					<ul className='hobbyDivParticularUL NerdUl'>
						<li className='hobbyDivParticularLI NerdLi'><Link to='/Hobbies/Nerd/Comics'>Comics</Link></li>
						<li className='hobbyDivParticularLI NerdLi'><Link to='/Hobbies/Nerd/IOT'>IOT</Link></li>
						<li className='hobbyDivParticularLI NerdLi'><Link to='/Hobbies/Nerd/Math'>Math</Link></li>
						<li className='hobbyDivParticularLI NerdLi'><Link to='/Hobbies/Nerd/Physics'>Physics</Link></li>
						<li className='hobbyDivParticularLI NerdLi'><Link to='/Hobbies/Nerd/Puzzles'>Puzzles</Link></li>
						<li className='hobbyDivParticularLI NerdLi'><Link to='/Hobbies/Nerd/SciFi'>SciFi</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}

 export default Nerd
