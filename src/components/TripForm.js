import React, {useState} from "react";
import './TripForm.css';

function TripForm({onAddTrip}) {
    const [formData, setFormData] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
  
      fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData: formData.name,
          
        }), 
        
      })
      
        .then((r) => r.json())
        .then((newMessage) => {
          onAddTrip(newMessage);
          setFormData("");
        });
    }
    

    return (
        <div className="box">
            <form onSubmit = {handleSubmit}>
               <span className="text-center">Add a Trip!</span>
                <div className="input-container">
                    
                    <input 
                        type= "text"
                        placeholder= "Your Name Here!"
                        name= "user"
                        value= {formData}
                        onChange= {(e) => setFormData(e.target.value)}
                        required=""
                        className= "input-text"
                    />
                    <label>NAME</label>
                    </div>
               
                   <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TripForm;

// const [formData, setFormData] = useState({
//     name: "",
   
// });

// function handleChange(event) {
//     setFormData({
//         ...formData,
//         [event.target.name]: event.target.value,
//     });
// }

// function handleSubmit(event){
//     event.preventDefault()

//     const newTrip = {
//         ...formData,
//         };

//     fetch("http://localhost:9292/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newTrip),
//       })
//         .then((r) => r.json())
//         .then(onAddTrip);
// };
/* <div className="input-container">
                    <input
                        type= "text"
                        placeholder= "Where Are You Going?"
                        name= "location"
                        value= {formData.location}
                        onChange= {handleChange}
                        required=""
                        className= "input-text"
                    />
                    <label>LOCATION</label>
                    </div> */