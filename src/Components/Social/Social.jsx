import React from 'react';
import styles from './Social.module.css';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const SocialIcons = () => {
  const handleWhatsappClick = () => {
    window.open('https://wa.me/your-whatsapp-number', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:your-phone-number';
  };

  return (
    <div className={styles.iconContainer}>
      <div className={styles.socialIcons}>
        <button className={styles.whatsappIcon} onClick={handleWhatsappClick}>
          <FaWhatsapp size={24} />
        </button>
        <button className={styles.phoneIcon} onClick={handlePhoneClick}>
          <FaPhone size={24} />
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;