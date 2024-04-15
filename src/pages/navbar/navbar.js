import React from 'react'
import { Link } from 'react-router-dom'
import "../../assets/navbar/navbar.css"
export const Navbar = ({ role }) => {
  const handleLogout = (e) => {
    e.preventDefault()
    // console.log("log")
  }
  return (
    <>
      <div className='navbar-items'>
        <div className='nav-logo'>
          <img src="./logo.png" height="100px" width="100px" />
        </div>
        {role === 'admin' && (
          <>
            <div className='navbar-content'><Link to="/admincontestmenu"><p>Contestdetails</p></Link>
              <Link to="/employeedetails"><p>EmployeeDetails</p></Link>
              <Link to="/questionbank"><p>Questionbank</p></Link></div>
          </>
        )}
        <div className='navbar-content navbar-button'> 
        <button onClick={(e) => { handleLogout(e) }}><p>Logout</p></button>
        </div>
      </div>
    </>
  )
}
