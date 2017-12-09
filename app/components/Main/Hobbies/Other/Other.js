import React from 'react';
import {Link} from 'react-router';
import OtherStore from './OtherStore.js';
import OtherActions from './OtherActions.js';
class Other extends React.Component {

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
			<div className='hobbyDivParticular'>
			<div className="backgroundOther">
			</div>
				<h1 className='hobbyDivParticularHOne'>Here are some other interests</h1>
				<div className='hobbyDivParticularDiv otherInterests'>
					<ul className='hobbyDivParticularUL otherInterestsUL'>
						<li className='hobbyDivParticularLI otherInterestsLi'><Link to='/Hobbies/Other/Cooking'>Cooking</Link></li>
						<li className='hobbyDivParticularLI otherInterestsLi'><Link to='/Hobbies/Other/GettingIntoObscureThingsAndDitchingIt'>Picking up new hobbies</Link></li>
						<li className='hobbyDivParticularLI otherInterestsLi'><Link to='/Hobbies/Other/GreatConversation'>Great Conversation</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}

 export default Other
