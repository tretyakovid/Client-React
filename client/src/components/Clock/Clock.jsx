import React, { useState, useEffect } from "react";

import "./Clock.css";

export default function Clock() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  function getTime() {
    var date = new Date(),
      hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
      minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
      seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return { hours, minutes, seconds };
  }

  return (
    <div className="time">
      <span> {time.hours + ":" + time.minutes + ":" + time.seconds}</span>
    </div>
  );
}
