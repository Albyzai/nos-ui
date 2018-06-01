import React from "react";
import  { NavLink } from 'react-router-dom';
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import SpinningLogo from "./../SpinningLogo";

const styles = {
  header: {
    padding: "24px",
    marginBottom: "32px"
  },
  title: {
    fontSize: "1.5em"
  }
};



const Header = (props) => (

  <nav id="navigation">
    <div className="logo-wrapper">
    <NavLink to='/'><SpinningLogo /></NavLink>
    </div>
    <div className="nav-wrapper">
      <ul className="nav-links-list">
        <li className="remove-margin-left"><NavLink exact activeClassName="active" to={'/'}>Home</NavLink></li>
        <li><a
          onClick={props.onClick}
        >
          Send
        </a></li>
        <li><NavLink to={`/wallet`} activeClassName="active" >Wallet</NavLink></li>
      </ul>
    </div>
  </nav>

);

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Header);
