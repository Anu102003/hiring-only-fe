import React from 'react'

export const Participant = (search) => {
    const data = [
        {
            "email": "sxs@dscd",
            "aoi": "react",
        },
        {
            "email": "d@dscd",
            "aoi": "java",
        }
    ]
    const filteredParticipant= data.filter((item) =>
        item.email.toLowerCase().includes((search.search).toLowerCase())
    );
//     console.log(filteredParticipant)
//    console.log(search.search)


return (
    <>
        {filteredParticipant.map((a, index) => (
            <>
                <div className='add-component'>
                    <div className='add-participant-level'>

                        <div className='add-participant-item'><h2>Email :</h2><h3 className='add-component-item-h2'>{a.email}</h3></div>
                        <div className='add-participant-item'><h2>Area of Interest :</h2><h3 className='add-component-item-h2'>{a.aoi}</h3></div>

                    </div>
                </div>
            </>))}
    </>
)
}
