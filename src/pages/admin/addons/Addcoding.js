import React, { useState } from "react";
const Addcoding = () => {
    const [addcodingFormValues, setAddCodingFormValues] = useState({ Category: "Coding",NoQues:"", Easy: "", Medium: "", Hard: "" });
    const handleAddCodingChange = (e) => {
        const { name, value } = e.target;
        setAddCodingFormValues({ ...addcodingFormValues, [name]: value });
    };
    const handleAddCodingSubmit=(e)=>{
        e.preventDefault();
        if(addcodingFormValues.Category!=="" && addcodingFormValues.Easy!=="" && 
        addcodingFormValues.Hard!=="" && addcodingFormValues.Medium!==""){
            console.log(addcodingFormValues)
        }else{
            alert("Fill all the form fields")
        }
    }
    
    return (
        <div className="form-container">
            <form className="addons-form ">
                <h1>Add Coding Question</h1>
                <div className="addons-input-container">
                    <label>Category:</label>
                    <div>
                        <input type="text" inputmode="numeric" pattern="[0-9]*"  name="Category" onChange={(e) => { handleAddCodingChange(e)}}
                            placeholder="Enter Category" value="Coding" readOnly
                        />
                    </div>
                </div>
                <div className="addons-input-container">
                    <div><label >No of Question:</label></div>
                    <div><input type="number"
                     name="NoQues"
                     onChange={(e) => { handleAddCodingChange(e) }}
                        placeholder="Enter total no of questions for Coding "
                    /></div>
                </div>
                <div className="addons-input-container">
                    <label>Easy :</label>
                    <div>
                        <input type="number"  inputmode="numeric" pattern="[0-9]*"
                         name="Easy"
                         onChange={(e) => { handleAddCodingChange(e) }}
                            placeholder="Enter No of questions of Easy Mode "
                        />
                    </div>
                </div>
                <div className="addons-input-container">
                    <div >
                        <label>Medium :</label>
                    </div>
                    <div>
                        <input type="number"  inputmode="numeric" pattern="[0-9]*"
                         name="Medium"
                         onChange={(e) => { handleAddCodingChange(e) }}
                            placeholder="Enter No of questions of Medium Mode "
                        />
                    </div>
                </div>
                <div className="addons-input-container">
                    <div >
                        <label >Hard :</label>
                    </div>
                    <div>
                        <input type="number"  inputmode="numeric" pattern="[0-9]*"
                         name="Hard"
                         onChange={(e) => { handleAddCodingChange(e) }}
                            placeholder="Enter No of questions of Hard Mode "
                        />
                    </div>
                </div>
                <button className="Nextbutton" onClick={(e) => handleAddCodingSubmit(e)}>ADD</button>
            </form>
        </div>
    );
}

export default Addcoding;