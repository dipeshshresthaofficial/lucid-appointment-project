import React,{useState} from "react";

import { BiSearchAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = () => {
  return (
    <div className="border-2 w-44 p-3 float-right">
      <div >
        <p className="inline-block mr-3">Pet Name</p>
        <BiSearchAlt className="inline-block" />
      </div>
      <div >
        <p className="inline-block mr-3">Owner Name</p>
        <BiSearchAlt className="inline-block" />
      </div>
      <div className="mb-2">
        <p className="inline-block mr-3">Pet Name</p>
        <BiSearchAlt className="inline-block" />
      </div>
      <hr />
      <div className="mt-1">
        <p className="inline-block mr-3">Ascending</p>
        <BiSearchAlt className="inline-block" />
      </div>
      <div >
        <p className="inline-block mr-3">Descending</p>
        <BiSearchAlt className="inline-block"/>
      </div>
    </div>
  );
};

function Search() {
    const [toggleSortBy, setToggleSortBy] = useState(false);
  return (
    <>
      <div className="realtive mt-3 inline-block border-2 rounded-l-md pl-3 w-full">
        <div className="inline-block  w-5/6">
          <BiSearchAlt className="inline-block w-1/12 text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className="inline-block border-none outline-none w-11/12"
          />
        </div>
        <div className="inline-block w-1/6">
          <button className="w-full py-2 px-2 border-2 border-blue-400 bg-blue-400 focus:bg-blue-700 text-white focus:outline-none " onClick={()=> setToggleSortBy(!toggleSortBy)}> 
            Sort by <RiArrowDropDownLine className="inline-block" />{" "}
          </button>
        </div>
      </div>
      {toggleSortBy && <DropDown/> }
    </>
  );
}

export default Search;
