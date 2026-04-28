import React from 'react'

import { useRef } from 'react'

function Uncontrolled() {
    const nameRef=useRef()
    const emailRef=useRef()

    const handleChange=(e)=>{
         e.preventDefault()
         console.log("Name Ref",nameRef.current.value)
         console.log("Email ref",emailRef.current.value)

    }
  return (
    <>
      <form action="" onSubmit={handleChange}>
       <h1>This is uncotroll form</h1>
       <input type="text" ref={nameRef} placeholder='Enter the name' />
       <br />
       <input type="text" ref={emailRef} name="" id="" />
       <br />
       <button type='submite'>Click Me</button>
      </form>
    </>
  )
}

export default Uncontrolled
