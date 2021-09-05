import React from "react";
import { useState } from "react";

const initialData = {
  petName: "",
  ownerName: "",
  apptNotes: "",
  apptDate: "",
  apptTime: "",
  image:""
};

export default function AddAppointment({lastId,onSubmitingNewAppointment}) {
  const [toggleForm, setToggleForm] = useState(false);
  const [newAppt, setNewAppt] = useState(initialData);

  const handleClick=(e)=>{
    e.preventDefault();
    // console.log(newAppt)
    const updatedNewAppt = {
      id: lastId+1,
      petName: newAppt.petName,
      ownerName: newAppt.ownerName,
      apptNotes: newAppt.apptNotes,
      apptDate: newAppt.apptDate+ " "+newAppt.apptTime,
      img: newAppt.image
    }
    setNewAppt(initialData)
    onSubmitingNewAppointment(updatedNewAppt);

  }

  return (
    <>
      <div className="mt-3">
        <button
          className={`bg-blue-400 text-white w-full py-2 ${
            toggleForm ? "rounded-t" : "rounded"
          }`}
          onClick={() => setToggleForm(!toggleForm)}
        >
          Add Appointment
        </button>
      </div>
      {toggleForm && (
        <form className="border-2 py-2">
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
            <label>Owner Name</label>
            <input
              type="text"
              name="owner-name"
              value={newAppt.ownerName}
              onChange={(e) => {
                setNewAppt({ ...newAppt, ownerName: e.target.value });
              }}
              className="border-2 rounded "
            />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
            <label>Pet Name</label>
            <input
              type="text"
              name="pet-name"
              value={newAppt.petName}
              onChange={(e) => {
                setNewAppt({ ...newAppt, petName: e.target.value });
              }}
              className="border-2 rounded"
            />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
            <label>Appointment Date</label>
            <input
              type="date"
              name="appt-date"
              value={newAppt.apptDate}
              onChange={(e) => {
                setNewAppt({ ...newAppt, apptDate: e.target.value });
              }}
              className="border-2 rounded"
            />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
            <label>Appointment Time</label>
            <input
              type="time"
              name="appt-time"
              value={newAppt.apptTime}
              onChange={(e) => {
                setNewAppt({ ...newAppt, apptTime: e.target.value });
              }}
              className="border-2 rounded"
            />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
            <label>Appointment Notes</label>
            <input
              type="text"
              name="appt-notes"
              value={newAppt.apptNotes}
              onChange={(e) => {
                setNewAppt({ ...newAppt, apptNotes: e.target.value });
              }}
              className="border-2 rounded"
            />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-1 px-5 mb-2">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={newAppt.image}
              onChange={(e) => {
                setNewAppt({ ...newAppt, image: e.target.value });
              }}
              className="border-2 rounded"
            />
          </div>
          <div className="w-full mt-5 mb-3 flex items-center justify-center">
            <button
              onClick={handleClick}
              className="bg-red-400 px-2 py-2 w-4/6 text-white rounded"
            >
              Add Appointment
            </button>
          </div>
        </form>
      )}
    </>
  );
}
