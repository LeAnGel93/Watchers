import React, { useState, useEffect } from "react";
// import "./Countdown.css";

const CuentaAtras = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    let countDownDate = new Date("February 22, 2023 14:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("Enhorabuena crack, eres un junior, que le den a valdebebas");
      }
    }, 1000);
  }, []);

  return (
    <div className="countdown">
      <h2>{time}</h2>
    </div>
  );
};

export default CuentaAtras;