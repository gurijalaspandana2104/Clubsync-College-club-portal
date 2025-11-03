// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1>Tech Titan</h1>
//       <div className="navbar-links">
//         <Link to="/">Home</Link>
//         <Link to="/clubs">Clubs</Link>
//         <Link to="/about">About Us</Link>
//         <Link to="/contact">Contact Us</Link>
//         <Link to="/signup">Signup</Link>
//         <Link to="/login">Login</Link>
//       </div>
//     </nav>
//   );
// // }
// // components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1>Tech Titan</h1>
//       <div className="navbar-links">
//         <Link to="/">Home</Link> {/* Ensure Home link points to the "/" route */}
//         <Link to="/clubs">Clubs</Link> {/* Ensure Clubs link points to the "/clubs" route */}
//         <Link to="/about">About Us</Link>
//         <Link to="/contact">Contact Us</Link>
//         {/* <Link to="/signup">Signup</Link> */}
//         <Link to="/login">Sign up/Sign in</Link>
//       </div>
//     </nav>
//   );
// }
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1>Tech Titan</h1>
//       <div className="navbar-links">
//         {/* Use an 'a' tag for linking to the homepage.html in the public folder */}
//         <a href="/homepage.html">Home</a> {/* Direct link to the homepage.html */}

//         {/* Using Link for internal routing */}
//         <Link to="/clubs">Clubs</Link>
//         <Link to="/about">About Us</Link>
//         <Link to="/src/pages/Contactus.jsx">Contact Us</Link>
//         <Link to="/login">Sign up/Sign in</Link>
//       </div>
//     </nav>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Clubsync</h1>
      <div className="navbar-links">
        {/* Use an 'a' tag for linking to the homepage.html in the public folder */}
        {/* Direct link to the homepage.html */}

        {/* Using Link for internal routing */}
        <Link to="/home">Home</Link>
        <Link to="/clubs">Clubs</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link> {/* Corrected the link to /contact */}
        <Link to="/login">Sign up/Sign in</Link>
      </div>
    </nav>
  );
}
