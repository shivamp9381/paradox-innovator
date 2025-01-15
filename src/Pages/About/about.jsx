import React from "react";
import styles from "./about.module.css";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import Achievements from "../../Components/Achievements/achievements";

const About = () => {
  const teamMembers = [
    {
      name: "Shreya Panda",
      role: "PR & Management Specialist",
      profileLink: "/shreya",
      image: "https://i.ibb.co/VpYxxCG/Shreya-Panda.jpg",
    },
    {
      name: "Ranjan Kumar Gupta",
      role: "Problem Solver | Mathematical Calculation | Hardware Enthusiast",
      profileLink: "/ranjan",
      image: "https://i.ibb.co/qBVn2kB/Whats-App-Image-2025-01-10-at-19-14-13-1.jpg",
    },
    {
      name: "Ankit Pandit",
      role: "Developer | Content Creator | Video Editor",
      profileLink: "/ankit",
      image: "https://i.ibb.co/xXHxPM2/Ankit-Pandit.jpg",
    },
    {
      name: "Swayam Mishra",
      role: "Business Management Enthusiast | Tech Problem Solver",
      profileLink: "/swayam",
      image: "https://i.ibb.co/XbbrsX8/Swayam-Mishra.jpg",
    },
    {
      name: "Anshu Raj",
      role: "Founder | Hardware Engineer",
      profileLink: "/anshu",
      image: "https://i.ibb.co/GvzQX4H/Anshu-Raj.jpg",
    },
  ];

  return (
    <div> 
        <Navbar />
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Our Team</h1>
        <p className={styles.mainText}>
          We have a diverse team of passionate individuals who specialize in
          robotics, engineering, and design. Together, we strive to make a
          difference through our projects.
        </p>
        <p className={styles.secondaryText}>
          We are Paradox Innovator, a team of 5 innovators that aim to build
          the future. Paradox Innovator focuses on different innovative
          projects or ideas to compete in the same or different competitions
          and life-changing innovations.
        </p>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2 className={styles.teamHeading}>Meet the Innovators</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <img src={member.image} alt={member.name} className={styles.memberImage} />
              <div className={styles.memberContent}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
              <div className={styles.hoverOverlay}>
                <a href={member.profileLink} className={styles.profileLink}>
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Achievements />
    <Footer />
    </div>
  );
};

export default About;
