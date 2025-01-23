// import React, { useState, useEffect } from 'react';
// import styles from './navbar.module.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMobileNavClick = () => {
//     setIsOpen(false);
//   };

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   function goHome(){
//     window.location.href = '/';
//   }

//   return (
//     <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
//       <div className={styles.navContainer}>
//         {/* Logo */}
//         <div className={styles.logoContainer}>
//           <img
//             onClick={goHome}
//             src="https://i.ibb.co/x3x4byM/logo-removebg-preview.png"
//             alt="Paradox Innovator"
//             className={styles.logo}
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <div className={styles.navLinks}>
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.path}
//               className={styles.navLink}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`${styles.menuButton} ${isOpen ? styles.menuOpen : ''}`}
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//           aria-expanded={isOpen}
//         >
//           <span className={styles.menuIcon}></span>
//         </button>

//         {/* Mobile Navigation */}
//         <div 
//           className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
//           aria-hidden={!isOpen}
//         >
//           {navItems.map((item, index) => (
//             <a
//               key={item.name}
//               href={item.path}
//               className={styles.mobileNavLink}
//               onClick={handleMobileNavClick}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import styles from './navbar.module.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false); // For Services Dropdown
//   const [isProjectsOpen, setIsProjectsOpen] = useState(false); // For Projects Dropdown

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMobileNavClick = () => {
//     setIsOpen(false);
//   };

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     {
//       name: 'Services',
//       dropdown: [
//         'Home Automations',
//         'Research Projects',
//         'IOT and Automation',
//         'Workshops',
//         'Lab setups',
//         'Custom College Projects',
//         '3D design',
//         'Electronics',
//         'PCB design',
//       ],
//     },
//     { name: 'Blogs', path: '/blogs' },
//     {
//       name: 'Projects',
//       dropdown: ['Project 1', 'Project 2', 'Project 3', 'Project 4'],
//     },
//     { name: 'Contact', path: '/contact' },
//   ];

//   function goHome() {
//     window.location.href = '/';
//   }

//   return (
//     <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
//       <div className={styles.navContainer}>
//         {/* Logo */}
//         <div className={styles.logoContainer}>
//           <img
//             onClick={goHome}
//             src="https://i.ibb.co/x3x4byM/logo-removebg-preview.png"
//             alt="Paradox Innovator"
//             className={styles.logo}
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <div className={styles.navLinks}>
//           {navItems.map((item, index) =>
//             item.dropdown ? (
//               <div
//                 key={item.name}
//                 className={styles.navDropdown}
//                 onMouseEnter={() => {
//                   if (item.name === 'Services') setIsServicesOpen(true);
//                   if (item.name === 'Projects') setIsProjectsOpen(true);
//                 }}
//                 onMouseLeave={() => {
//                   if (item.name === 'Services') setIsServicesOpen(false);
//                   if (item.name === 'Projects') setIsProjectsOpen(false);
//                 }}
//               >
//                 <span className={styles.navLink}>{item.name}</span>
//                 <div
//                   className={`${styles.dropdownMenu} ${
//                     (item.name === 'Services' && isServicesOpen) ||
//                     (item.name === 'Projects' && isProjectsOpen)
//                       ? styles.dropdownOpen
//                       : ''
//                   }`}
//                 >
//                   {item.dropdown.map((subItem, subIndex) => (
//                     <a
//                       key={subIndex}
//                       href="#"
//                       className={styles.dropdownItem}
//                     >
//                       {subItem}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <a key={item.name} href={item.path} className={styles.navLink}>
//                 {item.name}
//               </a>
//             )
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`${styles.menuButton} ${isOpen ? styles.menuOpen : ''}`}
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//           aria-expanded={isOpen}
//         >
//           <span className={styles.menuIcon}></span>
//         </button>

//         {/* Mobile Navigation */}
//         <div
//           className={`${styles.mobileMenu} ${
//             isOpen ? styles.mobileMenuOpen : ''
//           }`}
//           aria-hidden={!isOpen}
//         >
//           {navItems.map((item, index) =>
//             item.dropdown ? (
//               <div key={item.name}>
//                 <span className={styles.mobileNavLink}>{item.name}</span>
//                 <div className={styles.mobileDropdown}>
//                   {item.dropdown.map((subItem, subIndex) => (
//                     <a
//                       key={subIndex}
//                       href="#"
//                       className={styles.mobileNavLink}
//                       onClick={handleMobileNavClick}
//                     >
//                       {subItem}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <a
//                 key={item.name}
//                 href={item.path}
//                 className={styles.mobileNavLink}
//                 onClick={handleMobileNavClick}
//               >
//                 {item.name}
//               </a>
//             )
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [scrolled, setScrolled] = useState(false); // Navbar scroll effect
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // Tracks which mobile dropdown is open

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsOpen(false);
    setMobileDropdownOpen(null); // Close any open dropdowns
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdownOpen((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      dropdown: [
        'Home Automations',
        'Research Projects',
        'IOT and Automation',
        'Workshops',
        'Lab setups',
        'Custom College Projects',
        '3D design',
        'Electronics',
        'PCB design',
      ],
    },
    { name: 'Blogs', path: '/blogs' },
    {
      name: 'Projects',
      dropdown: ['Project 1', 'Project 2', 'Project 3', 'Project 4'],
    },
    { name: 'Contact', path: '/contact' },
  ];

  function goHome() {
    window.location.href = '/';
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img
            onClick={goHome}
            src="https://i.ibb.co/x3x4byM/logo-removebg-preview.png"
            alt="Paradox Innovator"
            className={styles.logo}
          />
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div
                key={item.name}
                className={styles.navDropdown}
                onMouseEnter={() => setMobileDropdownOpen(item.name)}
                onMouseLeave={() => setMobileDropdownOpen(null)}
              >
                <span className={styles.navLink}>{item.name}</span>
                <div
                  className={`${styles.dropdownMenu} ${
                    mobileDropdownOpen === item.name ? styles.dropdownOpen : ''
                  }`}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className={styles.dropdownItem}
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.name} href={item.path} className={styles.navLink}>
                {item.name}
              </a>
            )
          )}
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
          className={`${styles.mobileMenu} ${
            isOpen ? styles.mobileMenuOpen : ''
          }`}
          aria-hidden={!isOpen}
        >
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  className={styles.mobileNavLink}
                  onClick={() => toggleMobileDropdown(item.name)}
                >
                  {item.name}
                </button>
                {mobileDropdownOpen === item.name && (
                  <div className={styles.mobileDropdown}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className={styles.mobileNavLink}
                        onClick={handleMobileNavClick}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.path}
                className={styles.mobileNavLink}
                onClick={handleMobileNavClick}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
