"use client";

import React, { useState } from 'react';
import ContactPopup from './ContactPopup';

export default function ContactButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button 
        onClick={(e) => { e.preventDefault(); setIsPopupOpen(true); }}
        className="hero-cta-secondary"
      >
        Get in touch
      </button>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
