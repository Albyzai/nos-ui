import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import { create as createJss } from "jss";
import camelCase from "jss-camel-case";
import globalStyles from "jss-global";
import vendorPrefixer from "jss-vendor-prefixer";
import { JssProvider } from "react-jss";

import FontAwesome from 'react-fontawesome';
import './fontawesome/fontawesome-all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from "./views/App";

const jss = createJss();
jss.use(vendorPrefixer(), camelCase(), globalStyles());

ReactDOM.render(
  <JssProvider jss={jss}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </JssProvider>,
  document.getElementById("root")
);
