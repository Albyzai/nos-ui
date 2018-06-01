import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import FontAwesome from 'react-fontawesome';


const Wallet = (props) => (
  <div>
    <h1>Your wallet</h1>
    <p className="large-detail-text">
    <span className="fa fa-key address-icon"></span>
    <span className="bold-text">Address</span>
    <span className="golden">|</span>
    <span id="address_hash">{props.address}</span>
    </p>

    <section id="wallet-graph" className="bar-left-wallet">
      <div className="individual-wallet-wrapper">
        <div className="individual-wallet-box">
          <p className="balance-label"><i class="fa fa-cube wallet-label-icon"></i>NEO Balance</p>
          <p className="balance-amount">{props.neo}</p>
        </div>
        <div className="individual-wallet-box gas-balance last">
          <p className="balance-label"><i class="fa fa-cubes wallet-label-icon"></i>GAS Balance</p>
          <p className="balance-amount">{props.gas}</p>
        </div>
        </div>
        <div className="chart-container"></div>

    </section>
  </div>
)

export default Wallet;
