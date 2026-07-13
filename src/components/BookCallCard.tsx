"use client";

import React, { useState } from 'react';
import CallCalendar from './CallCalendar';
import ContactPopup from './ContactPopup';

export default function BookCallCard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div 
        id="call-calendar" 
        className="about-card call-card" 
        onClick={() => setIsPopupOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <div className="call-content">
          <h3>Book a call with me</h3>
          <p>I&apos;d love to chat even if there&apos;s no agenda!</p>
        </div>
        <CallCalendar />
      </div>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
