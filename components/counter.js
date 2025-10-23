"use client";
import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Current Sales Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add Sale</button>
        </div>
    );
};