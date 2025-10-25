"use client";
import {useState} from "react";

export default function Counter({initialCount = 2, initialStep = 5}){
    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(5);


    return (
        <div>
            <p aria-live="polite">Current Sales Count: {count}</p>
        
            <button onClick={() => setCount(c => c + step)}>Increment</button>
            <br/>
            <button onClick={() => setCount(c => c - step)} disabled={count-step <0}>Decrement</button>
            <br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <br/>
            Custom Step Counter: <input type="number" min="1" value={step} onChange={(e) => {const newValue = Number(e.target.value);
            setStep(Math.max(1, isNaN(newValue) ? 1 : newValue));
          }}/>
        </div>
    );
};

