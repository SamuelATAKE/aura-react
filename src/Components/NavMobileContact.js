import React, { useState } from "react";

const NavMobileContact = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav class="mobile_c">
      <a href="/">
        <img src="../assets/img/logo_star.png" alt="LogoStar" class="logo" />
      </a>
      <div className={`nav-links_c ${isMobileMenuOpen ? "mobile-menu_c" : ""}`}>
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
        class="menu-mobile_c"
        onClick={handleMenuClick}
      />
    </nav>
  );
};

export default NavMobileContact;
