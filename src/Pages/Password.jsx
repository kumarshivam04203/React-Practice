// import React, { useState } from "react";



// function Password(){
//     const [password, setPassword] = useState(true)
//     function handlePasswd(){
//         setPassword(!password)
//     }
//     return (
//         <div>
//             <h1>Passwd</h1>
//             <input type={password ? "password" : "text"} placeholder="enter passwd"/>
//             <button onClick={handlePasswd}>{password ? "show" : "hide"}</button>
//         </div>
//     )
// }
// export default Password;


import React, { useState } from "react";

function Password(){
    const [password, setPassword] = useState(true);
function handlePassword(){
    setPassword(!password)
}
    return(
        <div>
            <h1>PASSWORD</h1>
            <input type={password ? "password" : "text"} />
            <button onClick={handlePassword}>{password ? "show" : "hide"}</button>
        </div>
    )
}
export default Password;