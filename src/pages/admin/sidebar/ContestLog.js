import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import "../../../assets/admin/sidebar/contest.css"
import { Link } from 'react-router-dom'
export const ContestLog = ({filteredliveData}) => {
  return (
    <>
    {filteredliveData.map((item, index) => (        
      
      <div className='livecontest-container' key={index}>
        <div>
          <div className='contest-log' >
            <div className='contest-title'>
            <h2>{item.name}</h2>
            </div>
            <div className='view-button'>
              <Link to="/userscorelist">
              <button>  
                 <span className='view-icon'><FontAwesomeIcon icon={faEye} /></span>
                View Score</button></Link>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  )
}
