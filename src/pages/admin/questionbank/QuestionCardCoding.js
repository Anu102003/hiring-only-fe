import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import "../../../assets/admin/questionbank/questionbank.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
export const QuestioncardCoding = () => {
    const [codingQuestion, setCodingQuestion] = useState('');
    const handleCodingQuestion =(e)=>{
       setCodingQuestion(e.target.value);
    }
    
    const data = [
        {
            "question": "dcdvdfv dfvd ?",
            "input": "{\"sampleIp\":\"4 5 2,3 2 1\"}",
            "output": "{\"sampleOp\":\"4 + 5i\\n6 + 5i\\n10 + 10i\"}",
            "wei": "MEDIUM",
            "quid": "Q1"
        },
        {
            "question": "wtr3uyrue ewryt ?",
            "input": "{\"sampleIp\":\"cacacaca\"}",
            "output": "{\"sampleOp\":\"c\"}",
            "wei": "EASY",
            "quid": "Q2"
        },
        {
            "question": "deeps?",
            "input": "{\"sampleIp\":\"PPPPP@PPP\"}",
            "output": "{\"sampleOp\":\"7.0\"}",
            "wei": "HARD",
            "quid": "Q3"
        },{
            "question": "grace?",
            "input": "{\"sampleIp\":\"4 5 2,3 2 1\"}",
            "output": "{\"sampleOp\":\"4 + 5i\\n6 + 5i\\n10 + 10i\"}",
            "wei": "MEDIUM",
            "quid": "Q1"
        },
        {
            "question": "anu?",
            "input": "{\"sampleIp\":\"cacacaca\"}",
            "output": "{\"sampleOp\":\"c\"}",
            "wei": "EASY",
            "quid": "Q2"
        },
        {
            "question": "kow?",
            "input": "{\"sampleIp\":\"PPPPP@PPP\"}",
            "output": "{\"sampleOp\":\"7.0\"}",
            "wei": "HARD",
            "quid": "Q3"
        }
    ]
    const filteredCodingQuestion = data.filter((item) =>
        item.question.toLowerCase().includes(codingQuestion.toLowerCase())
    );
    console.log(filteredCodingQuestion)
    
    return (
        <>
            <div className='button-align'>
                <div className='menu-search add-cards'>
                    <div className='search-bar'>
                        <span className='search-icon'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <input
                            className="nav-card__search-input"
                            type="text"
                            placeholder="Enter the Question Name"
                        onChange={handleCodingQuestion}
                        value={codingQuestion}
                        />
                    </div>
                    <div className='add-button'>
                        <Link to="/addoreditcoding">
                            <button>
                                <span className='add-icon'><FontAwesomeIcon icon={faPlus} /> </span> Add
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
            {filteredCodingQuestion.map((i, index) => (
                <div className='questionbank-component'>
                    <div className='questionbank-card'>
                        <div>    
                                <div key={i.quid}>            
                                <div className='question-data'>
                                    <h3>Question : </h3>
                                    <p >{i.question}</p>
                                </div>
                             <div className='question-data'>
                                <h3>Input :</h3>
                                <p> {JSON.parse(i.input).sampleIp}</p>
                            </div>
                            <div className='question-data'>
                                <h3>Output :</h3>
                                <p>{JSON.parse(i.output).sampleOp}</p>
                            </div>
                            <div className='question-data'>
                                <h3>Weightage :</h3>
                                <p> {i.wei}</p>
                            </div> 
                            </div>
                        </div>
                        <div>
                            <div className='edit-delete-button'>
                                <div className='edit-button'>
                                    <Link to="/addoreditcoding">
                                        <button>
                                            <span className='add-icon'><FontAwesomeIcon icon={faPen} /> </span> Edit
                                        </button>
                                    </Link>
                                </div>
                                <div className='delete-button'>
                                    <button>
                                        <span className='add-icon'><FontAwesomeIcon icon={faTrash} /> </span> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div></>
    )
}
