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
            if (i < command.length) {
                commandTextRef.current.innerHTML += command.charAt(i);
                i++;

                setTimeout(typeWriter, randomNumber(100, 150));
            } else {
                setTimeout(() => {
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
                <div className="left-buttons">
                    <span className="close" /> <span className="max" /> <span className="min" />
                </div>
                <div className="right-buttons">
                    {["pt-BR", "en-US"].map(l => (
                        <button
                            className={l === i18next.language ? "selected" : ""}
                            onClick={() => {
                                i18n.changeLanguage(l);
                            }}>
                            {l}
                        </button>
                    ))}
                </div>
            </div>
            <div className="command ">
                <span ref={commandTextRef}></span>
                <span className="blink" ref={blinkRef}></span>
            </div>
            <div className="content">{showChild && children}</div>
            {showChild && (
                <div className="command command-bottom  ">
                    <span>{basePath}</span>
                    <span className="blink">█</span>
                    {otherComands}
                </div>
            )}
        </section>
    );
};

export default Terminal;
