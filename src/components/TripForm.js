import React, {useState} from "react";
import './TripForm.css';

function TripForm({onAddTrip}) {
const [formData, setFormData] = useState({
    user: "",
    location: "",
});

function handleChange(event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
}

function handleSubmit(event){
    event.preventDefault()

    const newTrip = {
        ...formData,
        };

    fetch("http://localhost:8000/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTrip),
      })
        .then((r) => r.json())
        .then(onAddTrip);
};

    return (

        <div className="box">

            {/* <h2></h2> */}

            <form onSubmit = {handleSubmit}>
               
               <span className="text-center">Add a Trip!</span>

                <div className="input-container">

        <div className= "container">
            <form onSubmit = {handleSubmit} className= "add-trip-form">
            <h2>Add a Trip!</h2>

                <input 
                    type= "text"
                    placeholder= "Your Name Here!"
                    name= "user"
                    value= {formData.user}
                    onChange= {handleChange}

                    required=""

                    className= "input-text"

                />
                <label>NAME</label>
                </div>
               <div className="input-container">
                <input
                    type= "text"
                    placeholder= "Where Are You Going?"
                    name= "location"
                    value= {formData.location}
                    onChange= {handleChange}

                    required=""
                />
                <label>LOCATION</label>
                </div>
            <button className="btn" type="submit">Submit</button>
           
            </form>

                    className= "input-text"
                />
                 <button className="button" type="submit">Submit</button>
            </form>
           

        </div>
    )
}

export default TripForm;