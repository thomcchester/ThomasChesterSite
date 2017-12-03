import React from 'react';
import {Link} from 'react-router';
import ComicsStore from './ComicsStore'
import ComicsActions from './ComicsActions';
import {first, without, findWhere} from 'underscore';

class Comics extends React.Component {

  constructor(props) {
    super(props);
    this.state = ComicsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ComicsStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ComicsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div>
        <h1 className="headArt"> This is some amazing comic art I made.</h1>
        <img className="preacher" src="../../../../../img/artMax.png"/>
      </div>

    );
  }
}

export default Comics;
