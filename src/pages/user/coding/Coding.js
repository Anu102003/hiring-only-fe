import React, { useState } from 'react'
import "../../../assets/user/codingquestion.css"
import { Editor } from './Editor'
import { useNavigate } from 'react-router-dom'

export const Coding = () => {
    const navigate=useNavigate()
    const data = [
        {
            "question": "The math assignment says you will be given numbers, mostly with imaginary additions, that means complex numbers, and you need to add them and tell the answer in your answer script. You told your friend John that you don’t know the addition of complex numbers, so John will write a program, which you can write in order to get the results of addition.John knows Object oriented programming enough to complete the task.",
            "input": "4 5 2,3 2 1 5",
            "output": "4 + 5i\n6 + 5i\n10 + 10i",
            "wei": "MEDIUM",
            "qid": "Q1"
        },
        {
            "question": "Given a sting , return the character that appears the minimum number of times in the string. The string will contain only ascii characters, from the ranges (“a”-”z”,”A”-”Z”,0-9), and case matters . If there is a tie in the minimum number of times a character appears in the string return the character that appears first in the string.",
            "input": "cdadcda",
            "output": "c",
            "wei": "EASY",
            "qid": "Q2"
        },
        {
            "question": "There are some groups of devils and they splitted into people to kill them. Devils make People to them left as their group and at last the group with maximum length will be killed. Two types of devils are there namely “@” and “$”\nPeople is represented as a string “P”",
            "input": "PPPPPP@PPP@PP$PP",
            "output": "7.0",
            "wei": "EASY",
            "qid": "Q3"
        },
        {
            "question": "Rahul copies in the exam from his adjacent students. But he doesn’t want to be caught, so he changes words keeping the letter constant. That means he interchanges the positions of letters in words. You are the examiner and you have to find if he has copied a certain word from the one adjacent student who is giving the same exam, and give Rahul the markings he deserves.Note that: Uppercase and lowercase are the  same.",
            "input": "CAR\n\nAcr",
            "output": "1.0",
            "wei": "EASY",
            "qid": "Q5"
        },
        {
            "question": "You have an array A of N integers A1 A2 .. An. Find the longest increasing subsequence Ai1 Ai2 .. Ak (1 <= k <= N) that satisfies the following condition: For every adjacent pair of numbers of the chosen subsequence Ai[x] and Ai[x+1] (1 < x < k), the expression( Ai[x] & Ai[x+1] ) * 2 < ( Ai[x] | Ai[x+1] ) is true  Note: ‘&’ is the bitwise AND operation, ‘ | ‘ is the bit-wise OR operation",
            "input": "5\n15\n6\n5\n12\n1",
            "output": "2.0",
            "wei": "HARD",
            "qid": "Q10"
        },
        {
            "question": " You have been given a string S of length N. The given string is a binary string which consists of only 0’s and ‘1’s. Ugliness of a string is defined as the decimal   number that this binary string represents.",
            "input": "4\n1111\n7\n1\n2",
            "output": "1.0",
            "wei": "MEDIUM",
            "qid": "Q11"
        },
        {
            "question": "You are given two strings s and sub. You are also given a 2D character array mappings where mappings[i] = [oldi, newi] indicates that you may perform the following operation any number of times:\nReplace a character oldi of sub with newi.\nEach character in sub cannot be replaced more than once.\nReturn true if it is possible to make sub a substring of s by replacing zero or more characters according to mappings. Otherwise, return false.\nA substring is a contiguous non-empty sequence of characters within a string.",
            "input": "s = \"fool3e7bar\", sub = \"leet\", mappings = [[\"e\",\"3\"],[\"t\",\"7\"],[\"t\",\"8\"]]",
            "output": "TRUE()",
            "wei": "HARD",
            "qid": "Q12"
        }
    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(data.length).fill(''));
    const handleNextQuestion = () => {
        if (currentQuestionIndex < data.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleAnswerChange = (answer) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = answer;
        setUserAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        console.log('User Answers:', userAnswers);
        navigate('/score')
    };
    const currentQuestion = data[currentQuestionIndex];

    return (
        <>
           
            <div className='coding-question-heading'>
                <h1>Coding</h1>
            </div>
            <div className='coding-container'>
                <div className='coding-question-card'>
                    <h3>Queston :</h3>
                    <p>{currentQuestion.question}</p>
                    {/* <p>Given an array A of size N and an integer B you have to return the same array after rotating it B times towards the right</p> */}
                    <h3>Test Cases :</h3>
                    <h3>Sample Input 1 :</h3>
                    <div className='sample-input'>
                        <p>{currentQuestion.input}</p>
                    </div>
                    <h3>Sample Output 1 :</h3>
                    <div className='sample-input'>
                        <p>{currentQuestion.output}</p>
                    </div>
                    <h3>Output</h3>
                    <div className='sample-input'>
                        <p></p>
                    </div>
                    <h3>Success / Error :</h3>
                    <div className='sample-input'>
                        <p></p>
                    </div>
                </div>
                <div className='editor-wrapper'>
                    <div className='editor'>
                        <Editor
                            initialValue={userAnswers[currentQuestionIndex]}
                            onEditorChange={handleAnswerChange}
                        />
                        <div className='coding-button'>

                            <button className='next-button' onClick={handleNextQuestion} disabled={currentQuestionIndex === data.length - 1}>
                                Next
                            </button>
                            {/* <button className='run-button' >Run code</button> */}
                            {
                                currentQuestionIndex===data.length-1 &&
                                <button className='submit-button' onClick={handleSubmit}>Submit Code</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

