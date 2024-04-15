import { AdminNextButton } from "../../../components/AdminNextButton";
import React,{useState} from "react";
const AddOrEditMcq=()=>{
    const [addeditmcqFormValues, setAddEditMcqFormValues] = useState({ Category: "Logical",Weightage:"Easy",question: "", option1: "", 
    option2: "" ,option3: "", option4: "",correctoption:""});
    const handleAddEditMcqChange = (e) => {
        const { name, value } = e.target;
        setAddEditMcqFormValues({ ...addeditmcqFormValues, [name]: value });
    };
    const handleAddEditMcqSubmit=(e)=>{
        e.preventDefault();
        if(addeditmcqFormValues.Category!=="" && addeditmcqFormValues.Weightage!=="" && 
        addeditmcqFormValues.question!=="" && addeditmcqFormValues.option1!=="" &&
        addeditmcqFormValues.option2!=="" && addeditmcqFormValues.option3!=="" &&
        addeditmcqFormValues.option4!=="" &&addeditmcqFormValues.correctoption!=="" ){
            console.log(addeditmcqFormValues)
        }else{
            alert("Fill all the form fields")
        }
    }
    return(
    <div className="form-container">
    <form className="addons-form form-card">
    <h1>Edit/Add MCQ Question</h1>
    <div className="addons-input-container">
     <div>
     <label className="Category">Category :</label>
     </div>
     <div className="select-menu"  >
     <select className="Cateory-Input" name="Category"  onChange={(e) => { handleAddEditMcqChange(e) }}>
     <option value="Logical">Logical</option>
     <option value="Grammer">Grammer</option>
     <option value="Programming">Programming</option>
     </select>
     </div>
     </div>

     <div className="addons-input-container">
     <div>
     <label className="Category" >Weightage :</label>
     </div>
     <div className="select-menu" >
     <select className="Cateory-Input" name="Weightage" onChange={(e) => { handleAddEditMcqChange(e) }}>
     <option value="Easy">Easy</option>
     <option value="Medium">Medium</option>
     <option value="Hard">Hard</option>
     </select>
     </div>
     </div>
    <div className="textarea-container">
    <label className="Question-label">Question:</label>
    <div><textarea type="text" rows={5} cols={5}
    placeholder="Enter the Question"name="question" onChange={(e) => { handleAddEditMcqChange(e) }}/>
    </div>
    </div>
   
    <div className="addons-input-container">
    <label >Option 1:</label>
    <div>
    <input type="text" name="option1" placeholder="Enter the value of option"
    onChange={(e) => { handleAddEditMcqChange(e) }}/>
    </div>
    </div>
   
    
    <div className="addons-input-container">
    <label>Option 2:</label>
    <div>
    <input type="text" name="option2" placeholder="Enter the option"
    onChange={(e) => { handleAddEditMcqChange(e) }}/></div>
    </div> 
   
    <div className="addons-input-container">
    <label >Option 3:</label>
    <div>
    <input type="text" name="option3" placeholder="Enter the option"
    onChange={(e) => { handleAddEditMcqChange(e) }}/></div>
    </div> 
   
    <div className="addons-input-container">
    <label >Option 4:</label>
    <div>
    <input type="text" name="option4" placeholder="Enter the option"
    onChange={(e) => { handleAddEditMcqChange(e) }}/></div>
    </div>
   
    <div className="addons-input-container">
    <label>Correct option:</label>
    <div>
    <input type="text" name="correctoption" placeholder="Enter the value of correct option"
    onChange={(e) => { handleAddEditMcqChange(e) }}/></div>
    </div>
    <button className="Nextbutton" onClick={(e) => handleAddEditMcqSubmit(e)}>Submit</button>
   {/* <AdminNextButton content={"Submit"}/> */}
    </form>
    </div>
    );
   }
   export default AddOrEditMcq;