import React from "react";
import styles from "./servicecomponent.module.css";

const services = [
  {
    title: "Home Automations",
    description: "Smart and intuitive solutions to automate your living spaces.",
  },
  {
    title: "Research Projects",
    description: "Guidance and development for innovative research projects.",
  },
  {
    title: "IoT and Automations",
    description:
      "Revolutionize your processes with advanced IoT and automation solutions.",
  },
  {
    title: "Help in College Projects",
    description: "Expert assistance to bring your college project ideas to life.",
  },
  {
    title: "PCB Design",
    description: "High-quality and precise PCB designs for your electronics needs.",
  },
  {
    title: "Workshops",
    description:
      "Interactive workshops to help you learn and explore cutting-edge technologies.",
  },
  {
    title: "Lab Setups",
    description: "Custom lab setups for academic and industrial purposes.",
  },
  {
    title: "Custom College Projects",
    description:
      "Tailored college projects to meet academic and professional standards.",
  },
  {
    title: "3D Design",
    description: "Create stunning 3D models and designs for various applications.",
  },
  {
    title: "Electronics",
    description: "Comprehensive solutions for all your electronics requirements.",
  },
];

function goServices(){
    window.location.href = '/services';
  }


const ServicesComponent = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.heading}>Our Services</h2>
      <p className={styles.subHeading}>
        Explore our wide range of services designed to cater to your every need.
      </p>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <div className={`${styles.card} ${styles[`animateDelay${index % 5}`]}`} key={index}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
      <button onClick={goServices} className={styles.exploreButton}>Explore All Services</button>
    </div>
  );
};

export default ServicesComponent;
