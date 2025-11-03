import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";
import "./index.css"// Import your CSS here

// Get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root
root.render(<App />);
