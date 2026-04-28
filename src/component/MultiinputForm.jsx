import React, { useState } from 'react'

function MultiinputForm() {

    const arr=[1,2,3];
    const arr2=[...arr,5,6,7]
    console.log(arr2);
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        age:""
    })
    const handleSubmit=(e)=>{
         e.preventDefault()
         console.log(formData)
    }
    const handleChange=(e)=>{
        const {name,value}= e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
  return (
   <form onSubmit={handleSubmit}>
      <h1>Welcome to the Welcome Form</h1>
      <input type="text" name='name'
       placeholder='Enter the name'value={formData.name}
       onChange={handleChange}
        />
      <input type="text" name="email" id=""
       placeholder='email' 
       onChange={handleChange}
       value={formData.email}/>
      <input type="text" name="age" id="" 
      onChange={handleChange}
      placeholder='age'value={formData.age} />
      <button type='submit'>Submit</button>
   </form>
  )
}

export default MultiinputForm
