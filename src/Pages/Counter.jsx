// import React, { useState } from "react";

// function Counter(){

//     const [counter, setCounter] = useState(0)
//     function incValue(){
//         setCounter(counter +1)
//     }
//     function decValue(){
//         setCounter(counter -1)
//     }
//     function resetValue(){
//         setCounter(0)
//     }

//     return(
//         <div>
//             <h1>Counter : {counter}</h1>
//             <button onClick={incValue}>+</button>
//             <button onClick={resetValue}>=</button>
//             <button onClick={decValue}>-</button>
//         </div>
//     )
// }
// export default Counter

import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=> setCounter(counter +1)}>Increment</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={()=> setCounter(counter -1)}>Decrement</button>
        </div>
    )
}
export default Counter;