import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <p className="counter"> Count: {count} </p>
            <button onClick={increase}> Increase</button>

            <button onClick={decrease}> Decrease</button>

            <button onClick={reset}> Reset </button>
             
        </>
    )
}

export default Counter;