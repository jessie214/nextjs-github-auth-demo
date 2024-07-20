import { useEffect,useState } from "react";

interface countDownProps{
  time: number;
  onEnd:() => void;
}
const CountDown = (props: countDownProps) => {
  const { time, onEnd } = props;
  const [count,setCount] = useState(time || 60)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timerId);
          onEnd && onEnd();
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    // clear the timer
    return () => clearInterval(timerId);
  }, [time]);
  return (
    <div>{count}</div>
  );
};
export default CountDown; 