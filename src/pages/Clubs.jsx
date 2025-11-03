// // pages/Clubs.jsx
// import React from "react";
// import ClubCard from "../components/ClubCard"; // Assuming ClubCard is for displaying each club

// const clubs = [
//     { name: "Mudra", image: "/images/mudra.jpeg" },
//   { name: "Aalap", image: "/images/aalap.jpeg" },
//   { name: "Recurse", image: "/images/recurse.jpeg" },
//   { name: "Abhinaya", image: "/images/abhinaya.jpeg" },
//   { name: "Kreeda", image: "/images/kreeda.jpeg" },
//   { name: "Aakarshan", image: "/images/aakarshan.jpeg" },
// ];

// export default function Clubs() {
//   return (
//     <div className="bg-gradient-to-b from-purple-100 to-white min-h-screen p-8">
//       <h2 className="text-4xl text-center font-extrabold text-purple-800 mb-8 animate-fade-in">
//         Explore Our Clubs
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {clubs.map((club) => (
//           <ClubCard key={club.name} name={club.name} image={club.image} />
//         ))}
//       </div>
//     </div>
//   );
// }import React from "react";
import "../index.css"; // Make sure to import your CSS file

const ClubCard = ({ name, image }) => {
  return (
    <div className="club-card">
      <img src={image} alt={name} className="club-image" />
      <div className="club-info">
        <h3 className="club-name">{name}</h3>
      </div>
    </div>
  );
};

const Clubs = () => {
  const clubs = [
    { name: "Mudra", image: "/images/mudra.jpeg" },
    { name: "Aalap", image: "/images/aalap.jpeg" },
    { name: "Recurse", image: "/images/recurse.jpeg" },
    { name: "Abhinaya", image: "/images/abhinaya.jpeg" },
    { name: "Kreeda", image: "/images/kreeda.jpeg" },
    { name: "Aakarshan", image: "/images/aakarshan.jpeg" },
    { name: "Kmitra", image: "/images/kmitra.jpeg" },
    { name: "Traces of lenses", image: "/images/tol.jpeg" },
  ];

  return (
    <div className="clubs-container">
      <div className="clubs-header">
        <h1 className="clubs-title">Explore Our Clubs</h1>
      </div>
      <div className="clubs-grid">
        {clubs.map((club) => (
          <ClubCard key={club.name} name={club.name} image={club.image} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;