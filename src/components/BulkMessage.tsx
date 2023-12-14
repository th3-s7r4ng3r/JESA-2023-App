import "../css/BulkMessage.css";
import axios from "axios";
import { useEffect, useState } from "react";

const BulkMessage = () => {
  //defining state variables
  const backendUrl = "http://localhost:8080";
  const [userList, setUserList] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [messageContent, setMessageContent] = useState("");
  const testcontactList = [
    "+94766885466",
    "+94711766662",
    "+94718938256",
    "+94763886390",
  ];

  // event listeners for each input field
  const handleTextChange = (e: any) => {
    setMessageContent(e.target.value);
  };

  //fetching data from backend
  const getUsers = async () => {
    try {
      const response = await axios.get(backendUrl + "/user/list");
      setUserList(response.data);
    } catch (error) {
      console.log(error);
      alert(`Error: ${error}`);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  //getting the list of contact numbers
  useEffect(() => {
    const contactList: any = [];
    userList.forEach((user: any) => {
      if (user.contactNo !== "") contactList.push(user.contactNo);
    });
    setContactList(contactList);
    console.log(contactList);
  }, [userList]);

  // sending the message
  const sendSMSrequest = async ({ recipientNo, content }: any) => {
    try {
      // configs for api call
      const apiUrl = "https://dashboard.smsapi.lk/api/v3/sms/send";
      //   const apiToken = "41|GuVkuGRBlvf8AhMikKJcgXh8UYqMjPhfpiWARx4P";
      const apiToken = "";
      const senderId = "JESA 2023";
      const message = content;

      // Request Header Parameters
      const headers = {
        Authorization: `Bearer ${apiToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      // Request Body Parameters
      const requestBody = {
        recipient: recipientNo,
        sender_id: senderId,
        type: "plain",
        message: message,
      };

      // Make the HTTP POST request
      const response = await axios.post(apiUrl, requestBody, { headers });

      // Log the response or handle it as needed
      console.log("SMS API Response:", response.data);

      // Return the response
      return response.data;
    } catch (error: any) {
      // Log and handle errors
      console.error("Error sending SMS:", error.message);
      throw error;
    }
  };
  //sending the message one by one
  const sendSMS = async () => {
    var successCount = 0;
    var failCount = 0;
    var msgCount = 0;
    for (let i = 0; i < testcontactList.length; i++) {
      const response = await sendSMSrequest({
        recipientNo: testcontactList[i],
        content: messageContent,
      });
      if (response.status === "success") successCount++;
      else failCount++;
      msgCount++;
    }
    // send the summary message
    sendSMSrequest({
      recipientNo: "+94766885466",
      content: `Total ${msgCount} messages sent. ${successCount} messages sent successfully and ${failCount} messages failed.`,
    });
    alert("Messages sent successfully!" + msgCount + " messages sent");
  };

  // rendering the component
  return (
    <div className="bm-card">
      <div className="bm-title">Bulk Message</div>
      <div className="bm-subtitle">Send SMS to all attendees</div>
      <div className="bm-input">
        <textarea
          className="bm-textarea"
          placeholder="Enter your message here"
          value={messageContent}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <div className="bm-button" onClick={sendSMS}>
        Send
      </div>
    </div>
  );
};

export default BulkMessage;
