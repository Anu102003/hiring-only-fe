import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import { employee } from '../../database/employe';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export const EmployeeDetails = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(employee);
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };
    return (
        <>
            <div className='score-container'>
                <div className='score-card'>
                    <h1>Employee</h1>
                    <div className='search-container'>
                        <div className='search-bar'>
                            <span className='search-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <input
                                className="nav-card__search-input"
                                type="text"
                                placeholder="Enter the Employee Name"
                                value={searchText}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <div className='add-button add-align'>
        <div></div>
        <Link to="/addemployee">
        <button>
          <span className='add-icon'><FontAwesomeIcon icon={faPlus} /> </span> Add
        </button></Link>
      </div>
                    <div class="table">
                        <div class="header">
                            <div class="cell">Employe ID</div>
                            <div class="cell">Name</div>
                            <div class="cell">Area of Expertise</div>
                        </div>
                        {filteredData.map((item, index) => 
                        <div class="row" >
                            <div class="cell">{item.id}</div>
                            <div class="cell">{item.name}</div>
                            <div class="cell">{item.aoe}</div>
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </>
    )
}
