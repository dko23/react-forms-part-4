// import { useState } from 'react';

// export default function Practice() {
//   const [inputValue, setInputValue] = useState('');
//   const [inputError, setInputError] = useState(null);

//   function handleInputChange(event) {
//     const value = event.target.value;
//     setInputValue(value);

//     if (value.length < 5) {
//       setInputError('Input must be at least 5 characters');
//     } else {
//       setInputError(null);
//     }
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (inputValue.length >= 5) {
//       // submit form
//     } else {
//       setInputError('Input must be at least 5 characters');
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Fruit:
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//       </label>
//       {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// } 



// import { useState } from "react";

// export default function Practice() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = (event) => {
//     setIsChecked(event.target.checked);
//   };

//   return (
//     <form>
//       <label htmlFor="color">
//         <input type="checkbox" name="color" checked={isChecked} onChange={handleChange}/>
//         Blue
//       </label>

//       {isChecked && <div>Blue is selected!</div>}
//     </form>
//   );
// }