import React from "react";
import "../Css/event.css";

export const Event = ({ event, setOpenModal, homeCall }) => {

  return (
    <div className="event-wrap">
      <div
        className="event-list"
        onClick={() => {
          setOpenModal(true);
          return homeCall(event.PublishedEventRef);
        }}
      >
       {/*  data formating on screen ispending */}
        <pre> 
          Event Name: {event.EventName} <br />
          Club Name: {event.ClubName} <br />
          Date: {event.Date} <br />
          Timings: {event.Timings}
        </pre>
      </div>
    </div>
  );
};
