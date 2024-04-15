import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import { LiveUpcomingContest } from '../sidebar/LiveUpcomingContestontest';
import { ContestLog } from '../sidebar/ContestLog';
import "../../../assets/admin/contestmenu/admincontestmenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { contestdata } from '../../../database/contest';
import { livecontest } from '../../../database/livecontest';
export const AdminContestMenu = () => {

    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(contestdata);
    const [livecontestdata,setLiveData] =useState(livecontest)

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const filteredliveData = livecontestdata.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    //   console.log(filteredData)
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const [selectedComponent, setSelectedComponent] = useState("LiveUpcomingContest");

    const handleSidebarItemClick = (componentName) => {
        setSelectedComponent(componentName);
    };
    return (
        <>
            <div className='admin-contest-menu'>
                <div className='sidebars'>
                    <Sidebar onSidebarItemClick={handleSidebarItemClick} />
                </div>
                <div className='sidebarcontent'>
                    <div className='menu-search'>
                        <div className='search-bar search-menu'>
                            <span className='search-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <input
                                className="nav-card__search-input"
                                type="text"
                                placeholder="Enter the Contest Name"
                                value={searchText}
                                onChange={handleSearchChange}
                            />
                        </div>
                        
                    </div>
                    <main className="content">
                        {selectedComponent === 'LiveUpcomingContest' ? <LiveUpcomingContest filteredData={filteredData} /> : <ContestLog filteredliveData={filteredliveData} />}
                    </main>
                </div>

            </div>
        </>
    );

};

export default AdminContestMenu;

