import { hot } from "react-hot-loader/root";
import { render } from "react-dom";
import React from "react";

const App = () => <h1>Test 3213</h1>;
const Entry = process.env.NODE_ENV === "development" ? hot(App) : App;
render(<Entry />, document.body);
