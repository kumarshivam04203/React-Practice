import React, { useState } from "react";

function MultipleInput(){

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
        
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Enter Your Name:
                    <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
                </label>

                <label htmlFor="">
                    Enter youy age:
                    <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
                </label>

                <input type="submit" />
            </form>
        </div>
    )
}
export default MultipleInput