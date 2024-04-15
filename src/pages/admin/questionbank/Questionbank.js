import React, { useState } from 'react'
import "../../../assets/admin/questionbank/questionbank.css"
import { Questioncard } from './QuestionCardMcq';
import { SearchAddButton } from '../../../components/SearchAddButton';
import { QuestioncardCoding } from './QuestionCardCoding';
export const Questionbank = () => {
    const [currentTab, setCurrentTab] = useState('Mcq');
    const handleTabClick = (e) => {
        setCurrentTab(e.target.value)
    }
    return (
        <>
            <div className='questionbank-container'>
                <div className='tabs'>
                    <button
                        value={"Mcq"}
                        className={`tab-button ${"Mcq" == currentTab ? "tabchecked" : null}`}
                        onClick={(handleTabClick)}
                    >
                        MCQ
                    </button>
                    <button
                        value={"Coding"}
                        className={`tab-button ${"Coding" == currentTab ? "tabchecked" : null}`}
                        onClick={(handleTabClick)}
                    >
                        CODING
                    </button>

                </div>

                <div className='content'>
                    <div >
                        {
                            currentTab === "Mcq" ?
                                <div>
                                    <div className='livecontest-container'>
                                        <Questioncard  />
                                    </div>
                                </div> :
                                <div>
                                    <div className='livecontest-container'>
                                        <QuestioncardCoding  />
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
