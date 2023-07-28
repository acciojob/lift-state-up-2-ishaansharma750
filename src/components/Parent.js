import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    let [inputValue, setInputvalue] = useState("")
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <div>{inputValue}</div>
            <Child changeState={setInputvalue} />
        </div>
    )
}

export default Parent