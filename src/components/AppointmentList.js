import React from "react";
import AppointmentCard from "./AppointmentCard";

export default function AppointmentList({ appointmentList, onDeletingAppointment }) {
  return (
    <div>
      {appointmentList.map((appointment) => {
        return (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onDeletingAppointment={onDeletingAppointment}
          />
        );
      })}
    </div>
  );
}
