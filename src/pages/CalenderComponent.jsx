import React from 'react';

const CalendarComponent = () => {
  const handleAddToCalendar = () => {
    const eventDetails = {
      title: 'Sample Event',
      description: 'This is a sample event description.',
      location: '123 College Street',
      startTime: '2025-05-15T10:00:00Z',
      endTime: '2025-05-15T12:00:00Z',
    };
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventDetails.title}&details=${eventDetails.description}&location=${eventDetails.location}&dates=${eventDetails.startTime}/${eventDetails.endTime}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <button onClick={handleAddToCalendar} className="calendar-button">
      Add to Google Calendar
    </button>
  );
};

export default CalendarComponent;
