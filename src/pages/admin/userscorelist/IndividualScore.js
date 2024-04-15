import React from 'react'
import ColumnbarChart from './ColumnBarChart'

export const IndividualScore = () => {
    const indata = [
        {
            "userId": 1,
            "name": "hello",
            "password": "123",
            "email": "ko@gmail.com",
            "mcqQues": "[\n {\"Qid\": \"1\", \"ans\": \"12\"},\n {\"Qid\": \"2\", \"ans\": \"54\"},\n {\"Qid\": \"5\", \"ans\": \"we\"}\n]\n\n\n",
            "mcqMarks": "{\"coding\":1,\"grammer\":3,\"logical\":5}",
            "codeQues": "{\"ans\":\" import java.util.*;\\npublic class Main{\\n public static void main(String[] args) {\\n Scanner s=new Scanner(System.in)\\n String z=s.next();\\n int b=s.nextInt()\\n System.out.println(z);\\n }} \",\"Qid\":\"2\"}",
            "codeMarks": "30",
            "totalMarks": 31,
            "userFeedback": null,
            "adminFeedback": null,
            "role": "GUEST",
            "stack": "react"
        }
    ]
    console.log(indata.name)
    return (
        <>
            <div className='score-container'>
                <div className='score-card'>
                    <div className='score-flex'>
                        <div className='score-flex1'>
                            {
                                indata.map(i => (
                                    <>
                                        <h1>Score</h1>
                                        <div className='individual-score'>
                                            <h2>Name :</h2>
                                            <h2 className='score-datas'>{i.name}</h2>
                                        </div>
                                        <div className='individual-score'>
                                            <h2>Email :</h2>
                                            <h2 className='score-datas'>{i.email}</h2>
                                        </div>
                                        <div className='individual-score'>
                                            <h2>Mcq Marks :</h2>
                                            <div className='mcq-list'>
                                                <ul>
                                                    <li>
                                                        <div className='mcq-score'>
                                                            <h3>Grammar :</h3><h4 className='mcq-datas'>{JSON.parse(i.mcqMarks).grammer}</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='mcq-score'>
                                                            <h3>Logical :</h3><h4 className='mcq-datas'>{JSON.parse(i.mcqMarks).logical}</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='mcq-score'>
                                                            <h3>Programming :</h3><h4 className='mcq-datas'>{JSON.parse(i.mcqMarks).coding}</h4>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='individual-score'>
                                            <h2>Code Marks:</h2>
                                            <h2 className='score-datas'>{i.codeMarks}</h2>
                                        </div>
                                        <div className='individual-score'>
                                            <h2>Total Marks:</h2>
                                            <h2 className='score-datas'>{i.totalMarks}</h2>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        <div className='score-flex2'>
                            <ColumnbarChart />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
