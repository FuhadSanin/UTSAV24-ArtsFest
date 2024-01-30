import "./Countdown.css";
import React, { useState, useEffect } from "react";

function Countdown() {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateCountdown = () => {
            const targetDate = new Date("February 28, 2024 09:00:00");
            const currentDate = new Date();

            const timeDifference = targetDate - currentDate;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        };

        const interval = setInterval(calculateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Countdown">
            <div className="ctd">
                    <div className="ctd-cont">
                        <p className="ctd-p">{countdown.days}</p>
                        <p className="ctd-cont-p">DAYS</p>
                    </div>
                    <p className="ctd-colon">:</p>
                    <div className="ctd-cont">
                        <p className="ctd-p">{countdown.hours}</p>
                        <p className="ctd-cont-p">HOURS</p>
                    </div>
                    <p className="ctd-colon">:</p>
                    <div className="ctd-cont">
                        <p className="ctd-p">{countdown.minutes}</p>
                        <p className="ctd-cont-p">MINUTES</p>
                    </div>
                    <p className="ctd-colon">:</p>
                    <div className="ctd-cont">
                        <p className="ctd-p">{countdown.seconds}</p>
                        <p className="ctd-cont-p">SECONDS</p>
                    </div>
            </div>
        </div>
    );
}

export default Countdown;
