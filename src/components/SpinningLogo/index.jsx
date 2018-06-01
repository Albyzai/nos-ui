import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import nosLogo from "./../../assets/neotrader-logo.png";

const styles = {
  logoContainer: {
    display: "block",
    maxWidth: "200px",
    margin: "5px auto",
    position: "relative"
  },
  nosLogo: {
    width: "75%",
    margin: "32px auto 0"
  }
};

const SpinningLogo = ({ classes }) => (
    <img src={nosLogo} className={classes.nosLogo} alt="nOS logo" key="nosLogo" />
);

SpinningLogo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(SpinningLogo);
