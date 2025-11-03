import React from "react";
import ClubCard from "../components/ClubCard";

const clubs = [
    { name: "Mudra", image: "/images/mudra.jpeg" },
    { name: "Aalap", image: "/images/aalap.jpeg" },
    { name: "Recurse", image: "/images/recurse.jpeg" },
    { name: "Abhinaya", image: "/images/abhinaya.jpeg" },
    { name: "Kreeda", image: "/images/kreeda.jpeg" },
    { name: "Aakarshan", image: "/images/aakarshan.jpeg" },
    { name: "Kmitra", image: "/images/kmitra.jpeg" },
    { name: "Traces of Lenses", image: "/images/tol.jpeg" },
];

export default function Home() {
  return (
    <div className="home-container">
      <h2 className="hero-title">Explore Our Clubs</h2>
      <div className="club-grid">
        {clubs.map((club) => (
          <ClubCard key={club.name} name={club.name} image={club.image} />
        ))}
      </div>
    </div>
  );
}
