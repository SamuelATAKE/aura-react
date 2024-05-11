import React, { useState } from "react";
import Footer from "../Components/Footer";

const Message = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav class="full_m nav_m">
        <ul class="left">
          <li>
            <a href="/a-propos">A propos</a>
          </li>
        </ul>
        <div class="center">
          <a href="/">
            <img src="assets/img/logo_star.png" alt="" class="logo" loading="lazy" />
          </a>
        </div>
        <ul class="right">
          <li>
            <a href="/services">Nos Services</a>
          </li>
          <li>
            <a href="/contactez-nous">Nous contacter</a>
          </li>
        </ul>
      </nav>
      <nav class="mobile_m">
        <a href="/">
          <img src="assets/img/logo_star.png" alt="" class="logo" loading="lazy" />
        </a>
        <div
          className={`nav-links_m ${isMobileMenuOpen ? "mobile-menu_m" : ""}`}
        >
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
          src="assets/img/menu-btn.png"
          alt=""
          class="menu-mobile_m"
          onClick={handleMenuClick}
          loading="lazy"
        />
      </nav>
      <main>
        <div class="paragraph">
          <p class="p1">Votre message a bien été reçu.</p>
          <p class="p2">
            Notre équipe s’occupe de traiter votre demande dans les plus brefs
            délais aﬁn de revenir vers vous au plus vite. Nous vous remercions
            de l’intérêt que vous portez à notre agence et nous avons hâte de
            vous rencontrer et d'échanger sur vos besoins.
          </p>
          <h3 class="ph">À bientôt, l’équipe Aura</h3>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Message;
