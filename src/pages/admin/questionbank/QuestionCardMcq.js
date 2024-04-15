import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../../assets/admin/questionbank/questionbank.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
export const Questioncard = () => {
    const [mcqQuestion, setMcqQuestion] = useState('');
    const handleMcqQuestion = (e) => {
        setMcqQuestion(e.target.value);
    }

    const data = [
        {
            "question": "We usually ______ dinner at 8:00 p.m",
            "correctOp": "Eat",
            "part": "Grammer",
            "wei": "EASY",
            "options": "[{\"options\":\"Eat\",\"id\":1},{\"options\":\"Eating\",\"id\":2},{\"options\":\"Never have eaten\",\"id\":3},{\"options\":\"I don't know\",\"id\":4}]",
            "qid": "Q5"
        },
        {
            "question": " What is the correct syntax of doctype in HTML5?",
            "correctOp": "<!doctype html>",
            "part": "Coding",
            "wei": "EASY",
            "options": "[{\"options\":\"<\/doctype html>\",\"id\":1},{\"options\":\"\\n <doctype html>\",\"id\":2},{\"options\":\"\\n <doctype html!>\",\"id\":3},{\"options\":\"\\n <!doctype html>\",\"id\":4}]",
            "qid": "Q6"
        },
        {
            "question": " Which number should come next in the series, 48, 24, 12, ......?",
            "correctOp": "6.0",
            "part": "Logical",
            "wei": "EASY",
            "options": "[{\"options\":\"8\",\"id\":1},{\"options\":\"\\n6\",\"id\":2},{\"options\":\"\\n4\",\"id\":3},{\"options\":\"\\n2\",\"id\":4}]",
            "qid": "Q7"
        },
        {
            "question": "Which of these cannot be used for a variable name in Java?",
            "correctOp": "keyword",
            "part": "Coding",
            "wei": "EASY",
            "options": "[{\"options\":\"identifier & keyword\",\"id\":1},{\"options\":\"\\nidentifier\",\"id\":2},{\"options\":\"\\n keyword\",\"id\":3},{\"options\":\"\\n none of the mentioned\",\"id\":4}]",
            "qid": "Q8"
        },
        {
            "question": "A dog is bigger than a mouse but smaller than an elephant.",
            "correctOp": "An elephant is bigger than a dog",
            "part": "Grammer",
            "wei": "EASY",
            "options": "[{\"options\":\"A dog is smaller than a mouse\",\"id\":1},{\"options\":\"A dog is very big\",\"id\":2},{\"options\":\"A dog is the biggest\",\"id\":3},{\"options\":\"An elephant is bigger than a dog\",\"id\":4}]",
            "qid": "Q9"
        },
        {
            "question": "\n Which of the following CSS selectors are used to specify a group of elements?",
            "correctOp": "class",
            "part": "Coding",
            "wei": "EASY",
            "options": "[{\"options\":\"tag\",\"id\":1},{\"options\":\"\\nid\",\"id\":2},{\"options\":\" class\",\"id\":3},{\"options\":\"\\n both class and tag\",\"id\":4}]",
            "qid": "Q10"
        },
        {
            "question": " Which command is used to display the operating system name",
            "correctOp": "uname",
            "part": "Coding",
            "wei": "EASY",
            "options": "[{\"options\":\"os\",\"id\":1},{\"options\":\"\\nunix\",\"id\":2},{\"options\":\"\\n kernel\",\"id\":3},{\"options\":\"\\n uname\",\"id\":4}]",
            "qid": "Q11"
        },
        {
            "question": "Yesterday, we ______ a very interesting conference call about the new ERP project. ",
            "correctOp": "Had",
            "part": "Grammer",
            "wei": "MEDIUM",
            "options": "[{\"options\":\"Are having\",\"id\":1},{\"options\":\" Have\",\"id\":2},{\"options\":\"Had\",\"id\":3},{\"options\":\"Were had\",\"id\":4}]",
            "qid": "Q12"
        },
        {
            "question": "Which of the following is used to read an HTML page and render it?",
            "correctOp": "Web browser",
            "part": "Coding",
            "wei": "MEDIUM",
            "options": "[{\"options\":\"Web server\",\"id\":1},{\"options\":\"\\nWeb network\",\"id\":2},{\"options\":\"\\nWeb browser\",\"id\":3},{\"options\":\"\\n Web matrix\",\"id\":4}]",
            "qid": "Q13"
        },
        {
            "question": "What will be the value of the following Python expression?\n\n4 + 3 % 5",
            "correctOp": "7.0",
            "part": "Coding",
            "wei": "EASY",
            "options": "[{\"options\":\"7\",\"id\":1},{\"options\":\"\\n 2\",\"id\":2},{\"options\":\"\\n 4\",\"id\":3},{\"options\":\"\\n 1\",\"id\":4}]",
            "qid": "Q14"
        },
        {
            "question": "The plane _____ at New York's Kennedy Airport. ",
            "correctOp": "Landed",
            "part": "Grammer",
            "wei": "EASY",
            "options": "[{\"options\":\"Got dow\",\"id\":1},{\"options\":\"Took down\",\"id\":2},{\"options\":\"Landed\",\"id\":3},{\"options\":\"Drove\",\"id\":4}]",
            "qid": "Q15"
        },
        {
            "question": "RQP, ONM, _, IHG, FED, find the missing letters.",
            "correctOp": "LKJ",
            "part": "Logical",
            "wei": "EASY",
            "options": "[{\"options\":\"CDE\",\"id\":1},{\"options\":\"\\nLKI\",\"id\":2},{\"options\":\"\\nLKJ\",\"id\":3},{\"options\":\"\\nBAC\",\"id\":4}]",
            "qid": "Q16"
        },
        {
            "question": "Which of the following is not javascript data types?",
            "correctOp": "All of the mentioned",
            "part": "Coding",
            "wei": "EASY",
            "options": "[{\"options\":\"Null type\",\"id\":1},{\"options\":\"\\nUndefined type\",\"id\":2},{\"options\":\"\\n Number type\",\"id\":3},{\"options\":\"\\n All of the mentioned\",\"id\":4}]",
            "qid": "Q17"
        },
        {
            "question": "Thomas White, who orchestrated ___________ rescue packages, will address the group.",
            "correctOp": "Multi billion-dollar",
            "part": "Grammer",
            "wei": "EASY",
            "options": "[{\"options\":\"Multi billion-dollars\",\"id\":1},{\"options\":\"Multi billions dollars\",\"id\":2},{\"options\":\"Multi billion-dollar\",\"id\":3},{\"options\":\"Multi billion dollar\",\"id\":4}]",
            "qid": "Q18"
        },
        {
            "question": "What is the extension of java code files?",
            "correctOp": " .java",
            "part": "Coding",
            "wei": "EASY",
            "options": "[{\"options\":\".js\",\"id\":1},{\"options\":\"\\n .txt\",\"id\":2},{\"options\":\"\\n .class\",\"id\":3},{\"options\":\"\\n .java\",\"id\":4}]",
            "qid": "Q19"
        },
        {
            "question": "PETAL: FLOWER",
            "correctOp": "Engine: Car",
            "part": "Logical",
            "wei": "EASY",
            "options": "[{\"options\":\"Pen: Paper\",\"id\":1},{\"options\":\"\\nEngine: Car\",\"id\":2},{\"options\":\"\\nCat: Dog\",\"id\":3},{\"options\":\"\\nBall: Game\",\"id\":4}]",
            "qid": "Q21"
        }
    ]
    const filteredMcqQuestion = data.filter((item) =>
        item.question.toLowerCase().includes(mcqQuestion.toLowerCase())
    );
    console.log(filteredMcqQuestion[0].options)

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
                            onChange={handleMcqQuestion}
                            value={mcqQuestion}
                        />
                    </div>
                    <div className='add-button'>
                        <Link to="/addoreditmcq">
                            <button>
                                <span className='add-icon'><FontAwesomeIcon icon={faPlus} /> </span> Add
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                {filteredMcqQuestion.map((i, index) => (
                    <div className='questionbank-component'>
                        <div className='questionbank-card'>
                            <div>
                                <div key={i.qid}>
                                    <div className='question-data'>
                                        <h3>Question : </h3>
                                        <p >{i.question}</p>
                                    </div>
                                    <div className='question-data'>
                                        <h3>Correct Option :</h3>
                                        <p> {i.correctOp}</p>
                                    </div>
                                    <div className='question-data'>
                                        <h3>Part :</h3>
                                        <p> {i.part}</p>
                                    </div>
                                    <div className='question-data'>
                                        <h3>Weightage :</h3>
                                        <p> {i.wei}</p>
                                    </div>
                                    <div className='question-data'>
                                        <h3>Option :</h3>
                                       <p> {JSON.parse(i.options).map(option => (
                                            <div key={option.id}>Option {option.id} : {option.options}</div>
                                        ))}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className='edit-delete-button'>
                                    <div className='edit-button'>
                                        <Link to="/addoreditmcq">
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
