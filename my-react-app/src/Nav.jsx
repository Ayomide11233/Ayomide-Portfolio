import React from 'react';
import './Nav.css';

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Project', href: '#project' },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1eAKnjuYY3iMwojppKHUHZ83UGKZMUNAy/view?usp=sharing', isExternal: true },
    // { name: 'Graphic Design Page', href: 'https://your-graphic-design-page.com', isExternal: true }
  ];

  const handleNavClick = (href, isExternal) => {
    if (isExternal) {
      window.open(href, '_blank');
    } else {
      
      window.location.href = href;
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a
                href={item.href}
                target={item.isExternal ? '_blank' : '_self'}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className={`nav-link ${item.isExternal ? 'resume' : ''}`}
                onClick={(e) => {
                  // Optional: handle click with custom logic
                  // e.preventDefault();
                  // handleNavClick(item.href, item.isExternal);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

/* 
To use this component, create a file called Navbar.css in the same directory 
and copy the CSS from the Navbar.css artifact above.
*/