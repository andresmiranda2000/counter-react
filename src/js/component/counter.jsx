import React, { useState, useEffect } from 'react';

const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    let unit = seconds % 10;
    let ten = Math.trunc((seconds / 10) % 10);
    let hundred = Math.trunc((seconds / 100) % 10);
    let thousand = Math.trunc((seconds / 1000) % 10);
    let tenThousand = Math.trunc((seconds / 10000) % 10);
    let hunThousand = Math.trunc((seconds / 100000) % 10);

    return (
        <div className="app d-flex justify-content-center">
            <div className="icon box"><i className="far fa-clock"></i></div>
            <div className="counter box">{hunThousand}</div>
            <div className="counter box">{tenThousand}</div>
            <div className="counter box">{thousand}</div>
            <div className="counter box">{hundred}</div>
            <div className="counter box">{ten}</div>
            <div className="counter box">{unit}</div>
        </div>
    );
};

export default SecondsCounter;
