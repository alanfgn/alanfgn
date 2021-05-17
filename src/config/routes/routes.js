import React from "react";
import Home from "../../containers/home/Home";
import About from "../../containers/about/About";
import Projects from "../../containers/projects/Projects";
import { useTranslation } from "react-i18next";


export default () => {
    const { t } = useTranslation();

    return [
        {
            path: "/",
            name: t("menu.home"),
            command: "whoami",
            starRotation: 0,
            component: <Home />,
        },
        {
            path: "/about",
            name: t("menu.about"),
            command: "cat about.txt",
            starRotation: 65,
            component: <About />,
        },
        {
            path: "/projects",
            name: t("menu.projects"),
            command: "ls projects/",
            starRotation: 100,
            component: <Projects />,
        },
    ];
};
