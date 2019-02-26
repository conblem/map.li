import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Map } from "../map";

const Home = () => <div>Home</div>;
const Test = () => <div>Test</div>;

export const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Map} />
      <Route path="/test" component={Test} />
    </div>
  </BrowserRouter>
);
