import { AdminNextButton } from "../../components/AdminNextButton";
import React, { useState } from "react";

const SingleCandidatedetails = () => {
    const [candidateFormValues, setCandidateFormValues] = useState({ score: 90, candidatefeed: "", adminfeed: "" });
    const handleCandidateChange = (e) => {
        const { name, value } = e.target;
        setCandidateFormValues({ ...candidateFormValues, [name]: value });
    };
    console.log(candidateFormValues)
    const handleCandidateSubmit = (e) => {
        e.preventDefault();

        if (candidateFormValues.score !== "" &&
            candidateFormValues.candidatefeed !== "" && candidateFormValues.adminfeed !== "") {
            console.log(candidateFormValues)
        } else {
            alert("Fill all the form fields")
        }
    }
    return (
        <div className="form-container">
            <form className="form-card">
                <h1>Candidate Details</h1>

                <div className="input-container">
                    <div><label>Name :</label></div>
                    <div><p>Anu</p></div>
                </div>
                <div className="input-container">
                    <div><label>Mcq Marks :</label></div>
                </div>
                <div className="list">
                <ul>
                    <li>
                        <div className="input-container">
                            <div><label>Grammer : </label></div>
                            <div><label><p> 3</p></label></div>
                        </div>
                    </li>
                    <li>
                        <div className="input-container">
                            <div><label>Logical :</label></div>
                            <div><label><p>4</p></label></div>
                        </div>
                    </li>
                    <li>
                        <div className="input-container">
                            <div><label>Programming :</label></div>
                            <div><label><p>6</p></label></div>
                        </div>
                    </li>
                    <li>
                        <div className="input-container">
                            <div><label>Code Marks :</label></div>
                            <div><label><p>8</p></label></div>
                        </div>
                    </li>
                    <li>
                        <div className="input-container">
                            <div><label>Total Marks :</label></div>
                            <div><label><p>90</p></label></div>
                        </div>
                    </li>
                </ul>
                </div>
                <div className="input-container">
                    <div><label >Score :</label></div>
                    <div><input type="number" placeholder="Enter Score of Candidate" name="score" readOnly value={90}
                        onChange={(e) => { handleCandidateChange(e) }} /></div>
                </div>
                <div className="textarea-container">
                    <div><label >Feedback to Candidate :</label></div>
                    <div><textarea type="text" placeholder="Feedback is shared to user" name="candidatefeed" onChange={(e) => { handleCandidateChange(e) }} /></div>
                </div>
                <div className="textarea-container">
                    <div><label >Feedback to Admin :</label></div>
                    <div><textarea type="text" placeholder="Feedback is shared to admin" name="adminfeed" onChange={(e) => { handleCandidateChange(e) }} /></div>
                </div>
                <button className="Nextbutton" onClick={(e) => handleCandidateSubmit(e)}>Submit</button>
            </form>
        </div>
    );
}
export default SingleCandidatedetails;