import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ startDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date(startDate);
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className="container">
        <div className="contador">
          <h3>Juntos a</h3>
          <p>{timeLeft.days} dias {timeLeft.hours} horas {timeLeft.minutes} minutos {timeLeft.seconds} segundos</p>
          <div className="fim">
            <h3>Te amo gatinha ❤️</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;