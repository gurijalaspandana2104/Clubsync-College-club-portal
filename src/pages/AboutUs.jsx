import React from 'react';
import '../index.css'; // Ensure the correct path to your styles

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About ClubSync</h1>

      <section className="about-section">
        <h2>What is ClubSync?</h2>
        <p>
          <strong>ClubSync</strong> is an all-in-one platform designed to centralize and streamline the operations of
          all student clubs and organizations within the college. From managing events to connecting students, ClubSync empowers
          both club leaders and members with tools that simplify communication, collaboration, and engagement.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To build a connected and active student community by making club activities more accessible,
          transparent, and engaging through smart digital solutions.
        </p>
      </section>

      <section className="about-section">
        <h2>Why ClubSync?</h2>
        <ul>
          <li>One platform for all club events, announcements, and updates</li>
          <li>Easy event creation and promotion</li>
          <li>Join and follow clubs you're interested in</li>
          <li>Get notified about upcoming activities</li>
          <li>Encourages participation, creativity, and leadership</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Who We Serve</h2>
        <p>
          ClubSync is built for students, club coordinators, and faculty advisors. Whether you're leading a club,
          attending events, or just exploring opportunities, ClubSync keeps you in the loop—always.
        </p>
      </section>

      <section className="about-section">
        <h2>Looking Ahead</h2>
        <p>
          We are constantly evolving. Features like analytics, feedback collection, and integrated chat are in the works.
          Our goal is to make ClubSync the heartbeat of student life on campus.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
