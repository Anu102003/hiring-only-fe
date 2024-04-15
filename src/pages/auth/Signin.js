import "../../assets/auth/auth.css"
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
const Signin = () => {
    const navigate=useNavigate();
    const [signinFormValues, setSigninFormValues] = useState({ email: "", password: "" });
    const [signinFormEmailErrors, setSigninFormEmailErrors] = useState("");
    const [signinFormPasswordErrors, setSigninFormPasswordErrors] = useState("");
    const [signinSubmit, setSigninSubmit] = useState(false);

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSigninFormValues({ ...signinFormValues, [name]: value });
       
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        if ((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(signinFormValues.email)) && signinFormValues.email !== "") {
            setSigninFormEmailErrors("")
            setSigninSubmit(true)
        } else {
            setSigninFormEmailErrors("Enter valid email")
            setSigninSubmit(false)
        }
        if (( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(signinFormValues.password)) && signinFormValues.password !== "") {
            setSigninFormPasswordErrors("")
            setSigninSubmit(true)
        } else {
            setSigninFormPasswordErrors("Enter valid password (8 to 15 characters which contain one lowercase letter, one uppercase letter, one numeric digit, and one special character)")
            setSigninSubmit(false)
        }
        if(signinSubmit){
            console.log(signinFormValues);
            navigate('/contestdetails')
        }
    }
    return (

        <div className="auth">

            <div className="auth-form">
                <form >
                    <div className="logo"><img src="./logo.png" height="130px" width="150px"></img></div>
                    <h1 >Sign In</h1>
                    <label>Email</label>
                    <input type="text"
                        name="email"
                        className="email"
                        autoCapitalize='off'
                        autoComplete='off'
                        onChange={(e) => { handleSignInChange(e) }}
                        required
                    />
                    {signinFormEmailErrors && <div className="error">{signinFormEmailErrors}</div>}
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        className="Password"
                        autoCapitalize='off'
                        autoComplete='off'
                        required
                        onChange={(e) => { handleSignInChange(e) }}
                    />
                    {signinFormPasswordErrors && <div className="error">{signinFormPasswordErrors}</div>}

                    <div className="authbutton-align">
                       <button className="authbutton" onClick={(e) => handleSignInSubmit(e)}  >Sign in</button>
                        {/* <Link to="/admincontestmenu"><button className="authbutton" >Sign in</button></Link> */}
                    </div>
                    <h3>Don't have an account <Link to="/signup">Sign up</Link></h3>
                </form>
            </div>

        </div>

    );
}

export default Signin;