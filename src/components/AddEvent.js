// // import React, { useState, useEffect } from 'react';
// // import { db, auth } from '../firebase';
// // import {
// //   addDoc,
// //   collection,
// //   doc,
// //   getDoc,
// //   getDocs,
// //   query,
// //   orderBy,
// //   updateDoc,
// // } from 'firebase/firestore';
// // import { useNavigate } from 'react-router-dom';

// // function AddEvent() {
// //   const [userRole, setUserRole] = useState('');
// //   const [eventData, setEventData] = useState({ title: '', description: '', date: '' });
// //   const [events, setEvents] = useState([]);
// //   const navigate = useNavigate();

// //   // Check role and fetch existing events
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       if (!auth.currentUser) {
// //         navigate('/login');
// //         return;
// //       }

// //       const docRef = doc(db, 'users', auth.currentUser.uid);
// //       const userSnap = await getDoc(docRef);

// //       if (userSnap.exists()) {
// //         const role = userSnap.data().role;
// //         setUserRole(role);
// //         await fetchEvents();
// //       }
// //     };
// //     fetchData();
// //   }, [navigate]);

// //   // Fetch all events
// //   const fetchEvents = async () => {
// //     const q = query(collection(db, 'events'), orderBy('date', 'asc'));
// //     const querySnapshot = await getDocs(q);
// //     const eventList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// //     setEvents(eventList);
// //   };

// //   // Handle adding a new event (only for coordinators)
// //   const handleAdd = async () => {
// //     try {
// //       await addDoc(collection(db, 'events'), {
// //         ...eventData,
// //         createdBy: auth.currentUser.uid,
// //         signupList: [],
// //       });
// //       alert('Event added!');
// //       setEventData({ title: '', description: '', date: '' }); // clear input
// //       fetchEvents(); // refresh list
// //     } catch (err) {
// //       console.error(err);
// //       alert('Failed to add event');
// //     }
// //   };

// //   // Handle registration for an event (only for members)
// //   const handleRegister = async (eventId) => {
// //     try {
// //       const eventRef = doc(db, 'events', eventId);
// //       const eventSnap = await getDoc(eventRef);

// //       if (eventSnap.exists()) {
// //         const updatedSignupList = [...eventSnap.data().signupList, auth.currentUser.uid];
// //         await updateDoc(eventRef, { signupList: updatedSignupList });

// //         alert('Successfully registered for the event!');
// //         fetchEvents(); // refresh event list
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert('Failed to register for the event');
// //     }
// //   };

// //   // Guard if not coordinator (show message for members)
// //   if (userRole !== 'coordinator') {
// //     return <p className="text-center mt-10 text-red-500">Only coordinators can add events.</p>;
// //   }

// //   return (
// //     <div className="p-6 max-w-3xl mx-auto">
// //       <h2 className="text-3xl font-bold text-purple-700 mb-6">Add Event</h2>

// //       {/* Event form only visible to coordinators */}
// //       {userRole === 'coordinator' && (
// //         <div className="space-y-4 mb-8">
// //           <input
// //             className="w-full border border-gray-300 p-2 rounded"
// //             placeholder="Title"
// //             value={eventData.title}
// //             onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
// //           />
// //           <input
// //             className="w-full border border-gray-300 p-2 rounded"
// //             placeholder="Description"
// //             value={eventData.description}
// //             onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
// //           />
// //           <input
// //             className="w-full border border-gray-300 p-2 rounded"
// //             type="date"
// //             value={eventData.date}
// //             onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
// //           />
// //           <button
// //             className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800 transition-all"
// //             onClick={handleAdd}
// //           >
// //             Create Event
// //           </button>
// //         </div>
// //       )}

// //       {/* Event List for both Coordinators and Members */}
// //       <h3 className="text-2xl font-semibold mb-4 text-gray-800">Events</h3>
// //       {events.length === 0 ? (
// //         <p className="text-gray-500">No events added yet.</p>
// //       ) : (
// //         <ul className="space-y-4">
// //           {events.map((event) => (
// //             <li key={event.id} className="border p-4 rounded shadow-sm bg-white">
// //               <h4 className="text-lg font-bold text-purple-700">{event.title}</h4>
// //               <p className="text-gray-600">{event.description}</p>
// //               <p className="text-sm text-gray-500">📅 {event.date}</p>

// //               {/* Register Button for members */}
// //               {userRole !== 'coordinator' && !event.signupList.includes(auth.currentUser.uid) && (
// //                 <button
// //                   className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-700"
// //                   onClick={() => handleRegister(event.id)}
// //                 >
// //                   Register
// //                 </button>
// //               )}

// //               {/* Show list of registered users for coordinators */}
// //               {userRole === 'coordinator' && (
// //                 <div className="mt-2">
// //                   <strong>Registered Participants:</strong>
// //                   <ul>
// //                     {event.signupList.length === 0 ? (
// //                       <li>No one has registered yet.</li>
// //                     ) : (
// //                       event.signupList.map((uid, idx) => (
// //                         <li key={idx}>{uid}</li>
// //                       ))
// //                     )}
// //                   </ul>
// //                 </div>
// //               )}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }

// // export default AddEvent;
// import React, { useState, useEffect } from 'react';
// import { db, auth } from '../firebase';
// import {
//   addDoc,
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   query,
//   orderBy,
//   updateDoc,
// } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// function AddEvent() {
//   const [userRole, setUserRole] = useState('');
//   const [eventData, setEventData] = useState({ title: '', description: '', date: '' });
//   const [events, setEvents] = useState([]);
//   const navigate = useNavigate();

//   // Check role and fetch existing events
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!auth.currentUser) {
//         navigate('/login');
//         return;
//       }

//       const docRef = doc(db, 'users', auth.currentUser.uid);
//       const userSnap = await getDoc(docRef);

//       if (userSnap.exists()) {
//         const role = userSnap.data().role;
//         setUserRole(role);
//         await fetchEvents();
//       }
//     };
//     fetchData();
//   }, [navigate]);

//   // Fetch all events
//   const fetchEvents = async () => {
//     const q = query(collection(db, 'events'), orderBy('date', 'asc'));
//     const querySnapshot = await getDocs(q);
//     const eventList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setEvents(eventList);
//   };

//   // Handle adding a new event (only for coordinators)
//   const handleAdd = async () => {
//     try {
//       await addDoc(collection(db, 'events'), {
//         ...eventData,
//         createdBy: auth.currentUser.uid,
//         signupList: [],
//       });
//       alert('Event added!');
//       setEventData({ title: '', description: '', date: '' }); // clear input
//       fetchEvents(); // refresh list
//     } catch (err) {
//       console.error(err);
//       alert('Failed to add event');
//     }
//   };

//   // Handle registration for an event (only for members)
//   const handleRegister = async (eventId) => {
//     try {
//       const eventRef = doc(db, 'events', eventId);
//       const eventSnap = await getDoc(eventRef);

//       if (eventSnap.exists()) {
//         const updatedSignupList = [...eventSnap.data().signupList, auth.currentUser.uid];
//         await updateDoc(eventRef, { signupList: updatedSignupList });

//         alert('Successfully registered for the event!');
//         fetchEvents(); // refresh event list
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Failed to register for the event');
//     }
//   };

//   // Guard for loading state
//   if (!userRole) {
//     return <p className="text-center mt-10 text-gray-500">Loading...</p>;
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold text-purple-700 mb-6">Events</h2>

//       {/* Event form only visible to coordinators */}
//       {userRole === 'coordinator' && (
//         <div className="space-y-4 mb-8">
//           <h3 className="text-2xl font-semibold text-gray-700">Add New Event</h3>
//           <input
//             className="w-full border border-gray-300 p-2 rounded"
//             placeholder="Title"
//             value={eventData.title}
//             onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
//           />
//           <input
//             className="w-full border border-gray-300 p-2 rounded"
//             placeholder="Description"
//             value={eventData.description}
//             onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
//           />
//           <input
//             className="w-full border border-gray-300 p-2 rounded"
//             type="date"
//             value={eventData.date}
//             onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
//           />
//           <button
//             className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800 transition-all"
//             onClick={handleAdd}
//           >
//             Create Event
//           </button>
//         </div>
//       )}

//       {/* Event List for both Coordinators and Members */}
//       <h3 className="text-2xl font-semibold mb-4 text-gray-800">Upcoming Events</h3>
//       {events.length === 0 ? (
//         <p className="text-gray-500">No events added yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {events.map((event) => (
//             <li key={event.id} className="border p-4 rounded shadow-sm bg-white">
//               <h4 className="text-lg font-bold text-purple-700">{event.title}</h4>
//               <p className="text-gray-600">{event.description}</p>
//               <p className="text-sm text-gray-500">📅 {event.date}</p>

//               {/* Register Button for members */}
//               {userRole !== 'coordinator' && !event.signupList.includes(auth.currentUser.uid) && (
//                 <button
//                   className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-700"
//                   onClick={() => handleRegister(event.id)}
//                 >
//                   Register
//                 </button>
//               )}

//               {/* Show list of registered users for coordinators */}
//               {userRole === 'coordinator' && (
//                 <div className="mt-2">
//                   <strong>Registered Participants:</strong>
//                   <ul>
//                     {event.signupList.length === 0 ? (
//                       <li>No one has registered yet.</li>
//                     ) : (
//                       event.signupList.map((uid, idx) => (
//                         <li key={idx}>{uid}</li>
//                       ))
//                     )}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default AddEvent;





// import React, { useState, useEffect } from 'react';
// import { db, auth } from '../firebase';
// import {
//   addDoc,
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   query,
//   orderBy,
//   updateDoc,
// } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// function AddEvent() {
//   const [userRole, setUserRole] = useState('');
//   const [eventData, setEventData] = useState({ title: '', description: '', date: '' });
//   const [events, setEvents] = useState([]);
//   const [isRegistering, setIsRegistering] = useState(false); // To handle register form visibility
//   const [selectedEvent, setSelectedEvent] = useState(null); // To keep track of the selected event
//   const [registrationDetails, setRegistrationDetails] = useState({
//     username: '',
//     team: '',
//     price: '',
//   }); // Store registration details
//   const navigate = useNavigate();

//   // Check role and fetch existing events
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!auth.currentUser) {
//         navigate('/login');
//         return;
//       }

//       const docRef = doc(db, 'users', auth.currentUser.uid);
//       const userSnap = await getDoc(docRef);

//       if (userSnap.exists()) {
//         const role = userSnap.data().role;
//         setUserRole(role);
//         await fetchEvents();
//       }
//     };
//     fetchData();
//   }, [navigate]);

//   // Fetch all events
//   const fetchEvents = async () => {
//     const q = query(collection(db, 'events'), orderBy('date', 'asc'));
//     const querySnapshot = await getDocs(q);
//     const eventList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setEvents(eventList);
//   };

//   // Handle adding a new event (only for coordinators)
//   const handleAdd = async () => {
//     try {
//       await addDoc(collection(db, 'events'), {
//         ...eventData,
//         createdBy: auth.currentUser.uid,
//         signupList: [],
//       });
//       alert('Event added!');
//       setEventData({ title: '', description: '', date: '' }); // clear input
//       fetchEvents(); // refresh list
//     } catch (err) {
//       console.error(err);
//       alert('Failed to add event');
//     }
//   };

//   // Handle registration for an event (only for members)
//   const handleRegister = (event) => {
//     setSelectedEvent(event);
//     setIsRegistering(true); // Show the registration form
//   };

//   // Submit registration details
//   const handleRegistrationSubmit = async () => {
//     try {
//       const eventRef = doc(db, 'events', selectedEvent.id);
//       const eventSnap = await getDoc(eventRef);

//       if (eventSnap.exists()) {
//         // New registration data
//         const registrationData = {
//           username: registrationDetails.username,
//           team: registrationDetails.team,
//           price: registrationDetails.price,
//           uid: auth.currentUser.uid,
//         };

//         const updatedSignupList = [...eventSnap.data().signupList, registrationData];
//         await updateDoc(eventRef, { signupList: updatedSignupList });

//         alert('Successfully registered for the event!');
//         setIsRegistering(false); // Close the registration form
//         fetchEvents(); // refresh event list
//         setRegistrationDetails({ username: '', team: '', price: '' }); // Clear form
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Failed to register for the event');
//     }
//   };

//   // Guard for loading state
//   if (!userRole) {
//     return <p className="text-center mt-10 text-gray-500">Loading...</p>;
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold text-purple-700 mb-6">Events</h2>

//       {/* Event form only visible to coordinators */}
//       {userRole === 'coordinator' && (
//         <div className="space-y-4 mb-8">
//           <h3 className="text-2xl font-semibold text-gray-700">Add New Event</h3>
//           <input
//             className="w-full border border-gray-300 p-2 rounded"
//             placeholder="Title"
//             value={eventData.title}
//             onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
//           />
//           <input
//             className="w-full border border-gray-300 p-2 rounded"
//             placeholder="Description"
//             value={eventData.description}
//             onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
//           />
//           <input
//             className="w-full border border-gray-300 p-2 rounded"
//             type="date"
//             value={eventData.date}
//             onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
//           />
//           <button
//             className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800 transition-all"
//             onClick={handleAdd}
//           >
//             Create Event
//           </button>
//         </div>
//       )}

//       {/* Event List for both Coordinators and Members */}
//       <h3 className="text-2xl font-semibold mb-4 text-gray-800">Upcoming Events</h3>
//       {events.length === 0 ? (
//         <p className="text-gray-500">No events added yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {events.map((event) => (
//             <li key={event.id} className="border p-4 rounded shadow-sm bg-white">
//               <h4 className="text-lg font-bold text-purple-700">{event.title}</h4>
//               <p className="text-gray-600">{event.description}</p>
//               <p className="text-sm text-gray-500">📅 {event.date}</p>

//               {/* Register Button for members */}
//               {userRole !== 'coordinator' && !event.signupList.some((signup) => signup.uid === auth.currentUser.uid) && (
//                 <button
//                   className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-700"
//                   onClick={() => handleRegister(event)}
//                 >
//                   Register
//                 </button>
//               )}

//               {/* Show list of registered users for coordinators */}
//               {userRole === 'coordinator' && (
//                 <div className="mt-2">
//                   <strong>Registered Participants:</strong>
//                   <ul>
//                     {event.signupList.length === 0 ? (
//                       <li>No one has registered yet.</li>
//                     ) : (
//                       event.signupList.map((signup, idx) => (
//                         <li key={idx}>{signup.username} (Team: {signup.team}, Price: {signup.price})</li>
//                       ))
//                     )}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Registration Form Modal */}
//       {isRegistering && selectedEvent && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h3 className="text-2xl font-semibold mb-4">Register for {selectedEvent.title}</h3>

//             <input
//               className="w-full border border-gray-300 p-2 rounded mb-4"
//               placeholder="Username"
//               value={registrationDetails.username}
//               onChange={(e) => setRegistrationDetails({ ...registrationDetails, username: e.target.value })}
//             />
//             <input
//               className="w-full border border-gray-300 p-2 rounded mb-4"
//               placeholder="Team"
//               value={registrationDetails.team}
//               onChange={(e) => setRegistrationDetails({ ...registrationDetails, team: e.target.value })}
//             />
//             <input
//               className="w-full border border-gray-300 p-2 rounded mb-4"
//               placeholder="Price"
//               value={registrationDetails.price}
//               onChange={(e) => setRegistrationDetails({ ...registrationDetails, price: e.target.value })}
//             />

//             <div className="flex justify-between">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//                 onClick={() => setIsRegistering(false)} // Close form without submitting
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
//                 onClick={handleRegistrationSubmit}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddEvent;



import '../index.css'
import React, { useState } from "react";

function EventRegistration() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [registrationName, setRegistrationName] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCreateEvent = () => {
    const newEvent = {
      id: events.length + 1,
      name: eventName,
      date: eventDate,
      registrations: [],
    };
    setEvents([...events, newEvent]);
    setEventName("");
    setEventDate("");
  };

  const handleRegister = (eventId) => {
    setSelectedEvent(eventId);
  };

  const handleRegistrationSubmit = () => {
    const updatedEvents = events.map((event) => {
      if (event.id === selectedEvent) {
        return {
          ...event,
          registrations: [...event.registrations, registrationName],
        };
      }
      return event;
    });
    setEvents(updatedEvents);
    setRegistrationName("");
    setSelectedEvent(null);
  };

  const handleCancelRegistration = (eventId, name) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          registrations: event.registrations.filter((reg) => reg !== name),
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="section-title">Events</h2>
      <div className="mb-6">
        <h3 className="sub-heading">Add New Event</h3>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="input-field"
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="input-field"
        />
        <button
          onClick={handleCreateEvent}
          className="btn-purple"
        >
          Create Event
        </button>
      </div>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="event-card mb-4">
            <h3 className="sub-heading">{event.name}</h3>
            <p className="date-badge">📅 {event.date}</p>
            <h4 className="font-semibold mt-2 mb-1">Registrations:</h4>
            <ul className="list-disc list-inside mb-2">
              {event.registrations.length > 0 ? (
                event.registrations.map((reg, index) => (
                  <li key={index} className="flex items-center justify-between">
                    {reg}
                    <button
                      onClick={() => handleCancelRegistration(event.id, reg)}
                      className="btn-red"
                    >
                      Cancel
                    </button>
                  </li>
                ))
              ) : (
                <p className="empty-message">No registrations yet.</p>
              )}
            </ul>
            {selectedEvent === event.id ? (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={registrationName}
                  onChange={(e) => setRegistrationName(e.target.value)}
                  className="input-field"
                />
                <button
                  onClick={handleRegistrationSubmit}
                  className="btn-green"
                >
                  Submit
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleRegister(event.id)}
                className="btn-green mt-2"
              >
                Register
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventRegistration;
