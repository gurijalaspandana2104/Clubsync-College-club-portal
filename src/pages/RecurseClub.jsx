

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const eventsList = [
//   { id: 1, name: "AI Workshop", date: "2025-05-10" },
//   { id: 2, name: "Hackathon", date: "2025-05-15" },
//   { id: 3, name: "Tech Talk", date: "2025-05-20" },
// ];

// export default function RecurseClub() {
//   const [registered, setRegistered] = useState([]);
//   const [volunteers, setVolunteers] = useState([]);
//   const navigate = useNavigate();

//   const handleVolunteer = (eventId) => {
//     if (!volunteers.includes(eventId)) {
//       setVolunteers([...volunteers, eventId]);
//     }
//   };

//   return (
//     <div className="recurse-club-container">
//       <h2 className="recurse-title">Recurse Club Events</h2>
//       <div className="event-list">
//         {eventsList.map((event) => (
//           <div key={event.id} className="event-card">
//             <h3 className="event-name">{event.name}</h3>
//             <p className="event-date">Date: {event.date}</p>

//             {!registered.includes(event.id) ? (
//               <button
//                 className="register-btn"
//                 onClick={() => navigate(`/register/${event.id}`)}
//               >
//                 Register
//               </button>
//             ) : (
//               <>
//                 <p className="registered-msg">You are registered!</p>
//                 {!volunteers.includes(event.id) ? (
//                   <button
//                     className="volunteer-btn"
//                     onClick={() => handleVolunteer(event.id)}
//                   >
//                     Volunteer?
//                   </button>
//                 ) : (
//                   <p className="volunteered-msg">You volunteered!</p>
//                 )}
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { collection, getDocs, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
// import { db } from "../firebase"; // Import Firebase setup
// import { getAuth } from "firebase/auth"; // Firebase Auth
// import '../index.css';

// export default function RecurseClub() {
//   const [events, setEvents] = useState([]);
//   const [registered, setRegistered] = useState([]);
//   const [volunteers, setVolunteers] = useState([]);
//   const navigate = useNavigate();

//   // Firebase Auth instance
//   const auth = getAuth();
//   const user = auth.currentUser; // Get the current user
  
//   // Fetch events from Firestore
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const eventCollection = collection(db, "events"); // Events collection
//         const eventSnapshot = await getDocs(eventCollection);
//         const eventList = eventSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setEvents(eventList); // Set the events list to state
//       } catch (error) {
//         console.error("Error fetching events from Firebase:", error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   // Fetch user registration and volunteering status
//   useEffect(() => {
//     const fetchUserStatus = async () => {
//       try {
//         if (!user) {
//           console.log("No user signed in");
//           return;
//         }

//         const userRef = doc(db, "users", user.uid); // Use actual user ID from Firebase Auth
//         const userSnapshot = await getDoc(userRef);

//         if (userSnapshot.exists()) {
//           const userData = userSnapshot.data();
//           setRegistered(userData.registered || []); // Set registered events
//           setVolunteers(userData.volunteers || []); // Set volunteered events
//         }
//       } catch (error) {
//         console.error("Error fetching user status:", error);
//       }
//     };

//     fetchUserStatus();
//   }, [user]); // Re-run when user changes

//   // Handle event registration
//   const handleRegister = async (eventId) => {
//     try {
//       if (!user) {
//         console.log("User is not signed in.");
//         return;
//       }

//       const userRef = doc(db, "users", user.uid); // Use actual user ID from Firebase Auth

//       // Update user's registered events in Firestore
//       await updateDoc(userRef, {
//         registered: arrayUnion(eventId), // Adds eventId to the registered array
//       });

//       setRegistered((prev) => [...prev, eventId]); // Update local state for registered events
//     } catch (error) {
//       console.error("Error registering for event:", error);
//     }
//   };

//   // Handle volunteering for an event
//   const handleVolunteer = async (eventId) => {
//     try {
//       if (!user) {
//         console.log("User is not signed in.");
//         return;
//       }

//       const userRef = doc(db, "users", user.uid); // Use actual user ID from Firebase Auth

//       // Update user's volunteers status in Firestore
//       await updateDoc(userRef, {
//         volunteers: arrayUnion(eventId), // Adds eventId to the volunteers array
//       });

//       setVolunteers((prev) => [...prev, eventId]); // Update local state for volunteered events
//     } catch (error) {
//       console.error("Error volunteering for event:", error);
//     }
//   };

//   return (
//     <div className="recurse-club-container">
//       <h2 className="recurse-title">Recurse Club Events</h2>
//       <div className="event-list">
//         {events.map((event) => (
//           <div key={event.id} className="event-card">
//             <h3 className="event-name">{event.name}</h3>
//             <p className="event-date">Date: {event.date}</p>

//             {/* If the event is not registered */}
//             {!registered.includes(event.id) ? (
//               <button
//                 className="register-btn"
//                 onClick={() => handleRegister(event.id)}
//               >
//                 Register
//               </button>
//             ) : (
//               <>
//                 <p className="registered-msg">You are registered!</p>

//                 {/* If the user is not volunteering yet */}
//                 {!volunteers.includes(event.id) ? (
//                   <button
//                     className="volunteer-btn"
//                     onClick={() => handleVolunteer(event.id)}
//                   >
//                     Volunteer?
//                   </button>
//                 ) : (
//                   <p className="volunteered-msg">You volunteered!</p>
//                 )}
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../index.css';

export default function RecurseClub() {
  const [events, setEvents] = useState([]);
  const [registered, setRegistered] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const auth = getAuth();

  // Track authentication state reliably
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        console.log("User signed in:", firebaseUser.uid);
      } else {
        setUser(null);
        console.log("No user signed in");
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventSnapshot = await getDocs(collection(db, "events"));
        const eventList = eventSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setEvents(eventList);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Fetch user's registered and volunteered events
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setRegistered(data.registered || []);
          setVolunteers(data.volunteers || []);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  const handleRegister = async (eventId) => {
    console.log("Register clicked for:", eventId);
    if (!user) {
      alert("Please log in first.");
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        registered: arrayUnion(eventId),
      });

      setRegistered((prev) => [...prev, eventId]);
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const handleVolunteer = async (eventId) => {
    console.log("Volunteer clicked for:", eventId);
    if (!user) {
      alert("Please log in first.");
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        volunteers: arrayUnion(eventId),
      });

      setVolunteers((prev) => [...prev, eventId]);
    } catch (error) {
      console.error("Error volunteering:", error);
    }
  };

  return (
    <div className="recurse-club-container">
      <h2 className="recurse-title">Recurse Club Events</h2>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-date">Date: {event.date}</p>

            {!registered.includes(event.id) ? (
              <button className="register-btn" onClick={() => handleRegister(event.id)}>
                Register
              </button>
            ) : (
              <>
                <p className="registered-msg">You are registered!</p>
                {!volunteers.includes(event.id) ? (
                  <button className="volunteer-btn" onClick={() => handleVolunteer(event.id)}>
                    Volunteer?
                  </button>
                ) : (
                  <p className="volunteered-msg">You volunteered!</p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
