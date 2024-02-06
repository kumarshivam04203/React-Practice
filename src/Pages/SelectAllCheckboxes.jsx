// import React, { useState } from "react";

// function CheckboxList() {
//   const [checkboxes, setCheckboxes] = useState([
//     { id: 1, label: "Dogs", checked: false },
//     { id: 2, label: "Cats", checked: false },
//     { id: 3, label: "Cows", checked: false },
//     { id: 4, label: "Deers", checked: false },
//   ]);

//   function handleCheckbox(id) {
//     setCheckboxes((prevCheckboxes) =>
//       prevCheckboxes.map((checkbox) =>
//         checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
//       )
//     );
//   }

//   function selectAllBoxes() {
//     setCheckboxes((prevCheckboxes) =>
//       prevCheckboxes.map((checkbox) => ({ ...checkbox, checked: true }))
//     );
//   }

//   return (
//     <div>
//       <h1>Checkbox List</h1>
//       {checkboxes.map((checkbox, index) => (
//         <label key={checkbox.id}>
//           <input
//             data-testid={`checkbox-${index + 1}`}
//             type="checkbox"
//             checked={checkbox.checked}
//             onChange={() => handleCheckbox(checkbox.id)}
//           />
//           {checkbox.label}
//         </label>
//       ))}
//       <button onClick={selectAllBoxes}>Select All</button>
//     </div>
//   );
// }

// export default CheckboxList;

// import React, { useState } from "react";

// function CheckboxList(){
//     const [checkboxes, setCheckboxes] = useState([
//         {id: 1, label:"Dogs", checked: false},
//         {id: 2, label:"Cats", checked: false},
//         {id: 3, label:"Cows", checked: false},
//         {id: 4, label:"Deers", checked: false},
//     ])

//     function handleCheckbox(id){
//         setCheckboxes((preCheckBoxes) => 
//             preCheckBoxes.map((checkbox) => 
//             checkbox.id === id ? {...checkbox, checked: !checkbox.checked} : checkbox))
//     }
//     function selectAllBoxes(){
//         setCheckboxes((preCheckBoxes)=>preCheckBoxes.map((checkbox)=>({...checkbox, checked:true})))
//     }

//     return(
//         <div>
//             <h1>CheckBox List</h1>
//             {checkboxes.map((checkbox, index)=>(
//                 <labe key={checkbox.id}>
//                     <input type="checkbox" 
//                         checked={checkbox.checked}
//                         onChange={()=> handleCheckbox(checkbox.id)}
//                     />
//                     {checkbox.label}
//                 </labe>
//             ))}
//             <button onClick={selectAllBoxes}>selectAll</button>
//         </div>
//     )
// }

// export default CheckboxList;


import React, { useState } from "react";

function CheckboxList(){
    const [checkboxes, setCheckboxes] = useState([
        {id: 1, label: "Red", checked: false},
        {id: 2, label: "Yellow", checked: false},
        {id: 3, label: "Blue", checked: false},
        {id: 4, label: "Green", checked: false},
    ])
    
    function handleCheckbox(id){
        setCheckboxes((preCheckbox) => 
        preCheckbox.map((checkbox)=>
            checkbox.id === id ? {...checkbox, checked: !checkbox.checked} : checkbox
        ))
    }
    function selectAllBox(){
        setCheckboxes((preCheckbox) => 
            preCheckbox.map((checkbox) => ({...checkbox, checked:true}))
        )
    }

    return(
        <div>
            <h1>Checkbox List</h1>
            {checkboxes.map((checkbox, index)=>(
                <label key={checkbox.id}>
                    <input type="checkbox" 
                        onChange={() => handleCheckbox(checkbox.id)}
                        checked = {checkbox.checked}
                    />
                    {checkbox.label}
                </label>
            ))}
            <button onClick={selectAllBox}>Select All</button>
        </div>
    )
}

export default CheckboxList