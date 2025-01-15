import React from "react";
import styles from "./services.module.css"; // Make sure the CSS file is created for this
import { FaRobot, FaDatabase, FaTools, FaGraduationCap, FaRegLightbulb, FaLayerGroup, FaLaptop, FaCube, FaWrench } from "react-icons/fa"; // Example icons, can use other ones

import { FaBolt } from 'react-icons/fa'; // This is available
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";

const services = [
  {
    title: "Home Automations",
    description: "Smart and intuitive solutions to automate your living spaces.",
    icon: <FaRobot />,
  },
  {
    title: "Research Projects",
    description: "Guidance and development for innovative research projects.",
    icon: <FaDatabase />,
  },
  {
    title: "IoT and Automations",
    description: "Revolutionize your processes with advanced IoT and automation solutions.",
    icon: <FaTools />,
  },
  {
    title: "Help in College Projects",
    description: "Expert assistance to bring your college project ideas to life.",
    icon: <FaGraduationCap />,
  },
  {
    title: "PCB Design",
    description: "High-quality and precise PCB designs for your electronics needs.",
    icon: <FaRegLightbulb />,
  },
  {
    title: "Workshops",
    description: "Interactive workshops to help you learn and explore cutting-edge technologies.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Lab Setups",
    description: "Custom lab setups for academic and industrial purposes.",
    icon: <FaLaptop />,
  },
  {
    title: "Custom College Projects",
    description: "Tailored college projects to meet academic and professional standards.",
    icon: <FaCube />,
  },
  {
    title: "3D Design",
    description: "Create stunning 3D models and designs for various applications.",
    icon: <FaBolt />,  // Replaced FaElectricity with FaBolt
  },
  {
    title: "Electronics",
    description: "Comprehensive solutions for all your electronics requirements.",
    icon: <FaWrench />,
  },
];

const Services = () => {
  return (
    <div>
        <Navbar />
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.subtitle}>
          Discover our wide range of innovative services designed to help you
          succeed in your projects and ventures.
        </p>
      </header>

      <section className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div
            className={`${styles.serviceCard} ${
              index % 2 === 0 ? styles.even : styles.odd
            }`}
            key={index}
          >
            <div className={styles.iconContainer}>{service.icon}</div>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </section>

      <div className={styles.additionalText}>
        <h2 className={styles.additionalTitle}>Why Choose Us?</h2>
        <p className={styles.text}>
          At Paradox Innovator, we are committed to delivering cutting-edge
          solutions that integrate the latest technologies with practical,
          hands-on expertise. Whether you need innovative automation systems,
          high-quality research assistance, or tailored educational support, we
          are here to empower your success.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Services;
