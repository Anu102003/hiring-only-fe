import { AdminNextButton } from "../../components/AdminNextButton";
import React,{useState} from "react";

// import "../../assets/employee/addemployee.css"
const Addemployee=()=>{
    const [addemployeeFormValues, setAddEmployeeFormValues] = useState({ empid:"",name: "",email:"",foe:""});
    const handleAddEmployeeChange = (e) => {
        const { name, value } = e.target;
        setAddEmployeeFormValues({ ...addemployeeFormValues, [name]: value });
    };
    const handleAddEmployeeSubmit=(e)=>{
        e.preventDefault();
        if(addemployeeFormValues.empid!=="" && addemployeeFormValues.name!=="" &&
        addemployeeFormValues.email!=="" && addemployeeFormValues.foe!=="" ){
            console.log(addemployeeFormValues)
        }else{
            alert("Fill all the form fields")
        }
    }
 return(
 <div className="form-container">
 <form className="addons-form">
 <h1>Add Employee</h1>
 
 <div className="addons-input-container">
<label>Employee ID:</label>
 <div><input type="number" inputmode="numeric" pattern="[0-9]*"name="empid" onChange={(e) => { handleAddEmployeeChange(e) }}
 placeholder="Enter Employee ID only in number" 
 /></div>
 </div>
 <div className="addons-input-container">
<label>Name:</label>
 <div><input type="text" name="name" onChange={(e) => { handleAddEmployeeChange(e) }}
 placeholder="Enter User Name"
 /></div> 
 </div> 
 
 <div className="addons-input-container">
<label>Email:</label>
 <div><input type="email" name="email" onChange={(e) => { handleAddEmployeeChange(e) }}
 placeholder="Enter Valid User Mail Id" 
 /></div>
 </div>

 <div className="addons-input-container">
 <label>Field of Expertise:</label>
 <div><input type="text" name="foe" onChange={(e) => { handleAddEmployeeChange(e) }}
 placeholder="Enter the name of Expertise field "
 /> </div> 
 </div>
 <button className="Nextbutton" onClick={(e) => handleAddEmployeeSubmit(e)}>ADD</button>
 {/* <AdminNextButton content={"SUBMIT"}></AdminNextButton> */}

 </form>
 </div>
 
 );
}

export default Addemployee;
