import React from 'react';
import {Route, IndexRedirect, Link} from 'react-router';
import request from 'superagent'
import DadStuff from './DadStuff/DadStuff';
import Nerd from './Nerd/Nerd';
import Other from './Other/Other';
import Sports from './Sports/Sports'
import dadStuffRoutes from './DadStuff/dadStuffRoutes'
import nerdRoutes from './Nerd/nerdRoutes'
import otherRoutes from './Other/otherRoutes'
import sportsRoutes from './Sports/sportsRoutes'

export default (
  <hobbyRoutes>
    <Route path='/Hobbies/DadStuff' component={DadStuff} />
    <Route path='/Hobbies/Nerd' component={Nerd} />
    <Route path='/Hobbies/Other' component={Other} />
    <Route path='/Hobbies/Sports' component={Sports} />
    {dadStuffRoutes}
    {nerdRoutes}
    {otherRoutes}
    {sportsRoutes}
  </hobbyRoutes>
)
