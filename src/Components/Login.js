import React, { useState } from "react";
import "../Css/login.css";

export const Login = ({ setLogin }) => {
  const [Phone, setPhone] = useState("");

  const handleLogin = () => {
    const phoneNumber = { Phone: Phone };
    // using iscustomerpresent endpoint
    fetch("http://139.59.63.178:5454/api/customer/iscustomerpresent", {
      method: "POST",
      headers: {
        Authorization: "SEdRYnN6ZFFFRjpuc0oySXQ0NWt5",
        AppVersion: "1.0.0",
        "Content-Type ": "application/json"
      },
      body: JSON.stringify(phoneNumber),
    })
      .then((res) => {
        if (!res.ok) {
          console.log("Error in the fetch operation");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("loginDetails", JSON.stringify(data.Details)); //data is stored at localStorage
        setLogin(true); // set the state to true
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
  //function for taking the phone number from user
  const handleChange = (e) => {
    setPhone(e.target.value);
    // console.log(Phone)
  };

  return (
    <div className="login-page">
      <div className="login-heading">
        <h3>Log In </h3>
      </div>
     
      <div className="login-form">
        <input
          type="tel"
          placeholder="Enter the Phone Number"
          pattern="[0-9]{10}"
          onChange={handleChange}
        />
        <button onClick={handleLogin} className=" btn-login">
          Submit
        </button>
      </div>
    </div>
  );
};
