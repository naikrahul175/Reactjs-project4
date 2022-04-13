import React, { useState } from "react";
import { Events } from "./Events";
import { Navbar } from "./Navbar";
import { Modal } from "./Modal";

export const Home = () => {
  const [modalOpen, setOpenModal] = useState(false);
  const [eventRef, setEventReft] = useState("") // state for PublishedEventRef
  
  const setModalOpen = () => {
    setOpenModal(false);
  };
          // handleCallBack => PublishedEventRef from event
  const handleCallBack =(childData)=> {
       setEventReft(childData); // 
  }

  return (
    <div className="home-page">
      {modalOpen ? (
        <Modal setOpenModal={setModalOpen} eventRef={eventRef}/>
      ) : (
        <>
          <Navbar />
          <Events setOpenModal={setOpenModal} homeCall={handleCallBack}/>
        </>
      )}
    </div>
  );
};
