"use client";

import React, { useState, useEffect } from 'react';

export default function CallCalendar() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentDate(new Date());
  }, []);

  if (!currentDate) {
    return (
      <div className="call-calendar-wrapper">
         <div className="call-calendar-panel" style={{ height: '180px' }}></div>
      </div>
    );
  }

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = currentDate.getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonthName = monthNames[month];

  const todayDateObj = new Date(year, month, today);
  const dayOfWeek = todayDateObj.getDay();
  const startOfWeek = new Date(year, month, today - dayOfWeek);

  const daysToRender = [];
  for (let i = 0; i < 21; i++) {
    const d = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + i);
    daysToRender.push({
      date: d.getDate(),
      month: d.getMonth(),
      isToday: d.getDate() === today && d.getMonth() === month,
      key: `day-${i}`
    });
  }

  return (
    <div className="call-calendar-wrapper">
      <div className="call-calendar-panel">
        <div className="cal-header">
          <span>{currentMonthName}, {year} <span className="bullet">•</span> 30 min call</span>
        </div>
        <div className="cal-days">
          <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
        </div>
        <div 
          className="cal-nums" 
          style={{ 
            maxHeight: '75px', 
            overflow: 'hidden',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        >
          {daysToRender.map(dayObj => (
            <span key={dayObj.key} className={`day ${dayObj.isToday ? 'today' : ''} ${dayObj.month !== month ? 'empty' : ''}`}>
              {dayObj.date}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
