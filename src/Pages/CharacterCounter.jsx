import React, { useState } from "react";

const CharacterCounter = () => {
    const [count, setCount] = useState(0)

    const handleInput = ({target}) =>{
        setCount(target.value.length)
    }
    return(
        <div>
            <h1>Character Count</h1>
            <textarea  id="textInput" onChange={handleInput}></textarea>
            <div>{count}</div>
        </div>
    )
}
export default CharacterCounter