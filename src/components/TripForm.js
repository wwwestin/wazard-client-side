import React, {useState} from "react";

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
        user: formData.user,
        location: formData.location,
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
        <div className="trip-form">
            <h2>Add a Trip!</h2>
            <form onSubmit = {handleSubmit}>
                <input 
                    type= "text"
                    placeholder= "Your Name Here!"
                    name= "user"
                    value= {formData.user}
                    onChange= {handleChange}
                />
                <input
                    type= "text"
                    placeholder="Where Are You Going?"
                    name= "location"
                    value= {formData.location}
                    onChange= {handleChange}
                />
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}

export default TripForm;