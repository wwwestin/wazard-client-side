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
        <div className= "container">
            <form onSubmit = {handleSubmit} className= "add-trip-form">
            <h2>Add a Trip!</h2>
                <input 
                    type= "text"
                    placeholder= "Your Name Here!"
                    name= "user"
                    value= {formData.user}
                    onChange= {handleChange}
                />
                <input
                    type= "text"
                    placeholder= "Where Are You Going?"
                    name= "location"
                    value= {formData.location}
                    onChange= {handleChange}
                />
            </form>
            <button className="button" type="submit">Submit</button>
        </div>
    )
}

export default TripForm;