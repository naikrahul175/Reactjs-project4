import React, { useState, useEffect } from "react";
import "../Css/modal.css";

export const Modal = ({ setOpenModal ,eventRef}) => {
  const [PublishedEvents, setPublishedEvents] = useState([{}])

  // credentials takes AuthToken from localStorage
  const credentials = localStorage.getItem("loginDetails");
  //  console.log(Object.keys(test));
  const { AuthToken } = JSON.parse(credentials);
    // console.log(AuthToken);

  useEffect(() => {
    getPublishedEvents();
  }, []);

  const getPublishedEvents = () => {
    fetch(
      "http://139.59.63.178:5454/api/customer/getpublishedeventdetails?publishedeventref=" + eventRef,
      {
        method: "GET",
        headers: {
          Authorization: "SEdRYnN6ZFFFRjpuc0oySXQ0NWt5",
          AppVersion: "1.0.0",
          AuthToken,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          console.log("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setPublishedEvents(data.Details);
        console.log(data);
        // console.log(PublishedEvents);
      })
      .catch((err) => {
        console.error(
          "There has been a problem with your fetch operation:",
          err
        );
      });
  };

  //  console.log(PublishedEvents);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>

          { PublishedEvents.map((data,index) => {
              return(
               <>
               {console.log(data)}
               <li key={index}>hello  </li>
               </>
              )
          })
          }

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};
