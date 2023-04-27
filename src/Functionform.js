import React, { useState } from 'react';

export default function Form() {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        password:''
    })


    function handleChange(e) {
        const { name, value } = e.target
        setForms((prevForms) => ({ ...prevForms, [name]: value }))
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(forms)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={forms.name}
                    onChange={handleChange}
                />
                <br />
                <label>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={forms.email}
                    onChange={handleChange}
                />
                <br />
                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={forms.password}
                    onChange={handleChange}
                />

                

                <button type="submit">Submit</button>
            </form>



           
        </div>
    );
}
















































/////////////////////////////////////////////////////
// import React, { useState } from 'react';

// export default function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function handleChange(e) {
//     setName(e.target.value);
//   }

//   function handleEmail(e) {
//     setEmail(e.target.value);
//   }

//   function handlePassword(e) {
//     setPassword(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     // You can submit the form data to a server or update the state in a different way
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={handleChange}
//         />
//         <br />
//         <label>Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleEmail}
//         />
//         <br />
//         <label>Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={handlePassword}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
/////////////////////////////////Main//////////////////////////////

// import React, { Component } from 'react'

// export class Form extends Component {
 
//     constructor(props) {
//         super(props)
//         this.state = { companyName: '' }
       
//  }
 
//  change=(e) => {
//     this.setState({ companyName: e.target.value })
// }
 

//     render() {
//     return (
//         <form>
//             <input 
//             type="text" 
//                 placeholder="Enter Company Name" 
//                 value={this.state.companyName}
//                 required 
//                 onChange={this.change}
//           />
//           <button>Go!</button>
//           </form>
//     )
//   }
// }
