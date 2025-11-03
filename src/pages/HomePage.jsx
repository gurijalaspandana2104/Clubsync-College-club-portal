// import React, { useState, useEffect } from 'react';
// import CalendarComponent from './CalenderComponent';
// import MapComponent from './MapComponent';
// import '../index.css'; // Import the CSS file for styling

// const HomePage = () => {
//   const [events, setEvents] = useState([
//     {
//       title: 'Sample Event',
//       description: 'This is a sample event description.',
//       date: '2025-05-15',
//       image: 'https://via.placeholder.com/150',
//     },
//   ]);

//   useEffect(() => {
//     // Replace with Firebase logic to fetch events dynamically
//     // Example: fetchEventsFromFirebase();
//   }, []);

//   return (
//     <div className="homepage">
//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Welcome to Clubsync</h1>
//         <p>Connecting students and events at your fingertips</p>
//         <button className="cta-button">Get Started</button>
//       </section>

//       {/* About Section */}
//       <section className="about">
//         <h2>About Clubsync</h2>
//         <p>
//           Clubsync is a platform that allows clubs to seamlessly manage their events, stay
//           connected, and make the most of every opportunity. Whether you're a member or a coordinator, 
//           Clubsync makes it easy to share, track, and attend events.
//         </p>
//       </section>

//       {/* Events Section */}
//       <section className="events">
//         <h2>Upcoming Events</h2>
//         <div className="events-list">
//           {events.map((event, index) => (
//             <div className="event-card" key={index}>
//               <img src={event.image} alt={event.title} className="event-image" />
//               <div className="event-details">
//                 <h3>{event.title}</h3>
//                 <p>{event.description}</p>
//                 <p>{event.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Google Maps Section */}
//       <section className="map-section">
//         <h2>Find Us on the Map</h2>
//         <MapComponent />
//       </section>

//       {/* Google Calendar Integration */}
//       <section className="calendar-section">
//         <h2>Add Event to Your Calendar</h2>
//         <CalendarComponent />
//       </section>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import CalendarComponent from './CalenderComponent';
import MapComponent from './MapComponent';
import '../index.css';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEventsFromFirebase = async () => {
      try {
        const q = query(collection(db, 'events'), orderBy('date', 'asc'));
        const querySnapshot = await getDocs(q);
        const eventsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEventsFromFirebase();
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Clubsync</h1>
        <p>Connecting students and events at your fingertips</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Clubsync</h2>
        <p>
          Clubsync is a platform that allows clubs to seamlessly manage their events, stay
          connected, and make the most of every opportunity. Whether you're a member or a coordinator, 
          Clubsync makes it easy to share, track, and attend events.
        </p>
      </section>

      {/* Events Section */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <div className="events-list">
          {events.length === 0 ? (
            <p className="text-gray-500">No upcoming events yet.</p>
          ) : (
            events.map((event, index) => (
              <div className="event-card" key={index}>
                <img src={event.image || 'https://via.placeholder.com/150'} alt={event.title} className="event-image" />
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p>{event.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="map-section">
        <h2>Find Us on the Map</h2>
        <MapComponent />
      </section>

      {/* Google Calendar Integration */}
      <section className="calendar-section">
        <h2>Add Event to Your Calendar</h2>
        <CalendarComponent />
      </section>
    </div>
  );
};

export default HomePage;
