import { AdminNextButton } from "../../../components/AdminNextButton";
import React,{useState} from "react";

const AddOrEditCoding = () => {
    const [addeditcodingFormValues, setAddEditCodingFormValues] = useState({ Weightage:"Easy",question: "",sampleinput1:"", sampleoutput1: ""});
    const handleAddEditCodingChange = (e) => {
        const { name, value } = e.target;
        setAddEditCodingFormValues({ ...addeditcodingFormValues, [name]: value });
    };
    const handleAddEditCodingSubmit=(e)=>{
        e.preventDefault();
        if(addeditcodingFormValues.Weightage!=="" && addeditcodingFormValues.question!=="" && 
        addeditcodingFormValues.sampleinput1!=="" && addeditcodingFormValues.sampleoutput1!==""){
            console.log(addeditcodingFormValues)
        }else{
            alert("Fill all the form fields")
        }
    }
    return (
        <div className="form-container">
            <form className="addons-form form-card">
                <h1>Edit/Add Coding Question</h1>
                <div className="addons-input-container">
                    <div>
                        <label className="Category" >Weightage :</label>
                    </div>
                    <div className="select-menu" >
                        <select className="Cateory-Input" name="Weightage" onChange={(e) => { handleAddEditCodingChange(e) }}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="textarea-container">
                    <label >Question:</label>
                    <div><textarea type="text"
                    name="question" onChange={(e) => { handleAddEditCodingChange(e) }}
                        className="Question-input"
                        placeholder="Enter the Question" />
                    </div>
                </div>
                <h2>Test Cases :</h2>
                <div className="textarea-container">
                    <label>Sample Input 1 :</label>
                    <div><textarea type="text"
                    name="sampleinput1" onChange={(e) => { handleAddEditCodingChange(e) }}
                        className="Question-input"
                        placeholder="Enter the Sample Input" />
                    </div>
                </div>
                <div className="textarea-container">
                    <label>Sample Output 2 :</label>
                    <div><textarea type="text"
                    name="sampleoutput1" onChange={(e) => { handleAddEditCodingChange(e) }}
                        className="Question-input"
                        placeholder="Enter the Sample Output" />
                    </div>
                </div>
                <button className="Nextbutton" onClick={(e) => handleAddEditCodingSubmit(e)}>Submit</button>
            </form>
        </div>
    );
}
export default AddOrEditCoding;