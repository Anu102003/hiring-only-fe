import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export const Mcqcard = (name,easy,medium,hard) => {
  return (
    <>
      <div>

        <div className='add-component'>
        <div className='add-component-item'><h2>Category :</h2><h2 className='add-component-item-h2'>{name.name}</h2></div>
        <div className='add-component-level'>
        <div className='add-component-item'><h3 className='easy'>Easy :</h3><h3>{name.easy}</h3></div>
        <div className='add-component-item'><h3 className='medium'>Medium :</h3><h3>{name.medium}</h3></div>
        <div className='add-component-item'><h3 className='hard'>Hard :</h3><h3>{name.hard}</h3></div>
        </div>
        </div>
      </div></>
  )
}
