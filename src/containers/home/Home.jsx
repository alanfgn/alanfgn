import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin, faSpotify, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as GmailLogo } from "../../assets/imgs/gmail.svg"
import { ReactComponent as MalLogo } from "../../assets/imgs/mal.svg"
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
                    <GmailLogo/>
                </a>

                <a
                    href="https://myanimelist.net/profile/A-lan"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Linkedin">
                    <MalLogo/>
                </a>

                <a
                    href="https://open.spotify.com/user/xj4038gurw520wrkh1wut6a15?si=cb3b06c9f79d4702"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Linkedin">
                    <FontAwesomeIcon icon={faSpotify} />
                </a>

                <a
                    href="https://www.hackerrank.com/alanfgn"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Linkedin">
                    <FontAwesomeIcon icon={faHackerrank} />
                </a>
{/* 

                <a
                    href="https://www.goodreads.com/alanfgn"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Linkedin">
                    <FontAwesomeIcon icon={faGoodreads} />
                </a> */}

                
            </div>
        </div>
    );
};

export default Home;
