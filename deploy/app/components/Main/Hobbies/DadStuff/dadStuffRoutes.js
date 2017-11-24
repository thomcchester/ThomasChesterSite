import React from 'react';
import {Route, IndexRedirect, Link} from 'react-router';
import request from 'superagent'
import ComplainingAboutTheWrongTools from './ComplainingAboutTheWrongTools/ComplainingAboutTheWrongTools';
import DadJokes from './DadJokes/DadJokes';
import GoodLengthsOfRope from './GoodLengthsOfRope/GoodLengthsOfRope';
import HomeDepot from './HomeDepot/HomeDepot';
import HurtingOnesSelfWhileTryingToMakeThingsSafer from './HurtingOnesSelfWhileTryingToMakeThingsSafer/HurtingOnesSelfWhileTryingToMakeThingsSafer';
import PenDrawer from './PenDrawer/PenDrawer';
import UnqualifiedFixing from './UnqualifiedFixing/UnqualifiedFixing';


export default (
  <dadStuffRoutes>
    <Route path='/Hobbies/DadStuff/ComplainingAboutTheWrongTools' component={ComplainingAboutTheWrongTools} />
    <Route path='/Hobbies/DadStuff/DadJokes' component={DadJokes} />
    <Route path='/Hobbies/DadStuff/GoodLengthsOfRope' component={GoodLengthsOfRope} />
    <Route path='/Hobbies/DadStuff/HomeDepot' component={HomeDepot} />
    <Route path='/Hobbies/DadStuff/HurtingOnesSelfWhileTryingToMakeThingsSafer' component={HurtingOnesSelfWhileTryingToMakeThingsSafer} />
    <Route path='/Hobbies/DadStuff/PenDrawer' component={PenDrawer} />
    <Route path='/Hobbies/DadStuff/UnqualifiedFixing' component={UnqualifiedFixing} />
  </dadStuffRoutes>
)
