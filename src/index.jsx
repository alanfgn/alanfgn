import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./config/language/i18n";
import App from "./containers/app/App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Router>
        <Suspense fallback={<div />}>
            <App />
        </Suspense>
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
