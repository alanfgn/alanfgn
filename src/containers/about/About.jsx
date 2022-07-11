import React from "react";
import { useTranslation } from "react-i18next";
import "./About.scss";
import foto from "../../assets/imgs/foto.jpg";

const About = () => {
    const today = new Date();
    const { t } = useTranslation();

    return (
        <div className="about" data-i18n="[html]content.body">
            <div className="container-text">
                <span className="bold">{t("about.title")}</span>
                <div
                    className="text"
                    dangerouslySetInnerHTML={{
                        __html: t("about.text1", {
                            years: parseInt(today.getFullYear()) - 1998,
                        }),
                    }}></div>
            </div>
   
            <img src={foto} />
        </div>
    );
};

export default About;
