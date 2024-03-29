import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./About.scss";
import koiTxtFile from "../../assets/koi-file.txt";

const About = () => {
    const today = new Date();
    const { t } = useTranslation();

    const koiRef = useRef(null);

    const [asciiFrames, setAsciiFrames] = React.useState([]);

    useEffect(() => {
        fetch(koiTxtFile)
            .then((r) => r.text())
            .then((text) => {
                setAsciiFrames(text.split("END\n"));
            });
    }, [setAsciiFrames]);

    useEffect(() => {
        var i = 120;

        if (!koiRef) return;

        const animateKoi = () => {
            if (!koiRef.current || !asciiFrames) return;
            if (i >= asciiFrames.length) {
                i = 0;
                setTimeout(animateKoi, 400);
                return;
            }

            // console.log(asciiFrames[i]);
            koiRef.current.innerHTML = asciiFrames[i].replace(/</g, "&lt;");
            i++;
            setTimeout(animateKoi, 400);
        };

        setTimeout(animateKoi, 400);
    }, [asciiFrames, koiRef]);

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
            <div className="pond">
                <div ref={koiRef} className="koi"></div>
            </div>
        </div>
    );
};

export default About;
