import React, { useState } from 'react'

function AdvanceForm() {
    const [formData, setFormData] = useState({
        gender: " ",
        country: " ",
        agree: false

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    const handleChange=(e)=>{

        const {name,type,value,checked}=e.target;
        setFormData((prev)=>({
         ...prev,
         [name]:type==="checkbox"?checked:value

        }))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Male
                    <input type="radio"
                        name="gender"
                        id=""
                        value={"Male"}
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                    />

                </label>
                <label>
                    <input type="radio" name="gender" value={"Female"}
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                    />
                    Female
                </label>
                <br />
                <label>
                    Country
                    <select name="country" id="" 
                    value={formData.country}
                    onChange={handleChange}
                    >
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="LonDon">LonDon</option>
                    </select>
                </label>
                <br />
                <label >
                    <input type="checkbox" checked={formData.agree} name='agree' onChange={handleChange} />
                    I am Agree to term and conitions
                </label>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default AdvanceForm
