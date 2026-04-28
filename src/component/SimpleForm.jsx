
import {useState} from 'react'

function SimpleForm() {
  const [name,setName]=useState(" ");
  const [email,setEmail]=useState(" ");
const handleChange=(e)=>{
    e.preventDefault()
    console.log(name)
    console.log(email)
  }
  return (
    <form onSubmit={handleChange}>
        <h2>Welcome To the form</h2>
        <label >Name:</label>
        <input type="text" name="" id="" value={name} onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <br />
        <label >Password</label>
        <input type="text" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <br />
        <button type='submit'>Submite</button>
    </form>
  )
}

export default SimpleForm
