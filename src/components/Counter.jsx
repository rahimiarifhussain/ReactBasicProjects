import { useState } from "react";
import "../style.css"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="counter-container">
            <h1>Counter</h1>
            <div className="container">
                <div className="number">{counter }</div>
                <div className="btns-container">
                    <button className="increment" onClick={()=>setCounter((counter)=>counter+1)} >+</button>
                    <button className="increment"
                        onClick={()=>setCounter((counter)=>counter-1)}
                    >-</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;