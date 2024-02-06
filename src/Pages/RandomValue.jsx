// import React, { useState } from "react";

// const quotes = ['fjhhjk','hhfdjhh','hello', 'my name is','uiwregfjh','kese ho','me theek hu','goodbye']



// const RandomValue= ()=> {
//     const[quote, setquote] = useState(quotes[0])
//     function generateQuotes(){
//         const randomValue = quotes[Math.floor(Math.random() * quotes.length)]
//         setquote(randomValue);
//     }
//     return(
//         <div>
//             <h1>RandomValue</h1>
//             <p>{quote}</p>
//             <button onClick={generateQuotes}>quotes</button>
//         </div>
//     )
// }
// export default RandomValue

import React, { useState } from "react";

const quotes = ['hdksfhk','fjhwgef','gqra','etgwtg','gr',' cwxf','34','34r']

const RandomValue = () => {
    const [quote, setQuote] = useState(quotes[0])
    function generateValue(){
        const value = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(value)
    }
    return(
        <div>
            <h1>Random Value</h1>
            <h3>{quote}</h3>
            <button onClick={generateValue}>generate value</button>
        </div>
    )
}

export default RandomValue