// import React, { useState } from "react";
// import "./index.css"
// const App = () => {

//   const [text , setText] = useState();

//   const [val , setVal] = useState();

//   function handleChange(event)
//   { 
//       setText(event.target.value);
//   }

//   function changeTitle() {
//       setVal(text);
//   }

// return(
// <div>
// <h1> Hello {val}</h1>
// <input onChange={handleChange} value={text} type="text"  placeholder="Enter Your Name"  />
// <button onClick={changeTitle}> Click Me </button>
// </div>
// )};
// export default App;


import React, { useState } from "react";
import "./index.css"
const App = () => {

  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email:""
  });

  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   const name = event.target.name;

  //   setFullName((preValue)=>{
  //     if (name === "fname") {
  //       return {
  //       fname:newValue,
  //       lname:preValue.lname,
  //       email:preValue.email
  //     }
  //     } else if (name === "lname")
  //     {
  //       return {
  //         fname:preValue.fname,
  //         lname:newValue,
  //         email:preValue.email
  //       }
        
  //     }
  //      else if (name === "email")
  //     {
  //       return {
  //         fname:preValue.fname,
  //         lname:preValue.lname,
  //         email:newValue
  //       }
        
  //     }
  //   event.preventDefault();      
  //   })
  // }
          // OR WE CAN SIMPLY WRITE
  
    function handleChange(event) {
    const {name, value} = event.target;
    setFullName((preValue)=>{
      
      event.preventDefault();
      return({...preValue,[name]:value})
      
    })
          
  }

  return (
    <form>
      <div>
        <h1> Hello {fullName.fname} {fullName.lname} </h1>
        <h2>{fullName.email}</h2>
        <input 
        name="fname" 
        onChange={handleChange}
        value={fullName.fname} 
        type="text" 
        placeholder="Enter Your FName" />
        
        <input 
        name="lname" 
        onChange={handleChange} 
        value={fullName.lname} 
        type="text" 
        placeholder="Enter Your LName" />
        
        <input 
        name="email" 
        onChange={handleChange} 
        value={fullName.email} 
        type="email" 
        placeholder="Enter Your Email" />
        
        <button > Submit </button>
      </div>
    </form>
  )
};
export default App;

