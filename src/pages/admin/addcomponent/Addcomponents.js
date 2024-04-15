import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../assets/admin/addcomponent/addcomponent.css"
import { Mcqcard } from './Mcqcard';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AddOrEditMcq from '../questionbank/AddOrEditMcq';
import { Participant } from './Participant';
export const Addcomponents = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("MCQ");
  const [searchcomponent, setSearchComponent] = useState("");
  const tabs = [
    {
      "name": "logical",
      "weight": {
        "easy": 13,
        "medium": 12,
        "hard": 10
      }
    },
    {
      "name": "grammar",
      "weight": {
        "easy": 13,
        "medium": 12,
        "hard": 10
      }
    },
    {
      "name": "Programming",
      "weight": {
        "easy": 13,
        "medium": 12,
        "hard": 10
      }
    },
    {
      "name": "Programming",
      "weight": {
        "easy": 2,
        "medium": 2,
        "hard": 2
      }
    }, {
      "name": "coding",
      "weight": {
        "easy": 13,
        "medium": 12,
        "hard": 10
      }
    },
    {
      "name": "coding",
      "weight": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      }
    },
    {
      "name": "coding",
      "weight": {
        "easy": 2,
        "medium": 2,
        "hard": 2
      }
    }
  ]

  const handleSearchComponentChange = (e) => {
    setSearchComponent(e.target.value);
  };

  
  const filteredData = {
    id1: tabs.filter(tab => ["logical", "grammar", "Programming"].includes(tab.name)),
    id2: tabs.filter(tab => tab.name === "coding")
  };

  var filterData = [];
  const addparticipant = "ADD PARTICIPANT"
  for (const key in filteredData) {
    filterData.push({
      id: parseInt(key.slice(2)),
      data: filteredData[key]
    });
  }
   filterData = filterData.map((item) => ({
    ...item,
    data: item.data.filter((dataItem) =>
      dataItem.name.toLowerCase().includes(searchcomponent.toLowerCase())
    ),
  }));
  filterData = filterData.map(item => {
    if (item.id === 1) {
      item.id = "MCQ";
    } else if (item.id === 2) {
      item.id = "CODING";
    }
    return item;
  });


  const handleTabClick = (e) => {
    setCurrentTab(e.target.id)
  }
  // if (currentTab === addparticipant) {
  //   navigate("/addparticipant")
  // }
  return (
    <>


      <div className='add-container'>
        <div className='tabs'>
          {filterData.map((tab, i) =>
            <>
              <button
                key={i}
                id={tab.id}
                className={`tab-button ${tab.id == currentTab ? "tabchecked" : null}`}
                onClick={(handleTabClick)}
              >
                {tab.id}
              </button>
            </>
          )}
          <button
            id={addparticipant}
            className={`tab-button ${addparticipant == currentTab ? "tabchecked" : null}`}
            onClick={(handleTabClick)}
          >
            {addparticipant}
          </button>
        </div>

        <div className='search-add-component   add-cards'>
          <div className='search-bar'>
            <span className='search-icon'>
              <FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            <input
              className="nav-card__search-input"
              type="text"
              placeholder="Enter the Category Name"
              onChange={handleSearchComponentChange}
              value={searchcomponent}
            />
          </div>
          <div className='add-button add-add-component'>
            {currentTab === "MCQ" ? 
            <Link to="/addmcq">
              <button>
                <span className='add-icon'><FontAwesomeIcon icon={faPlus} /> </span> Add
              </button>
            </Link> :
            currentTab === "CODING" ? 
              <Link to="/addcoding">
                <button>
                  <span className='add-icon'><FontAwesomeIcon icon={faPlus} /> </span> Add
                </button>
              </Link> :
              <Link to="/addparticipant">
              <button>
                <span className='add-icon'><FontAwesomeIcon icon={faPlus} /> </span> Add
              </button>
            </Link>}
          </div>
        </div>

        <div className='content'>

          {filterData && filterData.map((item, i) =>
            <>
              <div key={i}>
                {
                currentTab === item.id ? 
                (
                  <div>
                    <div className='livecontest-container'>
                      {item.data.map(data =>
                        <>
                          <Mcqcard name={data.name} easy={data.weight.easy} medium={data.weight.medium} hard={data.weight.hard} />
                        </>)}
                    </div>
                  </div>
                  ):null
              }
              </div>
            </>
          )}
          {
            currentTab === "ADD PARTICIPANT" &&
            (
              <div>
                <div className='livecontest-container'>
                  <Participant search={searchcomponent}/>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
