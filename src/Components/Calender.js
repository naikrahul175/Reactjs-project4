import React, { useState } from "react";
import Calendar from "react-calendar";
import "../Css/calender.css";

export const Calender = ({date,setDate,CDF}) => {
  //  console.log(date);

  const onChange = (date) => {
      setDate(date); 
     return CDF(date);
  };

  return (
    <div className="calender">
      <div className="calender-wrap">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

