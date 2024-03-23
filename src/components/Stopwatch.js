import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalRef=setInterval(() => {
      console.log("A")

      setCount((prevCount) => {

        return prevCount + 1;
      });
    }, 1000);

    return ()=>
    {
      //will unmount
      clearInterval(intervalRef)
    }
  }, []);

  return (
    <div>
      <h1>StopWatch</h1>
      {count}
    </div>
  );
};

export default Stopwatch;
