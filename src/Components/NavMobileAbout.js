import React, { useState } from "react";

const NavMobileAbout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav class="mobile_a">
      <a href="/">
        <img src="../assets/img/logo_star.png" alt="LogoStar" class="logo" loading="lazy" />
      </a>
      <div className={`nav-links_a ${isMobileMenuOpen ? "mobile-menu_a" : ""}`}>
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
        class="menu-mobile_a"
        onClick={handleMenuClick}
      />
    </nav>
  );
};

export default NavMobileAbout;
