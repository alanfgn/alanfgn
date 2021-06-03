import React, { useState } from "react";
import Stars from "../../components/stars/Stars";
import Terminal from "../../components/terminal/Terminal";
import routes from "../../config/routes/routes";
import { Route, Switch, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.scss";

const App = () => {
    const { t } = useTranslation();

    const history = useHistory();
    const [rotation, setRotation] = useState(0);

    return (
        <div className="container">
            <header>
                <meta property="og:title" content={t("tumbnail-title")} />
                <meta property="og:description" content={t("tumbnail-description")} />
                <meta property="og:url" content="https://alanfgn.vercel.app/" />
                <meta property="og:type" content="website" />
                {/* <meta property="og:image" itemprop="image" content="%PUBLIC_URL%/favicon.ico" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" /> */}
                <link rel="icon" href="image/favicon.ico" type="%PUBLIC_URL%/favicon.ico" />
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </header>

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
                                                    className={`terminal-command-button ${
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
