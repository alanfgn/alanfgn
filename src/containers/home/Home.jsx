import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./Home.scss";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="card">
            <h1 className="title">
                <span>{t("home.title")}</span>
            </h1>
            <h2 className="subtitle"> {t("home.subtitle")}</h2>
            <div className="contacts">
                <a href="https://github.com/alanfgn" rel="noopener noreferrer" target="_blank" title="Github">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://twitter.com/alanfgn" rel="noopener noreferrer" target="_blank" title="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a
                    href="https://www.linkedin.com/in/alan-souza-fagundes/"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href="mailto:alan.souza.fagundes@gmail.com" rel="noopener noreferrer" target="_blank" title="Email">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
    );
};

export default Home;
