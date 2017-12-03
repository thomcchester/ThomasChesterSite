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
        <img className="preacher" src="../../../../../img/preacher.png"/>
        <img className="deadpool" src="../../../../../img/deadpool.png"/>
        <img className="spawn" src="../../../../../img/spawn.png"/>
        <img className="thor" src="../../../../../img/ThorsHammer.png" />
        <img className="venom" src="../../../../../img/venom.png" />
      </div>

    );
  }
}

export default Comics;
