import React, { useState, useEffect, useRef } from "react";
import styles from "./media.module.css";

const mediaLogos = [
  { id: 1, name: "Prabhat Khabar", image: "https://i.ibb.co/T8KLTPq/download-1.jpg", url: "prabhat" },
  { id: 2, name: "MIT University", image: "https://i.ibb.co/bv6Qwj6/download-1.png", url: "/mit" },
  { id: 3, name: "Yuva Shakti", image: "https://i.ibb.co/54Rrd2Z/download-2.jpg", url: "/yuvashakti" },
  { id: 4, name: "The Kalinga Chronicle", image: "https://i.ibb.co/HxrVpMs/download-2.png", url: "/kalinga" },
  { id: 5, name: "Samagya", image: "https://i.ibb.co/gWy0W7x/download-3.png", url: "/samagya" },
  { id: 6, name: "Sanmarg", image: "https://i.ibb.co/DtMFCnP/download.png", url: "/sanmarg" },
  { id: 7, name: "Dainik Vishwamitra", image: "https://i.ibb.co/cYbBHB4/vish.jpg", url: "/vishwamitra" }
];

const MediaCarousel = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const rotationIntervalRef = useRef(null);

  // Handle next and previous rotation manually
  const handleNext = () => {
    setRotationAngle((prevAngle) => prevAngle - 360 / mediaLogos.length);
  };

  const handlePrev = () => {
    setRotationAngle((prevAngle) => prevAngle + 360 / mediaLogos.length);
  };

  // Auto-rotate the carousel
  useEffect(() => {
    if (!isHovered) {
      rotationIntervalRef.current = setInterval(handleNext, 3000); // Rotate every 3 seconds
    } else {
      clearInterval(rotationIntervalRef.current); // Stop rotation when hovered
    }

    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current); // Clean up interval on component unmount
      }
    };
  }, [isHovered]); // Rerun the effect whenever hovering state changes

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselHeading}>In The Media</h2>
      <div
        className={styles.logoTrack}
        style={{
          transform: `rotateY(${rotationAngle}deg)`
        }}
      >
        {mediaLogos.map((logo, index) => (
          <div
            key={logo.id}
            className={styles.logoContainer}
            style={{
              transform: `rotateY(${(360 / mediaLogos.length) * index}deg) translateZ(400px)`
            }}
            onClick={() => window.open(logo.url, "_blank")}
            onMouseEnter={() => setIsHovered(true)} // Pause rotation on hover
            onMouseLeave={() => setIsHovered(false)} // Resume rotation after hover
          >
            <img src={logo.image} alt={logo.name} className={styles.mediaImage} />
            <p className={styles.mediaName}>{logo.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.navButtons}>
        <button className={styles.navButton} onClick={handlePrev}>
          {"<"}
        </button>
        <button className={styles.navButton} onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MediaCarousel;
