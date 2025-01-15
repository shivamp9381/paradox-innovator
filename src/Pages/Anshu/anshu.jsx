import React from "react";
import styles from "./anshu.module.css";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";

const Anshu = () => {
  return (
    <div>
        <Navbar />
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <img
          src="https://i.ibb.co/GvzQX4H/Anshu-Raj.jpg"
          alt="Anshu Raj"
          className={styles.profileImage}
        />
        <h1 className={styles.name}>Anshu Raj</h1>
        <p className={styles.role}>Founder | Hardware Engineer</p>
      </header>

      {/* About Me Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.text}>
          Hello, I am Anshu Raj, currently pursuing B.Tech at Heritage Institute
          of Technology. My passion lies in creating and implementing innovative
          ideas, with a strong focus on hardware creation.
        </p>
        <p className={styles.text}>
          I thrive on tackling complex challenges, bridging the gap between
          technical solutions and strategic business growth.
        </p>
      </section>

      {/* Academic Background Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Academic Background</h2>
        <ul className={styles.list}>
          <li>
            <strong>B.Tech in AEIE</strong> - Heritage Institute of Technology,
            Kolkata
          </li>
          <li>
            <strong>Higher Secondary Education</strong> - Chinmaya Vidyalaya
          </li>
        </ul>
      </section>

      {/* Skills & Interests Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills & Interests</h2>
        <ul className={styles.list}>
          <li>Hardware Development</li>
          <li>Innovative Problem Solving</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Me</h2>
        <p className={styles.text}>
          📧 Email:{" "}
          <a href="mailto:anshu.raj.paradox@gmail.com" className={styles.link}>
            anshu.raj.paradox@gmail.com
          </a>
        </p>
        <p className={styles.footerText}>
          Together, let’s transform ideas into impactful solutions for a better
          future!
        </p>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default Anshu;
