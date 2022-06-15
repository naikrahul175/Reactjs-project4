import React from "react";
import "../Css/event.css";

export const Event = ({ event, setOpenModal, homeCall }) => {

  return (
    <div className="event-wrap">
      <div
        className="event-list"
        onClick={()=> homeCall(event.PublishedEventRef)
        // setOpenModal(true); 
        }
      >
        <p> 
          Event Name: {event.EventName} <br />
          Club Name: {event.ClubName} <br />
          Date: {event.Date} <br />
          Timings: {event.Timings}
        </p>
      </div>
    </div>
  );
};
