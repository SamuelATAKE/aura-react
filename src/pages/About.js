import React from "react";
import Footer from "../Components/Footer";
// import "../assets/css/nav_about.css";
// import "../assets/css/about.css";
import SimpleNavAbout from "../Components/SimpleNavAbout";
import NavMobileAbout from "../Components/NavMobileAbout";

const About = () => {
  return (
    <>
      <SimpleNavAbout />
      <NavMobileAbout />
      <header className="header_a">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>A PROPOS</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </header>
      <main>
        <section class="hero_about">
          <div class="row_a">
            <div class="card_a">
              <p class="text_hero_a">
                Créée en 2024, Aura est une agence de marketing et
                d’événementiel qui accompagne les entreprises dans la
                réalisation de leurs projets. L’agence intègre le marché avec
                passion et envie en proposant de développer des stratégies
                précises pour vous aider à atteindre vos objectifs et en créant
                l’inattendu.
              </p>
              <br />
              <br />
              <br />
              <p class="text_hero_a">
                Devenir l’agence incontournable pour toutes les entreprises qui
                souhaitent se démarquer et faire entendre leur voix est la
                raison de la création et l’existence de Aura.
              </p>
            </div>
            <div class="card_a">
              <img
                class="about_hero_img"
                src="../assets/img/about_img.png"
                alt="Message home page"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section class="missions_a">
          <h2 class="titre-mission_a">Nos Missions</h2>
          <div class="row_a">
            <div class="cardi_a card-01_a">
              <p class="text-mission_a">
                Développer des stratégies digitales précise pour propulser votre
                présence en ligne.
              </p>
            </div>
            <div class="cardi_a card-02_a">
              <p class="text-mission_a">
                Mettre notre expertise au service de la réussite de votre projet
                et contribuer à la croissance de votre entreprise.
              </p>
            </div>
            <div class="cardi_a card-03_a">
              <p class="text-mission_a">
                Vous offrir des solutions de communication et d’événementiel à
                la pointe des tendances.
              </p>
            </div>
          </div>
        </section>
        <section class="vision_a">
          <h2 class="title-vision_a">Notre Vision</h2>
          <div class="vision-text-container_a">
            <p class="text-vision_a">
              Faire de la communication et de l’événementiel des leviers de
              succès pour votre entreprise et vous aidez à atteindre vos
              objectifs de manière créative, eﬃcace et durable.
            </p>
          </div>

          <div class="row_a">
            <div class="card_a">
              <img
                class="about_hero_img"
                src="../assets/img/about-img2.png"
                alt="Message home page"
                loading="lazy"
              />
            </div>
            <div class="card_a vision-card-text_a">
              <p class="text_hero_a">
                Nous orchestrons avec précision et passion vos communications et
                événements, pour une expérience inoubliable et un succès
                retentissant.
              </p>
              <br />
              <br />
              <br />
              <p class="text_hero_a">
                Chez Aura, nous croyons en l’importance d’une communication
                authentique et percutante.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
