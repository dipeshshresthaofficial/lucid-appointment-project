import React, { useState } from "react";

import { ImCross } from "react-icons/im";

export default function AppointmentCard({
  appointment,
  onDeletingAppointment,
}) {
  // console.log(appointment)
  const [toggleSeeMore, setToggleSeeMore] = useState(false);
  return (
    <>
      <div className="grid grid-cols-8 gap-3 my-2">
        <img
          src={appointment.img}
          alt="temp"
          className="inline-block h-100 w-full object-cover"
        />
        <div className="inline-block col-span-4">
          <p className="text-2xl text-red-400">{appointment.petName}</p>
          <p className="text-base">{appointment.ownerName}</p>
          <p className="text-xs">
            {`${
              toggleSeeMore
                ? appointment.apptNotes
                : appointment.apptNotes.substring(0, 40) + "..."
            }`}{" "}
            <button
              onClick={() => setToggleSeeMore(!toggleSeeMore)}
              className="text-blue-400"
            >
              {appointment.apptNotes.length > 40? toggleSeeMore? "see less" : "see more":""}
            </button>
          </p>
        </div>
        <div className="inline-block col-span-2 text-xs text-center">
          {appointment.apptDates}
        </div>
        <button>
          <ImCross
            onClick={() => onDeletingAppointment(appointment.id)}
            className="inline-block mt-1 text-red-400"
          />{" "}
        </button>
      </div>
      <hr />
    </>
  );
}
