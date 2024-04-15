import { AdminNextButton } from "../../../components/AdminNextButton";
import React,{useState} from "react";
const Addparticipant=()=>{
    const [addparticipantFormValues, setAddParticipantFormValues] = useState({ email:"",aoi: ""});
    const handleAddParticipantChange = (e) => {
        const { name, value } = e.target;
        setAddParticipantFormValues({ ...addparticipantFormValues, [name]: value });
    };
    const handleAddParticipantSubmit=(e)=>{
        e.preventDefault();
        if(addparticipantFormValues.email!=="" && addparticipantFormValues.aoi!=="" ){
            console.log(addparticipantFormValues)
        }else{
            alert("Fill all the form fields")
        }
    }
    return(
    <div className="form-container">
    <form className="addons-form">
    <h1>Add Participant</h1>
    <div className="addons-input-container">
    <div><label >Email:</label></div>
    <div><input type="email" name="email" onChange={(e) => { handleAddParticipantChange(e) }}
    placeholder="Enter Valid Email Id"/>
    </div>
    </div>
    <div className="addons-input-container">
    <label >Area of Interest:</label>
    <div><input type="text" name="aoi" onChange={(e) => { handleAddParticipantChange(e) }}
    placeholder="Enter name of Field(eg:Backend,Frontend)"/>
    </div>
    </div>
    <button className="Nextbutton" onClick={(e) => handleAddParticipantSubmit(e)}>ADD</button>
    </form>
    </div>
    );
   }
   
   export default Addparticipant;