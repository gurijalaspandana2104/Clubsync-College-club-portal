// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function ClubCard({ name, image }) {
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-purple-400 transition duration-300"
//       onClick={() => name === "Recurse" && navigate("/clubs/recurse")}
//     >
//       <img src={image} alt={name} className="w-full h-60 object-cover" />
//       <div className="bg-white p-4 text-center">
//         <h3 className="text-2xl font-semibold text-purple-700">{name}</h3>
//       </div>
//     </motion.div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ClubCard({ name, image }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="club-card" // Custom class instead of Tailwind
      onClick={() => name === "Recurse" && navigate("/clubs/recurse")}
    >
      <img src={image} alt={name} className="club-image" /> {/* Custom class */}
      <div className="club-info">
        <h3 className="club-name">{name}</h3>
      </div>
    </motion.div>
  );
}
