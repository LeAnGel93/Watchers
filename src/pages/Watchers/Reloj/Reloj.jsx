import React, { useEffect, useState } from 'react'

function Reloj() {
  const [Clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString())
    }, 1000);
  }, []);

  return (
    <div>
      <h2>DigitalClockPage</h2>
      <h3>{Clock}</h3>
    </div>
  )
}

export default Reloj