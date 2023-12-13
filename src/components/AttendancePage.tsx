import "../css/AttendancePage.css";
import CheckIn from "./CheckIn";
import Filters from "./Filters";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const AttendancePage = () => {
  //defining state variables
  const backendUrl = "https://jesa-backend.onrender.com";
  const [userList, setUserList] = useState([]);
  const [filters, setFilters] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    contactNo: "",
    award: "",
    category: "",
    attended: "",
  });
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isloading, setIsLoading] = useState(true);

  //fetching data from backend
  const getUsers = async () => {
    try {
      const response = await axios.get(backendUrl + "/user/list");
      setUserList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(`Error: ${error}`);
    }
  };
  useEffect(() => {
    getUsers();
  }, [currentFilter]);

  //get data from backend on page load using useEffect
  useEffect(() => {
    const fetchData = async () => {
      // Getting filters from the userList award field and grouping them
      if (userList.length > 0) {
        let awardList: any = [];
        userList.forEach((user: any) => {
          awardList.push(user.award);
        });
        awardList = [...new Set(awardList)];
        setFilters(awardList);
      }
    };
    fetchData();
  }, [userList]);

  // get a set of users based on the selected filter
  useEffect(() => {
    if (currentFilter !== "") {
      let filteredAttendeesList: any = [];
      if (userList.length > 0) {
        userList.forEach((user: any) => {
          if (user.award === currentFilter) {
            filteredAttendeesList.push(user);
          }
        });
      }
      setFilteredData(filteredAttendeesList);
    }
  }, [currentFilter]);

  // getting changes from the search bar
  useEffect(() => {
    if (searchText !== "") {
      setCurrentFilter("");
      let filteredAttendeesList: any = [];
      if (userList.length > 0) {
        userList.forEach((user: any) => {
          if (user.name.toLowerCase().includes(searchText.toLowerCase())) {
            filteredAttendeesList.push(user);
          }
          if (user.contactNo.toLowerCase().includes(searchText.toLowerCase())) {
            filteredAttendeesList.push(user);
          }
        });
      }
      setFilteredData(filteredAttendeesList);
    }
  }, [searchText]);
  // get the search value
  const searchAttendee = (event: any) => {
    setSearchText(event.target.value);
  };
  // clear the search bar
  const clearSearch = () => {
    setSearchText("");
    setFilteredData([]);
  };

  //rendering the page
  return (
    <>
      {isloading ? <Loading /> : null}
      <div className="attendance-page">
        {/* heading section */}
        <div className="ap-heading">
          <div className="ap-title">
            <h1>JESA 2023</h1>
            <h2>
              <span>Attendance</span>Marking System
            </h2>
          </div>

          {/* search section */}
          <div className="search-bar">
            <input
              type="text"
              value={searchText}
              onChange={searchAttendee}
              placeholder="Search an attendee"
              className="search-box"
            ></input>
            {/* change the icon depend on the input */}
            {searchText === "" ? (
              <i className="fa fa-search"></i>
            ) : (
              <i className="fa fa-times" onClick={clearSearch}></i>
            )}
          </div>
        </div>

        {/* Check in section */}
        <div className="ap-body">
          {/* filtering component */}
          <Filters
            filterData={filters}
            updateFilter={setCurrentFilter}
            currentFilter={currentFilter}
            searchText={setSearchText}
          />
          <CheckIn
            userData={
              currentFilter !== "" || searchText !== ""
                ? filteredData
                : userList
            }
            filterData={filters}
            updateFilter={setCurrentFilter}
            updateSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
            resetSearch={clearSearch}
            getAllData={getUsers}
            backendUrl={backendUrl}
          />
        </div>
      </div>
    </>
  );
};

export default AttendancePage;
