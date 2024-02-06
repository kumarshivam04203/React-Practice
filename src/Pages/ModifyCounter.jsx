// import React, { useEffect } from "react";
// import { useState } from "react";

// const Counters = () =>{
//     const [count, setCount] = useState(()=>{
//         // The value obtained from local storage is assigned to the variable storedCount
//         const storedCount = localStorage.getItem('count');
//         // return the function as ternary operator tocheck the truthy value and conver the integer
//         return storedCount ? parseInt(storedCount) : 0
//     })
// // Inside the effect, localStorage.setItem('count', count.toString()) stores the current count in local storage
//     useEffect(()=>{
//         localStorage.setItem('count',count.toString())
//     },[count])
//     return(
//         <div>
//             <h2>Counter: {count}</h2>
//             <button onClick={()=> setCount(count + 1)}>+</button>
//             <button onClick={()=> setCount(count - 1)}>-</button>
//         </div>
//     )
// }
// export default Counters

import React, { useEffect, useState } from "react";

function Counters(){
    const[count, setCount] = useState(()=>{
        const storeValue = localStorage.getItem('count');
        return storeValue ? parseInt(storeValue) : 0
    })
    useEffect(()=>{
        localStorage.setItem('count', count.toString())
    },[count])
   
    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count +1)}>+</button>
            <button onClick={()=>setCount(count -1)}>-</button>
        </div>
    )
}

export default Counters;