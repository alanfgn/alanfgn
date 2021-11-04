import React from "react";
import { useTranslation } from "react-i18next";
import "./Projects.scss";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="projects" id="portfolio">
            <div className="cardlist">
                <a
                    href="https://github.com/alanfgn/text-analysis-political-news"
                    rel="noopener noreferrer"
                    target="_blank">
                    <div className="item">
                        <span className="title">{t("projects.list.antp.title")}</span>
                        {t("projects.list.antp.description")}
                        <div className="chips">
                            <span className="chip"> {t("projects.chips.python")} </span>
                            <span className="chip"> {t("projects.chips.nlp")} </span>
                            <span className="chip"> {t("projects.chips.text-mining")} </span>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/alanfgn/Static-Checker" rel="noopener noreferrer" target="_blank">
                    <div className="item">
                        <span className="title">{t("projects.list.static.title")}</span>
                        {t("projects.list.static.description")}
                        <div className="chips">
                            <span className="chip"> {t("projects.chips.java")} </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Projects;
