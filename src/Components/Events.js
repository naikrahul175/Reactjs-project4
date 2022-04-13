import React, { useState, useEffect } from "react";
import { Calender } from "./Calender";
import { Event } from "./Event";

export const Events = ({ setOpenModal, homeCall }) => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  // credentials takes AuthToken from localStorage
  const credentials = localStorage.getItem("loginDetails");
  //  console.log(Object.keys(test));
  const { AuthToken } = JSON.parse(credentials);
  //  console.log(AuthToken);

  useEffect(() => {
    convertDateFormat(date);
    // fetchEventData();
  }, []);
  //events data fetch
  const fetchEvents = (dt) => {
    // console.log(dt);
    // dt => date
    fetch(
      "http://139.59.63.178:5454/api/customer/getallpublishedevents?Date=" + dt,
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
          console.log("error in network");
        }
        return res.json();
      })
      .then((data) => {
        // if(data.Details.json == null) {
        //   alert("No Events on these data:"+dt);
        // }
        setEvents(data.Details);
        console.log(data);
        // console.log(events);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
  //change date as per the api needs
  const convertDateFormat = (date) => {
    const localDate = date.toLocaleString(); //coverted to localDate
    const result = localDate.split(","); // result => dd/mm/yy format
    const dt = result[0].replace(/[\W_]/g, "-"); // replaces "/"  with "-"

    return fetchEvents(dt);
  };

  return (
    <div className="events-wrapper">
      <div className="e-top">
        <Calender date={date} setDate={setDate} CDF={convertDateFormat} />
      </div>
      <div className="e-bottom">
        {events.map((list) => {
          return (
            <div className="events" key={list.PublishedEventRef}>
              <Event
                event={list}
                setOpenModal={setOpenModal}
                homeCall={homeCall}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
