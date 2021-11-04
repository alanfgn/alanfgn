import React, { useState } from "react";
import Stars from "../../components/stars/Stars";
import Terminal from "../../components/terminal/Terminal";
import routes from "../../config/routes/routes";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.scss";

const App = () => {
    const history = useHistory();
    const [rotation, setRotation] = useState(0);

    return (
        <div className="container">
            <Stars rotation={rotation} />
            <main className="main">
                <Switch>
                    {routes().map((route, i) => (
                        <Route
                            path={route.path}
                            exact
                            key={i}
                            component={() => (
                                <Terminal
                                    command={route.command}
                                    otherComands={
                                        <div className="terminal-buttons">
                                            {routes().map((r, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => {
                                                        history.push(r.path);
                                                        setRotation(r.starRotation);
                                                    }}
                                                    className={`terminal-command-button code ${
                                                        history.location.pathname === r.path ? "selected" : ""
                                                    }`}>
                                                    {r.name}
                                                </button>
                                            ))}
                                        </div>
                                    }>
                                    {route.component}
                                </Terminal>
                            )}
                        />
                    ))}
                </Switch>
            </main>
        </div>
    );
};

export default App;
