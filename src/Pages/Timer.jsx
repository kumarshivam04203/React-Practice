// import React, { useEffect, useState } from "react";


// function Timer(){

//     const[min, setMin] = useState(0)
//     const[sec, setSec] = useState(0)

//     let [timeRunning, setTimerRunning] = useState(false);

//     useEffect(()=>{
//         if(timeRunning){
//             if(sec <= 60){
//                 setTimeout(()=>{
//                     setSec(sec +1);
//                 }, 1000);
//             }else{
//                 setSec(0);
//                 setMin(min +1)
//             }
//         }
//     })

//     return(
//         <div>
//             <h1>Time</h1>
//             <p>{min} Minit {sec} Second</p>
//             <button onClick={()=>setTimerRunning(true)}>Start</button>
//             <button onClick={() => setTimerRunning(false)}>Stop</button>
//             <button onClick={()=> {
//                 setTimerRunning(false)
//                 setMin(0)
//                 setSec(0)
//             }}>reset</button>
//         </div>
//     )
// }
// export default Timer

// import React, { useEffect, useState } from "react";

// function Timer(){
//     const [min, setMin] = useState(0);
//     const [sec, setSec] = useState(0);

//     const [timeRunning, setTimerRunning] = useState(false);
//     useEffect(()=>{
//         if(timeRunning){
//             if(sec <= 60){
//                 setTimeout(()=>{
//                     setSec(sec + 1)
//                 }, 1000)
//             }else{
//                 setSec(0)
//                 setMin(min +1)
//             }
        
//         }
//     })

//     return(
//         <div>
//             <h1>Timer</h1>
//             <p>{min} minits {sec} Seconds</p>
//             <button onClick={()=> setTimerRunning(true)}>Start</button>
//             <button onClick={()=> setTimerRunning(false)}>Stop</button>
//             <button onClick={()=>{
//                 setMin(0)
//                 setSec(0)
//                 setTimerRunning(false)
//             }}>Reset</button>
//         </div>
//     )
// }

// export default Timer;


import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [min, setMin] = useState(0);
    const[sec, setSec] = useState(0);
    const [timeRunning, setTimeRunning] = useState(false)

    useEffect(()=>{
        if(timeRunning){
            if(sec <= 60){
                setTimeout(()=>{
                    setSec(sec +1)
                }, 1000)
            }else{
                setSec(0);
                setMin(min +1)
            }
        }
    })
  return (
    <div>
        <h1>Timer</h1>
        <p>{min} minits {sec} second</p>
        <button onClick={() => setTimeRunning(true)}>Start</button>
        <button onClick={()=> setTimeRunning(false)}>Stop</button>
        <button onClick={()=> {
            setSec(0);
            setMin(0);
            setTimeRunning(false)
        }}>Reset</button>
    </div>
  )
}
