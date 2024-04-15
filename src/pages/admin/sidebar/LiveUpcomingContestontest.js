import React from 'react'
import "../../../assets/admin/sidebar/contest.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export const LiveUpcomingContest = ({ filteredData }) => {

  return (
    <>
      <div className='add-button add-align'>
        <div></div>
        <Link to="/createcontest">
          <button>
            <span className='add-icon'><FontAwesomeIcon icon={faPlus} /> </span> Add
          </button></Link>
      </div>
      {filteredData.map((item, index) => (
        <div className='livecontest-container' key={index}>
          <div>
            <div className='contest-items'>
              <div className='contest-name'>
              <h2>{item.name}</h2>
              </div>
              {/* <h3>Start: {item.start}</h3>
              <h3>Time: {item.end}</h3> */}
              <div className='contest-time'>
              <div className='time1'>
              <h3>Start Date :  <span className='start'>{new Date(item.start).toLocaleDateString()}</span></h3>
              <h3>Start Time : <span className='start'>{new Date(item.start).toLocaleTimeString()}</span></h3>
              </div>
              <div className="time2">
              <h3>End Date : <span className='end'>{new Date(item.end).toLocaleDateString()}</span></h3>
              <h3>End Time : <span className='end'>{new Date(item.end).toLocaleTimeString()}</span></h3>
              </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </>
  )
}
