import React from 'react';
import styles from './Hero.module.css';





function goAbout(){
    window.location.href = '/about';
  }
 
const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Text Content */}
        <div className={styles.contentContainer}>
          <h2 className={styles.subHeading}>
            Turning visions into reality with innovative technologies
          </h2>
          
          <p className={styles.description}>
            Building innovative solutions for tomorrow's challenges. We combine cutting-edge 
            technology with forward-thinking approaches to create lasting impact.
          </p>
          
          <div className={styles.ctaContainer}>
            <button onClick={goAbout} className={styles.primaryButton}>About Us</button>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className={styles.imageContainer}>
          <div className={styles.mainImageWrapper}>
            <img
              src="https://i.ibb.co/KbxkByh/1.png"
              alt="AI Technology"
              className={styles.mainImage}
            />
          </div>
          
          {/* <div className={styles.secondaryImageWrapper}>
            <img
              src="https://i.ibb.co/PcXnqmz/Whats-App-Image-2025-01-10-at-19-14-15.jpg"
              alt="Tech Element"
              className={styles.secondaryImage}
            />
          </div> */}
          
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.bgGradient}></div>
      <div className={styles.bgPattern}></div>
    </section>
  );
};

export default Hero;