import { useEffect, useState } from "react";

function HelloEffect() {
  const [count, setCount] = useState(0);

  const useEffectCallback = () => {
    console.log(`Count has changed to ${count}`);
  };

  useEffect(useEffectCallback, [count]);

  return (
    <>
      <p> Count : {count}</p>
      <button onClick={() => setCount(count + 1)}> Increase </button>
    </>
  );
}

export default HelloEffect;
