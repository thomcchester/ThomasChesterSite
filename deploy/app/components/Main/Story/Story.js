import React from 'react';
import {Link} from 'react-router';
import StoryStore from './StoryStore'
import StoryActions from './StoryActions';


class Story extends React.Component {

  constructor(props) {
    super(props);
    this.state = StoryStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    StoryStore.listen(this.onChange);
  }

  componentWillUnmount() {
    StoryStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <story>
        <h1 className='storyHeadOne'>Some Catchy Title</h1>
        <h2 className='storyHeadTwo'>A Thomas/ Tommy story</h2>
        <h3 className='storyHeadThree'>Seriously, how do you come up with a title?</h3>
        <p>I am going to try and do this fast and simple while still being quite complete. I was born in Boston, MA. At nine months my parents (John and Laurie), moved to Woodstock, VT, to start a poster business. They still live in the same house and have the same company, except it much bigger than the board over their bath tub they started with. Was a nice kid,  climbed on everything. Diagnosed young with dysgraphia, which is like a brain-not-work-normal thing. Went to a different elementary school than home town, they were better equiped to deal with a kid that had dysgraphia. Middle-school was beyond awkward and uncomfortable. I had bleach hair/ green hair /spiked hair. I could not talk to girls. I got in trouble for stealing car emblems. Good not great grades, better math and science than anything else (continued forever). Proctor Academy, a New England boarding school for highschool. Since I would assume the bulk of people reading this are from the midwest let me clear a few things up. </p>
        <ul className="storyListUl">
          <li className="storyList">I went there by choice</li>
          <li className="storyList">No it was not an all boys school.</li>
          <li className="storyList">There was no dress code.</li>
          <li className="storyList">It did not look like dead poets society.</li>
          <li className="storyList">Somewhat hippy school. Was on rock climbing team, woods/lumberjack team, built a canoe, and lived on a school bus driving across the country for a semester. Oh and I grew dreads. Bad idea.</li>
        </ul>
        <p> I went to UC Boulder for a year. Not mature enough to handle that yet. Took some time off. Got lost for awhile. Had a rather interesting experience in France which lead me to Minnesota. Stayed there for a Month, then moved to Port Townsend, WA. Lived there for sixish months. Moved back to Minneapolis to attend Augsburg college. Studied Mathematics and Physics. Yes I am a nerd. Met wife. She rules. We are having a baby soon. Decided way to close to the end of college that computer science was more me. Started programming a lot. Attended Prime Digital Academy. Started Programming more. Now almost Dad, trying to make it as a developer. </p>
      </story>
    );
  }
}

export default Story;
