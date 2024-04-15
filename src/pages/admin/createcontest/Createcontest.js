import "../../../assets/admin/createcontest/createcontest.css"
import { AdminNextButton } from "../../../components/AdminNextButton";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
const Createcontest = () => {
    const navigate = useNavigate();
    const [contestFormValues, setContestFormValues] = useState({
        contestName: "",
        startTime: "",
        endTime: "",
        passPercentage: "",
        details: "",
        rules: ""
    });
    const handleContestChange = (e) => {
        const { name, value } = e.target;
        setContestFormValues({ ...contestFormValues, [name]: value });
    };
    const handleContestSubmit = (e) => {
        e.preventDefault();
        if (contestFormValues.contestName !== "" && contestFormValues.startTime !== "" &&
            contestFormValues.endTime !== "" && contestFormValues.passPercentage !== "" &&
            contestFormValues.details !== "" && contestFormValues.rules!=="") {
            console.log(contestFormValues);
            navigate('/addcomponent')
        }else{
            console.log("first")
        }

    }

    return (

        <div className="form-container">

            <form className="form-card">
                <h1 >Create Contest</h1>
                <div className="input-container">
                    <label>Contest Name :</label>
                    <input type="text"
                        className="inputs"
                        placeholder="Enter Contest Name"
                        name="contestName"
                        onChange={(e) => { handleContestChange(e) }}
                    />
                </div>
                <div className="input-container">
                    <label>Start Time : </label>
                    <input type="datetime-local"
                        className="inputs"
                        name="startTime"
                        onChange={(e) => { handleContestChange(e) }}
                        placeholder="Enter start time"
                    /></div>
                <div className="input-container">
                    <label>End Time :</label>
                    <input type="datetime-local"
                        className="inputs"
                        name="endTime"
                        onChange={(e) => { handleContestChange(e) }}
                        placeholder="Enter end time"
                    /></div>
                <div className="input-container">
                    <label>Pass Percentage :</label>
                    <input type="number"
                        inputmode="numeric"
                        className="inputs"
                        name="passPercentage"
                        onChange={(e) => { handleContestChange(e) }}
                        placeholder="Enter the pass percentage"
                    />
                </div>
                <div className="textarea-container">
                    <label>Details :</label>
                    <textarea type="text"
                        className="inputs"
                        rows="4" cols="50"
                        name="details"
                        onChange={(e) => { handleContestChange(e) }}
                        placeholder="Write a short summary about the challenge"
                    /></div>
                <div className="textarea-container">
                    <label>Rules :</label>
                    <textarea type="text"
                        className="inputs"
                        rows="4" cols="50"
                        name="rules"
                        onChange={(e) => { handleContestChange(e) }}
                        placeholder="Write a short summary about Rules of the challenge"
                    /></div>
                <div className="next-button-align">
                    <button className="Nextbutton" onClick={(e) => handleContestSubmit(e)}>NEXT</button>
                    {/* <AdminNextButton content={"NEXT"} onClick={(e) => handleContestSubmit(e)}/> */}
                </div>    </form>
        </div>

    );
}

export default Createcontest;