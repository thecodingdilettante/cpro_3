"use client";
import {useState} from "react";

export default function Counter({initialCount = 0, initialStep = 1}){
    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(1);


    return (
        <div>
            <p aria-live="polite">Current Sales Count: {count}</p>
        
            <button onClick={() => setCount(count + step)}>Increment</button>
            <br/>
            <button onClick={() => setCount(count - step)} disabled={count-step <0}>Decrement</button>
            <br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <br/>
            Custom Step Counter: <input type="number" min="1" value={step} onChange={(e) => {const newValue = Number(e.target.value);
            setStep(Math.max(1, isNaN(newValue) ? 1 : newValue));
          }}/>
        </div>
    );
};

