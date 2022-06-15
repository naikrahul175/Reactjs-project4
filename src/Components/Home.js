import React, { useState } from "react";
import { Events } from "./Events";
import { Navbar } from "./Navbar";
import { Modal } from "./Modal";
import "../Css/home.css"

export const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [eventRef, setEventRef] = useState("") // state for PublishedEventRef
  
        // handleCallBack => PublishedEventRef from event
  const handleCallBack = (childData) => {
      //  setEventReft(childData); //
       setEventRef(childData) 
      // const value = childData;
       setModalOpen(true);
      // console.log(value);
  }

  return (
    <div className="home-page">
      { modalOpen ? (
        <Modal setOpenModal={setModalOpen} eventRef={eventRef}/>
      ) : (
        <>
          <Navbar />
          <Events setOpenModal={setModalOpen} homeCall={handleCallBack}/>
        </>
      )}
    </div>
  );
};

