import React, { useState } from "react";
import styles from "./media.module.css";

const mediaLogos = [
  { id: 1, name: "Prabhat Khabar", image: "https://i.ibb.co/T8KLTPq/download-1.jpg", url: "prabhat" },
  { id: 2, name: "MIT University", image: "https://i.ibb.co/bv6Qwj6/download-1.png", url: "/mit" },
  { id: 3, name: "Yuva Shakti", image: "https://i.ibb.co/54Rrd2Z/download-2.jpg", url: "/yuvashakti" },
  { id: 4, name: "The Kalinga Chronicle", image: "https://i.ibb.co/HxrVpMs/download-2.png", url: "/kalinga" },
  { id: 5, name: "Samagya", image: "https://i.ibb.co/gWy0W7x/download-3.png", url: "/samagya" },
  { id: 6, name: "Sanmarg", image: "https://i.ibb.co/DtMFCnP/download.png", url: "/sanmarg" },
  { id: 6, name: "Dainik Vishwamitra", image: "https://i.ibb.co/cYbBHB4/vish.jpg", url: "/vishwamitra" }
];

const MediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaLogos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaLogos.length - 1 : prevIndex - 1
    );
  };

  const getClassName = (index) => {
    const offset = (index - currentIndex + mediaLogos.length) % mediaLogos.length;

    if (offset === 0) return styles.center;
    if (offset === 1 || offset === mediaLogos.length - 1) return styles.near;
    if (offset === 2 || offset === mediaLogos.length - 2) return styles.far;
    return styles.hidden;
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselHeading}>In The Media</h2>
      <button className={styles.navButton} onClick={handlePrev}>
        {"<"}
      </button>
      <div className={styles.mediaDisplay}>
        {mediaLogos.map((logo, index) => (
          <div
            key={logo.id}
            className={`${styles.logoContainer} ${getClassName(index)}`}
            onClick={() => (getClassName(index) === styles.center) && window.open(logo.url, "_blank")}
          >
            <img
              src={logo.image}
              alt={logo.name}
              className={styles.mediaImage}
            />
            {index === currentIndex && <p className={styles.mediaName}>{logo.name}</p>}
          </div>
        ))}
      </div>
      <button className={styles.navButton} onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default MediaCarousel;
