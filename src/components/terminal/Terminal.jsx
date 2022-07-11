import React, { useRef, useEffect, useState } from "react";
import { randomNumber } from "../../utils/util";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./Terminal.scss";

const Terminal = ({ command, children, maxWidth, height, otherComands }) => {
    const commandTextRef = useRef(null);
    const blinkRef = useRef(null);
    const [showChild, setShowChild] = useState(false);
    const { i18n } = useTranslation();

    const basePath = "alan ~/ > ";

    useEffect(() => {
        var i = 0;

        if (!commandTextRef) return;

        commandTextRef.current.innerHTML = basePath;
        blinkRef.current.innerHTML = "█";
        setShowChild(false);

        const typeWriter = () => {
            if (!commandTextRef.current) return;

            if (i < command.length) {
                commandTextRef.current.innerHTML += command.charAt(i);
                i++;

                setTimeout(typeWriter, randomNumber(80, 110));
            } else {
                setTimeout(() => {
                    if (!commandTextRef.current) return;
                    blinkRef.current.innerHTML = "";
                    setShowChild(true);
                }, randomNumber(200, 220));
            }
        };

        setTimeout(typeWriter, randomNumber(150, 250));
    }, [commandTextRef, blinkRef, command]);

    return (
        <section className="terminal">
            <div className="header">
                <div className="left-buttons">{otherComands}</div>
                <div className="right-buttons">
                    <div className="right-buttons-container">
                        {["pt-BR", "en-US"].map((l, i) => (
                            <button
                                key={i}
                                className={l === i18next.language ? "selected" : ""}
                                onClick={() => {
                                    i18n.changeLanguage(l);
                                }}>
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="command ">
                <span ref={commandTextRef}></span>
                <span className="blink" ref={blinkRef}></span>
            </div>
            <div className={`content ${!showChild && "none"}`}>{children}</div>
            <div className={`command command-bottom ${!showChild && "none"} `}>
                <span>{basePath}</span>
                <span className="blink">{"█ "}</span>
            </div>
        </section>
    );
};

export default Terminal;
