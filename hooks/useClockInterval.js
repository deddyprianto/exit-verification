import { useEffect, useState } from 'react';

export const useClockInterval = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every 1 minute (60,000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Format the time as per your requirement
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return formattedTime;
};
