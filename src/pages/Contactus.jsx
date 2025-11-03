// import React from 'react';// Make sure you create a corresponding CSS file for styling

// const ContactUs = () => {
//   return (
//     <div className="contact-container">
//       <h1>Contact Us</h1>
//       <div className="contact-info">
//         <div className="info-section">
//           <h3>Location</h3>
//           <p>123 College Street, College City</p>
//         </div>
//         <div className="info-section">
//           <h3>Email</h3>
//           <p>contact@collegeclub.com</p>
//         </div>
//         <div className="info-section">
//           <h3>Phone</h3>
//           <p>+1 234 567 890</p>
//         </div>
//       </div>
//       <div className="social-icons">
//         <a href="https://www.instagram.com/yourclub" target="_blank" rel="noopener noreferrer">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="social-icon" />
//         </a>
//         <a href="https://twitter.com/yourclub" target="_blank" rel="noopener noreferrer">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_logo_2012.svg" alt="Twitter" className="social-icon" />
//         </a>
//         <a href="mailto:contact@collegeclub.com">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Mail_icon.svg" alt="Mail" className="social-icon" />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home1";
// import Clubs from "./pages/Clubs";
// import RecurseClub from "./pages/RecurseClub";
// import Login from "./components/Login";
// import AddEvent from "./components/AddEvent";
// import ContactUs from "./pages/Contactus"; // /contact

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Home Route shows Club List */}
//         <Route path="/" element={<Clubs />} />
//         {/* Club Home View (like ecommerce layout) */}
//         <Route path="/clubs" element={<Home />} />
//         {/* Recurse Club Events Page */}
//         <Route path="/clubs/recurse" element={<RecurseClub />} />
//         {/* Contact Us Page */}
//         <Route path="/contact" element={<ContactUs />} />
//         {/* Login Page */}
//         <Route path="/login" element={<Login />} />
//         {/* Admin Add Event Page */}
//         <Route path="/add-event" element={<AddEvent />} />
//       </Routes>
//     </Router>
// //   );
// // }
// import React from 'react';

// const ContactUs = () => {
//   return (
//     <div className="contact-container">
//       <h1>Contact Us</h1>
//       <div className="contact-info">
//         <div className="info-section">
//           <h3>Location</h3>
//           <p>123 College Street, College City</p>
//         </div>
//         <div className="info-section">
//           <h3>Email</h3>
//           <p>contact@collegeclub.com</p>
//         </div>
//         <div className="info-section">
//           <h3>Phone</h3>
//           <p>+1 234 567 890</p>
//         </div>
//       </div>
//       <div className="social-icons">
//         <a href="https://www.instagram.com/yourclub" target="_blank" rel="noopener noreferrer">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="social-icon" />
//         </a>
//         <a href="https://twitter.com/yourclub" target="_blank" rel="noopener noreferrer">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_logo_2012.svg" alt="Twitter" className="social-icon" />
//         </a>
//         <a href="mailto:contact@collegeclub.com">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Mail_icon.svg" alt="Mail" className="social-icon" />
//         </a>
//       </div>
//     </div>
//   );import React, { useState } from 'react';
import React, { useState } from 'react';
import '../index.css'; // Ensure this path is correct

const ContactUs = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-info">
        <div className="info-section">
          <h3>Location</h3>
          <p>Narayanaguda,Hyderabd</p>
        </div>
        <div className="info-section">
          <h3>Email</h3>
          <p>clubsynckmit@collegeclub.com</p>
        </div>
        <div className="info-section">
          <h3>Phone</h3>
          <p>+91 9676027340</p>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://www.instagram.com/yourclub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram social-icon"></i> {/* Instagram FontAwesome icon */}
        </a>
        <a href="https://twitter.com/yourclub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter social-icon"></i> {/* Twitter FontAwesome icon */}
        </a>
        <a href="mailto:contact@collegeclub.com">
          <i className="fas fa-envelope social-icon"></i> {/* Mail FontAwesome icon */}
        </a>
      </div>

      {/* Chatbot Button */}
      <button className="chatbot-btn" onClick={toggleChatbot}>
        {isChatbotOpen ? 'Close Chatbot' : 'Need Support'}
      </button>

      {/* Chatbot Card (only shown when isChatbotOpen is true) */}
      {isChatbotOpen && (
        <div className="chatbot-box">
          <div className="chatbot-box-header">
            <span>Chat with us!</span>
            <button className="chatbot-close-btn" onClick={toggleChatbot}>×</button>
          </div>
          <div className="chatbot-box-body">
            <p>How can we assist you today?</p>
            <input type="text" placeholder="Type your message..." />
          </div>
          <div className="chatbot-box-footer">
            <button>Send</button>
            <button>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
