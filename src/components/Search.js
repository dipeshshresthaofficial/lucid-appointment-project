import React, { useState } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = ({sortBy,onSettingSortBy, orderBy, onSettingOrderBy}) => {
  return (
    <div
      className="border-2 w-44 p-3 float-right bg-white"
      style={{ position: "absolute", right: "0" }}
    >
      <button
        className="grid grid-cols-2 gap-x-28"
        onClick={() => onSettingSortBy("petName")}
      >
        <p className="inline-block mr-3">PetName</p>
        {sortBy == "petName" ? (
          <BiSearchAlt className="inline-block mt-1" />
        ) : (
          ""
        )}
      </button>
      <button
        className="grid grid-cols-2 gap-x-28"
        onClick={() => onSettingSortBy("ownerName")}
      >
        <p className="inline-block mr-3">OwnerName</p>
        {sortBy == "ownerName" ? (
          <BiSearchAlt className="inline-block mt-1" />
        ) : (
          ""
        )}
      </button>
      <button
        className="grid grid-cols-2 gap-x-28 mb-2"
        onClick={() => onSettingSortBy("apptNotes")}
      >
        <p className="inline-block mr-3">ApptNotes</p>
        {sortBy == "apptNotes" ? (
          <BiSearchAlt className="inline-block mt-1" />
        ) : (
          ""
        )}
      </button>
      <hr />
      <button
        className="grid grid-cols-2 gap-x-28 mt-1"
        onClick={() => onSettingOrderBy("ascending")}
      >
        <p className="inline-block mr-3">Ascending</p>
        {orderBy == "ascending" ? (
          <BiSearchAlt className="inline-block mt-1" />
        ) : (
          ""
        )}
      </button>
      <button
        className="grid grid-cols-2 gap-x-28"
        onClick={() => onSettingOrderBy("descending")}
      >
        <p className="inline-block mr-3">Descending</p>
        {orderBy == "descending" ? (
          <BiSearchAlt className="inline-block mt-1" />
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

function Search({
  searchString,
  onSearchStringChange,
  sortBy,
  orderBy,
  onSettingSortBy,
  onSettingOrderBy,
}) {
  const [toggleSortBy, setToggleSortBy] = useState(false);

  return (
    <>
      <div className="realtive mt-3 inline-block border-2 rounded-l-md pl-3 w-full">
        <div className="inline-block  w-5/6">
          <BiSearchAlt className="inline-block w-1/12 text-2xl text-red-400" />
          <input
            type="text"
            placeholder="Search"
            className="inline-block border-none outline-none w-11/12"
            value={searchString}
            onChange={(e) => onSearchStringChange(e.target.value)}
          />
        </div>
        <div className="inline-block w-1/6">
          <button
            className="w-full py-2 px-2 border-2 border-blue-400 bg-blue-400 text-white focus:outline-none "
            onClick={() => setToggleSortBy(!toggleSortBy)}
          >
            Sort by <RiArrowDropDownLine className="inline-block" />{" "}
          </button>
        </div>
      </div>
      {toggleSortBy && (
        <DropDown
          sortBy={sortBy}
          orderBy={orderBy}
          onSettingSortBy={onSettingSortBy}
          onSettingOrderBy={onSettingOrderBy}
        />
      )}
    </>
  );
}

export default Search;
