import { ImCalendar } from "react-icons/im";

import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";
import AppointmentList from "./components/AppointmentList";

// import appointmentList from "./data.json";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("ascending");

  const LOCAL_STORAGE_KEY = "appointments"
  const order = orderBy === "ascending" ? 1 : -1;

  // Fetching data from "data.json" -> since it is in public folder so it acts like API
  // const fetchData = useCallback(() => {
  //   fetch("./data.json")
  //     .then((resp) => resp.json())
  //     .then((data) => setAppointmentList(data));
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  // Filtering out the Appointment List based on the "SEARCH STRING" provided by the user
  const filteredList = appointmentList
    .filter(
      (appointment) =>
        appointment.petName
          .toLowerCase()
          .includes(searchString.toLowerCase()) ||
        appointment.ownerName
          .toLowerCase()
          .includes(searchString.toLowerCase()) ||
        appointment.apptNotes.toLowerCase().includes(searchString.toLowerCase())
    )
    // Sorting and Ordering the filteredList based on the user selections
    .sort((a, b) => {
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * Number(order)
        : 1 * Number(order);
    });

  // Adding new appointments to the state
  const handleAddAppointmentSubmit = (newAppointment) => {
    setAppointmentList([newAppointment, ...appointmentList]);
  };

  // Deleting the appointments from the state
  const handleAppointmentDelete = (id) => {
    const updatedAppointmentList = appointmentList.filter(
      (appointment) => appointment.id !== id
    );
    setAppointmentList(updatedAppointmentList);
  };

  // Retriving the Local Storage data and saving it to State.
  useEffect(()=>{
    const retrievedAppointmentsFromLocalStroage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setAppointmentList(retrievedAppointmentsFromLocalStroage);
  },[])

  // Storing into the Local Storage 
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(appointmentList));
  },[appointmentList])

  return (
    <div className="border-box" style={{ height: "100vh", width: "100%" }}>
      <div className="container mx-auto xs:px-4 sm:px-8 md:px-20 lg:px-80">
        <h1 className="text-4xl font-thin text-center mt-2 mb-10">
          <ImCalendar className="inline-block mx-2 text-red-400" />
          Lucid Appointment
        </h1>
        <AddAppointment
          lastId={appointmentList.reduce(
            (max, appt) => (Number(appt.id) > max ? Number(appt.id) : max),
            0
          )}
          onSubmitingNewAppointment={handleAddAppointmentSubmit}
        />
        <div style={{ position: "relative" }}>
          <Search
            searchString={searchString}
            onSearchStringChange={(searchedString) => {
              // console.log(searchedString);
              setSearchString(searchedString);
            }}
            sortBy={sortBy}
            onSettingSortBy={(sortString) => setSortBy(sortString)}
            orderBy={orderBy}
            onSettingOrderBy={(orderString) => setOrderBy(orderString)}
          />
          <AppointmentList
            appointmentList={filteredList}
            onDeletingAppointment={handleAppointmentDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
