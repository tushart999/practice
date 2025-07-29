import { useState } from "react"

function Radio() {
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("Gurgaon")
    return (
        <div>
            <h1>Select your gender</h1>
            <input type="radio" name="gender" id="male"
                onChange={(event) => setGender("male")
                } />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female"
                onChange={(event) => setGender("female")}
            />
            <label htmlFor="female">Female</label>

            <h1>Selected Gender: {gender}</h1>

            <h3>Select City</h3>
            <select onChange={(event)=>setCity(event.target.value)}>
                <option value="Gurgaon" >Gurgaon</option>
                <option value="Noida" >Noida</option>
                <option value="Delhi">Delhi</option>
            </select>

            <h2>Selected city: {city}</h2>


        </div>
    )
}

export default Radio