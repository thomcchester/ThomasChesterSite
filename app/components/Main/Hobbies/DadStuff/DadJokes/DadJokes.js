import React from 'react';
import {Link} from 'react-router';
import DadJokesStore from './DadJokesStore.js';
import DadJokesActions from './DadJokesActions.js';
class DadJokes extends React.Component {

	constructor(props) {
		super(props);
		this.state = DadJokesStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		DadJokesStore.listen(this.onChange);
	}


	componentWillUnmount() {
		DadJokesStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Dad Jokes</h1>
				<p>When I was younger I wanted to just destroy my father for the constant and repetitive jokes. As I have aged, and my humor has degraded, I have found that dad jokes are best jokes. Now I can honestly say that I am proud of my father for his determination in passing down a tradition of terrible humor.</p>
				<h2>Here are many of my favorites, some stolen directly from my father:</h2>
					<ul>
						<li>
							<ul>
								<li>My Wife: "I am hungry/tired/frustrated/cold/hot"</li>
								<li>Me:"nice to meet you hungry/tired/frustrated/cold/hot"</li>
								<li>Explaination: Let me break this one down for you. It might be hard to understand. When she said "I am", she was referring to a physical/emotional/mental state. I, on the other hand, take "I am" to mean "my name is" as this is common english parlance.</li>
								<li>This joke has also degraded since I started, now when ever my wife tells me her current state I just stick my hand out to shake her hand, at this this point she usually punches my hand.</li>
							</ul>
						</li>
						<li>
							<ul>
								<li>Me(speaking to any child):What is your name?</li>
								<li>Child:my name is _____</li>
								<li>Me:Okay nice to meet you Fred (no matter gender or what ever their name is)</li>
								<li>Child:(says something along the lines of:) My name is not Fred</li>
								<li>Me:Okay sorry Fred, what was your name again Fred?</li>
								<li>Child:My name is ______!</li>
								<li>Me:Okay great, thank you Fred</li>
								<li>Child:My Name is NOT FRED !!!!</li>
								<li>Me: What ever Fred</li>
								<li>This continues until it is time for me to leave</li>
								<li>Explaination: This one is funny because I have never met a child named fred. Calling them Fred is not their name, and no matter what they say I still call them Fred. It is best to act like you agree with them when they say what their real name is but still call them Fred.</li>
							</ul>
						</li>
						<li>
							<ul>
								<li>Cashier at grocery store: Would you like the milk in a bag?</li>
								<li>Me: No thank you, I would like to keep it in the carton</li>
								<li>Explaination: Well this is good one, see what the cashier is really asking is "Should I put the milk carton in a bag", however I am interpreting it as the actual milk itself being switched from the carton to a bag. Side note, you can get milk in a bag.</li>
							</ul>
						</li>
						<li>
							<p>My dad still does this one every time we go out to eat.</p>
							<ul>
								<li>*Waiter comes to clear plates*</li>
								<li>*Father looks at completely empty and cleared off plate*</li>
								<li>Father: It wasnt very good, I am sending the rest back!</li>
								<li>Explaination: Now see, most people would send the rest back if they tasted something they really didnt like in their meal. However that means that must be a fairly full plate to do that. My father however clearly has enjoyed his entire meal which can be inferred by his plate, but his word contradict that idea by stating that it was not good. </li>
							</ul>
						</li>
						<li>
							<ul>
								<li>Wife: Did you get a hair cut?</li>
								<li>Me: No I got all, or at least most of them cut</li>
								<li>Explaination: This one is funny because it has plays on singular/plural nature of objects vs actions. My wife is referring to the singular action of a spending time in the hair salon/barber shop and having the style of hair changed. I am referring to the plural objects, hairs, having their state changed to a smaller form.</li>
							</ul>
						</li>
						<li>
							<p>Another one my father does continously</p>
							<ul>
								<li>*In any foriegn country that does not speak english*</li>
								<li>Dad: Man it is strange the kids are so smart here, they like all speak French(or whatever native language it is)</li>
								<li>If however you tell the joke first he says: Yeah but they like barely learned any english.</li>
								<li>Explaination: Most people would say that speaking more than one language is a way of defining intelligence, wether this is right or wrong is not part of the joke. In the first version, my father implies that everyone speaks english(we can talk about Americentrism at another point) and that the kids can even speak this other native language as well. In the second verson, it must be understood that not being able to speak a one's own primary language very well is a sign that this person lacks intelligence. My father is implying that english is the speaker's first language and that they cannot speak it very well</li>
							</ul>
						</li>
						<li>
							<p>This one is from my uncle Charlie</p>
							<ul>
								<li>*looking at beautiful Mountain Vista</li>
								<li>Man this would be a great view if the mountains were not in the way.</li>
								<li>Explaination: This is a classic. If you dont get it, let me break it down to simple terms. See, the mountains are the view that we are looking at and my uncle is saying that what we want to look at is behind the mountains.</li>
							</ul>
						</li>
						<li>
							<ul>
								<li>*whenever anybody is about to bite into any food, preferrably something like a burger.*</li>
								<li>Bet you cant eat that in one bite.</li>
								<li>Explaination: This one might be hard to understand. See clearly one cannot eat a whole burger in one bite, my father tries to make the bet that they cannot eat it in one bite which is a really bad bet.</li>
							</ul>
						</li>
						<li>
							<ul>
								<li>Me:What did the fish say when it ran into the concrete wall?</li>
								<li>Other Person: ummm..</li>
								<li>Me: Dam</li>
								<li>Explaination: See people typically use the exclamation "Damn" when they hurt themselves or do something unintentionally. "Dam" is something that is used to hold back water. Since "Dam" and "Damn" are pronounced the same way, and it is implied that the fish ran into a "Dam" the fish makes an exclamation but uses the term "Dam" as in the structure it just hit.</li>
							</ul>
						</li>
						<li>
							<ul>
								<li>Here is one that needs no explaination at all:</li>
								<li>There once was a purple kingdom. Everything was purple in this kingdom. The king was purple, the queen was purple, their clothes were purple, their castle was purple. If you looked at the sky you would see that it is purple, the clouds are purple, the birds are purple, the sun is purple. All of the animals in the kingdom are purple, all of the plants are purple, all the buildings are purple. Everything that anyone makes is purple. Well the King and Queen are taking a purple bath, in their purple tub, that is in their purple bathroom and has purple water. Let it be very clear that everything is purple. It is important to understand that everything is purple. While the Purple King and the Purple Queen are in their huge purple tub with purple water and purple bubbles, both of them wearing their purple crowns, the Purple King asks the Purple Queen "can you pass the purple soap?" The Purple Queen looks ups from the purple foam and says: "NO SOAP... RADIO! RADIO"</li>
							</ul>
						</li>
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

 export default DadJokes
