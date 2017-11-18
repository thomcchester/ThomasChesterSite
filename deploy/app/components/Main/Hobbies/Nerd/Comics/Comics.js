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
      {/*
      <div className="finalHob">
        <h1>Comics</h1>
        <div>
          <p>Wall</p>
          <img src="../../../../../img/comicWall.jpg" className="imgR" />
        </div>
        <div>
          <p>Book Shelf</p>
          <img src="../../../../../img/comicShelf.jpg" className="imgR"/>
        </div>
        <div>
          <p>Some of favorites:</p>
          <ul>
            <li>Superman:Red Son, Mark Miller</li>
            <li>Preacher, Garth Ennis</li>
            <li>The Sandman, Neil Gaiman</li>
            <li>Carnage: U.S.A., Zeb Wells</li>
          </ul>
        </div>
        <div>
          <p>Some of favorites characters:</p>
          <ul>
            <li>Any of the Klyntar:</li>
              <ul>
                <li>Venom</li>
                <li>Carnage</li>
                <li>Riot</li>
                <li>Agony</li>
                <li>Lasher</li>
                <li>Phage</li>
                <li>Anti-venom</li>
                <li>Scorn</li>
                <li>Toxin</li>
                <li>Hybrid</li>
              </ul>
            <li>Wade Wilson/Dead Pool</li>
            <li>Adam Warlock</li>
            <li>Hank Pym/ Ant-Man</li>
            <li>Loki</li>
            <li>Victor Vonn Doom</li>
            <li>High Evolutionary</li>
            <li>Jean Grey</li>
            <li>Mephisto</li>
            <li>Sentry</li>
          </ul>
        </div>
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

export default Comics;
