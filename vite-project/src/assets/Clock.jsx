import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format the time (hours and minutes only)
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Format the current day (e.g., Monday, Tuesday)
  const formattedDay = time.toLocaleDateString([], { weekday: 'long' });

  return (
    <div className="flex justify-center items-center flex-row gap-2 mb-5">
      <h2 className="text-6xl  font-semibold leading-none">{formattedDay}</h2>
      <h1 className="text-5xl leading-none mt-3 mb-0">{formattedTime}</h1>
    </div>
  );
  
};

export default Clock;
