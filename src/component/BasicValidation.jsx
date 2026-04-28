import React, { useState } from 'react'

const BasicValidation = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const handleChange = (e) => {
        e.preventDefault();
        if (!name || !email) {
           setError("Please fill all the field")
        }
        else{
            setError(" ")
            alert("Form DOne")
            console.log("Form SucessFully Submit",{name,email})
            setEmail("")
            setName("")
        }
    }
    return (

        <>
            <form action="" onSubmit={handleChange}>
                <h1>Welcome to Handle CHange Event </h1>
                <input type="text"
                    placeholder='Enter you value '

                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <br />
                <input
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    type="email" name="" id=""
                    placeholder='Enter the Email'
                    value={email} />
                <button type='submit'>Submit</button>
            </form>
            {error && <p>{error}</p>}
        </>
    )
}

export default BasicValidation
