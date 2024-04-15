import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "../../../assets/admin/userscore/userscorelist.css"
import { score } from '../../../database/score';
import RadialBarChart from './RadialBarChart';
export const Userscorelist = () => {
    const navigate=useNavigate();
    const [searchScoreText, setSearchScoreText] = useState('');
    const [data, setData] = useState(score);
    const filteredScoreData = data.filter((item) =>
        item.name.toLowerCase().includes(searchScoreText.toLowerCase())
    );
    const handleSearchScoreChange = (e) => {
        setSearchScoreText(e.target.value);
    };

    const [clickedCard, setClickedCard] = useState("");
    const handlescoreclick = (e) => {
        setClickedCard(e);
        navigate("/individualscore")
    }
    console.log(clickedCard)


    const [passPercentage, setPassPercentage] = useState("");
    const handlePassPercentageChange = (e) => {
        setPassPercentage(e.target.value);
    }
    const handlePassPercentageSubmit = (e) => {
        e.preventDefault()
        console.log(passPercentage)
    }
    
    return (
        <>
            <div className='score-container'>
                <div className='score-card'>
                    <h1>Candidate Score</h1>
                    <div className="score-details">
                        <h2>Contest Name :</h2>
                        <h4 className='contest-names'>Contest 1</h4>
                    </div>
                    <div className='score-chart'>
                           <RadialBarChart/>
                        </div>
                        {/* <div className="score-details">
                            <h2>Total No of Participant :</h2>
                            <h4 className='contest-names'>45</h4>
                        </div>
                        <div className="score-details">
                            <h3>Pass :</h3>
                            <h4 className='contest-name'>10</h4>
                        </div>
                        <div className="score-details">
                            <h3>Fail :</h3>
                            <h4 className='contest-name'>29</h4>
                        </div>
                        <div className="score-details">
                            <h3>Absentence :</h3>
                            <h4 className='contest-name'>12</h4>
                        </div> */}
                        <div className='score-list'>
                        <div className="score-details">
                            <h3>Pass Percentage :</h3>
                            <input type="text"
                                className="inputs"
                                placeholder="Enter Contest Name"
                                name="contestName"
                                onChange={(e) => { handlePassPercentageChange(e) }}
                            />
                            <button
                                onClick={(e) => { handlePassPercentageSubmit(e) }}
                            >Submit</button>
                        </div>
                        </div>
                    <h2>Leaderboard:</h2>
                    <div className='search-container'>
                        <div className='search-bar'>
                            <span className='search-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <input
                                className="nav-card__search-input"
                                type="text"
                                placeholder="Enter the Candidate Name"
                                value={searchScoreText}
                                onChange={handleSearchScoreChange}
                            />
                        </div>
                    </div>


                    <div class="table table-user">
                        <div class="header">
                            <div class="cell">Rank</div>
                            <div class="cell">Name</div>
                            <div class="cell">MCQ Score</div>
                            <div class="cell">Programming Score</div>
                        </div>
                        {filteredScoreData.map((item, index) => (
                            <div class="row" onClick={() => handlescoreclick(1)}>
                                <div class="cell">{item.rank}</div>
                                <div class="cell">{item.name}</div>
                                <div class="cell">{item.mcq}</div>
                                <div class="cell">{item.Programming}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
