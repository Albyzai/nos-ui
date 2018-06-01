import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './../components/home';
import Wallet from './../components/wallet';

const Routes = (props) => (
  <Switch  >
    <Route exact path='/' component={Home}/>
    <Route exact path='/wallet' render={()=><Wallet  address={props.address} neo={props.neo} gas={props.gas} />}/>
  </Switch>
)

export default Routes;
