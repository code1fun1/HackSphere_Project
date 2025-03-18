import React from "react";
import styles from "../styles/HackathonCard.module.css"; // ✅ Reuse CSS Module

const HackathonCardDevpost = ({ hackathon }) => {
    console.log(hackathon);
  return (
    <div className={styles.card}>
      <img src={hackathon.banner} alt={hackathon.name} className={styles.cardImg} />
      <div className={styles.cardContent}>
        <h3>{hackathon.name}</h3>
        <p><strong>Start:</strong> {hackathon.start}</p>
        <p><strong>End:</strong> {hackathon.end}</p>
        <p><strong>Location:</strong> {hackathon.location}</p>
        <a href={hackathon.website} target="_blank" rel="noopener noreferrer" className={styles.cardButton}>
          View Details
        </a>
      </div>
    </div>
  );
};

export default HackathonCardDevpost;
