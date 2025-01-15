import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  function goHome(){
    window.location.href = '/';
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img
            onClick={goHome}
            src="https://i.ibb.co/GpzCLLJ/building-future-20250113-090132-0000.png"
            alt="Paradox Innovator"
            className={styles.logo}
          />
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={styles.navLink}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.menuButton} ${isOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={styles.menuIcon}></span>
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!isOpen}
        >
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.path}
              className={styles.mobileNavLink}
              onClick={handleMobileNavClick}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;