import React from "react";
import { useState } from "react";

export default function AddAppointment() {
    const [toggleForm, setToggleForm] = useState(false);
  return (
    <>
      <div className="mt-3">
        <button className={`bg-blue-400 text-white w-full py-2 focus:bg-blue-700 ${toggleForm ? 'rounded-t' : 'rounded'}`} onClick={()=> setToggleForm(!toggleForm)}>
          Add Appointment
        </button>
      </div>
      {
          toggleForm && <form className="border-2 py-2">
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
              <label>Owner Name</label>
              <input type="text" name="owner-name" className="border-2 rounded " />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
              <label>Pet Name</label>
              <input type="text" name="pet-name" className="border-2 rounded" />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
              <label>Appointment Date</label>
              <input type="text" name="appt-date" className="border-2 rounded" />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2"> 
              <label>Appointment Time</label>
              <input type="text" name="appt-time" className="border-2 rounded" />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
              <label>Appointment Notes</label>
              <input type="text" name="appt-notes" className="border-2 rounded" />
          </div>
      </form>
    
      }
      </>
  );
}
