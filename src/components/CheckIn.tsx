import { useEffect, useState } from "react";
import axios from "axios";
import "../css/CheckIn.css";
import AttendeesList from "./AttendeesList";
import Loading from "./Loading";

const CheckIn = ({
  userData,
  filterData,
  updateFilter,
  updateSelectedUser,
  selectedUser,
  resetSearch,
  getAllData,
  backendUrl,
}: any) => {
  //defining state variables
  const [attendeeName, setAttendeeName] = useState("");
  const [attendeeContactNo, setAttendeeContactNo] = useState("");
  const [attendeeAward, setAttendeeAward] = useState("");
  const [attendeeCategory, setAttendeeCategory] = useState("");
  const [istimeout, setIsTimeout] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [smsText, setSmsText] = useState("");
  const [isloading, setIsLoading] = useState(false);

  // clear the set values
  const clearValues = () => {
    updateFilter("");
    updateSelectedUser({
      id: "",
      name: "",
      contactNo: "",
      award: "",
      category: "",
      attended: "",
    });
    resetSearch();
    setAttendeeName("");
    setAttendeeContactNo("");
    setAttendeeAward("");
    setAttendeeCategory("");
    getAllData();
  };

  // event listeners for each input field
  const handleNameChange = (e: any) => {
    setAttendeeName(e.target.value);
  };
  const handleContactNoChange = (e: any) => {
    setAttendeeContactNo(e.target.value);
  };
  const handleAwardChange = (e: any) => {
    setAttendeeAward(e.target.value);
  };
  const handleCategoryChange = (e: any) => {
    setAttendeeCategory(e.target.value);
  };

  // set the input fields with the selected user data for each click
  useEffect(() => {
    setAttendeeName(selectedUser.name);
    setAttendeeContactNo(selectedUser.contactNo);
    setAttendeeAward(selectedUser.award);
    setAttendeeCategory(selectedUser.category);
  }, [selectedUser]);

  // call the backend to add a new user
  const addNewUser = async () => {
    if (attendeeContactNo !== "" && attendeeName !== "") {
      try {
        setIsLoading(true);
        const response = await axios.post(backendUrl + "/user/add", {
          name: attendeeName,
          contactNo: attendeeContactNo,
          award: attendeeAward,
          category: attendeeCategory,
          attended: true,
        });
        clearValues();
        console.log(response.data);
        getOutput(response.data);
      } catch (error) {
        console.log(error);
        alert(`Error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please fill Name and ContactNo the fields!");
    }
  };
  // call the backend to update a user
  const updateUser = async () => {
    if (attendeeContactNo !== "" && attendeeName !== "") {
      try {
        setIsLoading(true);
        const response = await axios.put(
          backendUrl + `/user/update/${selectedUser.id}`,
          {
            name: attendeeName,
            contactNo: attendeeContactNo,
            award: attendeeAward,
            category: attendeeCategory,
            attended: true,
          }
        );
        clearValues();
        console.log(response.data);
        getOutput(response.data);
      } catch (error) {
        console.log(error);
        alert(`Error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please fill Name and ContactNo the fields!");
    }
  };

  //handling the output from the submission
  const getOutput = (output: any) => {
    animateError();
    const { message, sms, error } = output || {};
    if (message.includes("failed")) {
      setMessageText("Attendance marking failed!");
    } else {
      setMessageText("Attendance marking successfully!");
    }
    if (sms.includes("failed")) {
      setSmsText(`SMS sending failed! Error:${error}`);
    } else {
      setSmsText("SMS sending successfully!");
    }
  };

  // setting auto timeout the error message after 4s
  const animateError = () => {
    setIsTimeout(true);
    setTimeout(() => {
      setIsTimeout(false);
    }, 7000);
  };

  return (
    // display loading when the data is processing
    <>
      {isloading ? <Loading /> : null}
      <div className="ap-check-in-section">
        {/* form section */}
        <div className="ap-form">
          <div className="ap-inputs-area">
            <div className="ap-input-container">
              <label>Name</label>
              <input
                type="text"
                onChange={handleNameChange}
                value={attendeeName}
              ></input>
            </div>
            <div className="ap-input-container">
              <label>Contact No</label>
              <input
                type="text"
                value={attendeeContactNo}
                onChange={handleContactNoChange}
                placeholder="+947XXXXXXXX"
              ></input>
            </div>
            <div className="ap-input-container">
              <label>Associated Award</label>
              <input
                type="text"
                value={attendeeAward}
                onChange={handleAwardChange}
              ></input>
            </div>

            <div className="ap-input-container">
              <label>Category</label>
              <input
                type="text"
                value={attendeeCategory}
                onChange={handleCategoryChange}
              ></input>
            </div>
          </div>
          <div className="ap-button-area">
            <button
              className="ap-form-btn"
              onClick={selectedUser.id === "" ? addNewUser : updateUser}
            >
              {selectedUser.id === "" ? "Add and Mark" : "Update and Mark"}
            </button>
            <button className="ap-form-btn" onClick={clearValues}>
              Clear
            </button>
          </div>
        </div>

        {/* attendees list section */}
        <div className="ap-attendees-list">
          {filterData.map((filter: any) => (
            <AttendeesList
              userData={userData}
              currentFilter={filter}
              key={filter}
              updateSelectedUser={updateSelectedUser}
              selectedUser={selectedUser}
            />
          ))}
          {userData.length === 0 ? (
            <div className="apc-no-data">No attendees available</div>
          ) : null}
        </div>

        {/* error message section */}
        {/* for attendance marking */}
        {messageText.includes("successfully") ? (
          <div
            className={
              istimeout
                ? "apc-message-success apc-msg-hide"
                : "apc-message-success"
            }
          >
            {messageText}
          </div>
        ) : (
          <div
            className={
              istimeout
                ? "apc-message-failed apc-msg-hide"
                : "apc-message-failed"
            }
          >
            {messageText}
          </div>
        )}
        {/* for sms sending */}
        {smsText.includes("successfully") ? (
          <div
            className={
              istimeout ? "apc-sms-success apc-sms-hide" : "apc-sms-success"
            }
          >
            {smsText}
          </div>
        ) : (
          <div
            className={
              istimeout ? "apc-sms-failed apc-sms-hide" : "apc-sms-failed"
            }
          >
            {smsText}
          </div>
        )}
      </div>
    </>
  );
};

export default CheckIn;
