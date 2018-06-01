import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import Routes from './../../routes';

import Header from "./../../components/Header";
import NOSActions from "./../../components/NOSActions";
import { str2hexstring, int2hex, hexstring2str } from '@cityofzion/neon-js/src/utils'
import { injectNOS } from "../../nos";

const styles = {
  "@import": "https://fonts.googleapis.com/css?family=Source+Sans+Pro",
  "@global html, body": {
    fontFamily: "Source Sans Pro",
    margin: 0,
    padding: 0,
  },
  App: {
    textAlign: "center"
  },
  intro: {
    fontSize: "large"
  },
  lineBreak: {
    width: "75%",
    borderTop: "1px solid #333333",
    margin: "32px auto"
  }
};


class App extends React.Component{
  constructor(props){
    super(props)
    const { nos } = this.props;
    this.state = {
      address: "",
      neoBalance: 0,
      gasBalance: 0
    };
  }

  async componentDidMount(){
    const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";

    const neoAsset = {asset: neo};
    const gasAsset = {asset: gas};

    const address = await this.props.nos.getAddress();
    const neoBalance = await this.props.nos.getBalance(neoAsset);
    const gasBalance = await this.props.nos.getBalance(gasAsset);


    this.setState({ address, neoBalance, gasBalance });

  }

  handleTestInvoke = async (scriptHash, operation, args) =>
    alert(hexstring2str(await this.props.nos.testInvoke(scriptHash, operation, args)));


  render(){

    // assets
    const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";

    // (test) Invoke
    const scriptHash = "7eb11b249065d011e73885e169f080070660448b";
    const operation = "deposit";
    const args = [str2hexstring('AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y'), gas, '20'];

    const { classes } = this.props;

    return(
      <div className={classes.App}>
        <Header address={this.state.address} onClick={() => this.handleTestInvoke(scriptHash, operation, args)} />
        <Routes address={this.state.address} neo={this.state.neoBalance} gas={this.state.gasBalance} />
        <hr className={classes.lineBreak} />
      </div>
    )
  }
}





App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectNOS(injectSheet(styles)(App));
