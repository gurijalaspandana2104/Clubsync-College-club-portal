
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// // Pages
// import Home from "./pages/Home1";         // /clubs
// import Clubs from "./pages/Clubs";        // /
// import RecurseClub from "./pages/RecurseClub"; // /clubs/recurse
// import Login from "./components/Login";        // /login
// import AddEvent from "./components/AddEvent"; 
// import ContactUs from "./pages/Contactus"; // Corrected import path for ContactUs
// import AboutUs from "./pages/AboutUs";
// import HomePage from "./pages/HomePage";
// import CalendarComponent from "./pages/CalenderComponent";
// import MapComponent from "./pages/MapComponent";
// export default function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         {/* Home Route shows Club List */}
//         <Route path="/" element={<HomePage />} />
//         {/* Club Home View (like ecommerce layout) */}
//         <Route path="/clubs" element={<Home />} />
//         <Route path="/home" element={<HomePage />} />

//         {/* Recurse Club Events Page */}
//         <Route path="/clubs/recurse" element={<RecurseClub />} />
//         {/* Contact Us Page */}
//         <Route path="/contact" element={<ContactUs />} /> {/* Corrected component name */}
//         {/* Login Page */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/about" element={<AboutUs/>} />


//         {/* Admin Add Event Page */}
//         <Route path="/add-event" element={<AddEvent />} />
//         <Route path="/add-event" element={<AddEvent />} />
//       </Routes>
//     </Router>
//   );
// }
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home1";               // /clubs
import Clubs from "./pages/Clubs";              // (not used currently)
import RecurseClub from "./pages/RecurseClub";  // /clubs/recurse
import Login from "./components/Login";         // /login
import AddEvent from "./components/AddEvent";   // /add-event
import ContactUs from "./pages/Contactus";      // /contact
import AboutUs from "./pages/AboutUs";          // /about
import HomePage from "./pages/HomePage";        // / and /home
import CalendarComponent from "./pages/CalenderComponent"; // (not routed here)
import MapComponent from "./pages/MapComponent";           // (not routed here)

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Clubs & Events */}
        <Route path="/clubs" element={<Home />} />
        <Route path="/clubs/recurse" element={<RecurseClub />} />

        {/* Auth & Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/add-event" element={<AddEvent />} />

        {/* Info Pages */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
