import React from "react";

const SimpleNavContact = () => {
  return (
    <nav class="full_c nav_c">
      <ul class="left">
        <li>
          <a href="/a-propos">A propos</a>
        </li>
      </ul>
      <div class="center">
        <a href="/">
          <img src="../assets/img/logo_star.png" alt="LogoStar" class="logo" loading="lazy" />
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
  );
};

export default SimpleNavContact;
