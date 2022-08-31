import { useEffect, useState } from 'react';

const useCountdown = () => {
  const [countDown, setCountDown] = useState(60000 * 2);
  const resetTime = () => {
    setCountDown(60000 * 2);
  };
  useEffect(() => {
    if (countDown === 0) return;
    const interval = setInterval(() => {
      setCountDown(countDown - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown]);
  return [...getReturnValues(countDown), resetTime];
};

const getReturnValues: any = (countDown:number) => {
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  let secondString = seconds < 10 ? '0' + seconds : seconds.toString();
  return [minutes.toString(), secondString];
};

export { useCountdown };
