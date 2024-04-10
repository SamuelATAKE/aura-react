import React, { useState } from "react";

const NavMobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav class="mobile">
      <a href="/">
        <img src="../assets/img/logo_star.png" alt="LogoStar" class="logo" />
      </a>
      <div className={`nav-links ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
        <ul>
          <li>
            <a href="/a-propos">A propos</a>
          </li>
          <li>
            <a href="/services">Nos Services</a>
          </li>
          <li>
            <a href="/contactez-nous">Nous contacter</a>
          </li>
        </ul>
      </div>
      <img
        src="../assets/img/menu-btn.png"
        alt="MenuMobile"
        class="menu-mobile"
        onClick={handleMenuClick}
      />
    </nav>
  );
};

export default NavMobile;
