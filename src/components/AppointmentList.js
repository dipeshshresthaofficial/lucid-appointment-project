import React from 'react'
import AppointmentCard from './AppointmentCard'

export default function AppointmentList({appointmentList}) {
    return (
        <div>
            {
                appointmentList.map((appointment)=>{

                   return <AppointmentCard key={appointment.id} appointment={appointment} />
                })
            }
        </div>
    )
}
