import { BiArchive } from "react-icons/bi";

import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";
import AppointmentList from "./components/AppointmentList";

import appointmentList from './data.json';

function App() {
  return (
    <div className="border-box" style={{height: "100vh", width: "100%"}}>
      <div className="container mx-auto xs:px-4 sm:px-8 md:px-20 lg:px-80">
        <h1 className="text-4xl font-thin">
          <BiArchive className="inline-block mx-2 text-red-400" />
          Your Appointment
        </h1>
        <AddAppointment />
        <Search />
        <AppointmentList appointmentList={appointmentList}/>
      </div>
    </div>
  );
}

export default App;
