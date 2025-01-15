import React from "react";
import styles from "./reviews.module.css";

const reviews = [
    {
      text: "This system has greatly improved our safety standards!",
      author: "Adarsh singh"
    },
    {
      text: "I love the real-time monitoring features!",
      author: "Priya Sharma"
    },
    {
      text: "A user-friendly interface that makes monitoring easy.",
      author: "Ravi Kumar"
    }
  ];

const Reviews = () => {
  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.heading}>Customer's Reviews</h2>
      <div className={styles.carousel}>
        {reviews.map((review, index) => (
          <div
            className={`${styles.reviewCard} ${styles[`animationDelay${index}`]}`}
            key={index}
          >
            <p className={styles.text}>{`"${review.text}"`}</p>
            <h3 className={styles.name}>{`- ${review.author}`}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
