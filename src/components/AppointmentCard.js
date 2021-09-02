import React from 'react'

import {ImCross} from 'react-icons/im'

export default function AppointmentCard({appointment}) {
    console.log(appointment)
    return (
        <>
        <div className="grid grid-cols-7 gap-3 my-2" >
            <img src="#" alt="temp" className="inline-block"/>
            <div className="inline-block col-span-3">
                <h3>{appointment.petName}</h3>
                <p>{appointment.ownerName}</p>
                <p>{appointment.aptNote}</p>
            </div>
            <div className="inline-block col-span-2">{appointment.aptDate}</div>
            <button ><ImCross className="inline-block mt-1 text-red-400"/> </button>
            
        </div>
        <hr />
        </>
    )
}
