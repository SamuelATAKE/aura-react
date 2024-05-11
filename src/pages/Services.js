import React from "react";
// import SimpleNav from "../Components/SimpleNav";
// import NavMobile from "../Components/NavMobile";
import Footer from "../Components/Footer";
import SimpleNavService from "../Components/SimpleNavService";
import NavMobileService from "../Components/NavMobileService";
import { useNavigate } from "react-router-dom";
// import "../assets/css/nav_services.css";
// import "../assets/css/index.css";
// import "../assets/css/services.css";

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <SimpleNavService />
      <NavMobileService />
      <header class="header_s">
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
        <h2>NOS SERVICES</h2>
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
        <section class="hero_services">
          <div>
            <h1>CREA 360°</h1>
          </div>
          <br />
          <p>
            De la conception de votre identité visuelle à la gestion de votre
            présence en ligne, nous élaborons des stratégies de communication
            sur mesure pour vous aider à vous démarquer.
          </p>
        </section>
        <section class="services_s">
          <div class="row_s">
            <div class="card_s card-01_s">
              <h3>Stratégie et accompagnement</h3>
              <p>
                Notre équipe est là pour vous guider. De la planification
                stratégique à la mise en œuvre, nous vous aidons à prendre les
                bonnes décisions pour faire prospérer votre entreprise.
              </p>
            </div>
            <div class="card_s card-02_s">
              <h3>Visibilité et SEO </h3>
              <p>
                Soyez en tête des résultats de recherche et dominez votre
                marché. Nous optimisons votre site pour les moteurs de
                recherche, vous plaçant devant vos concurrents et attirant un
                flux constant de clients potentiels. Avec notre expertise, votre
                entreprise sera incontournable en ligne.
              </p>
            </div>
          </div>
          <div class="row_s">
            <div class="card_s card-03-04_s">
              <h3>Réseaux sociaux </h3>
              <p>
                Engagez votre public et développez votre communauté. Nous créons
                du contenu captivant et interagissons avec votre public pour
                renforcer votre présence en ligne et augmenter la fidélité de
                votre marque.
              </p>
            </div>
            <div class="card_s card-03-04_s">
              <h3>Web et site internet </h3>
              <p>
                Donnez à votre entreprise une présence en ligne percutante.
                Grâce à un design élégant et une navigation intuitive, votre
                site captivera vos visiteurs.
              </p>
            </div>
          </div>
          <div class="row_s">
            <div class="card_s card-05_s">
              <h3>Vidéos et photos</h3>
              <p>
                Faites briller votre entreprise avec des vidéos et des photos de
                qualité professionnelle. Nos créateurs vous fourniront un
                contenu visuel captivant, qui mettra en valeur votre marque et
                attirera l’attention de votre public cible.
              </p>
            </div>
            <div class="card_s card-06_s">
              <h3>Création graphique </h3>
              <p>
                De la conception de logos accrocheurs à la création de supports
                marketing percutanst, nous vous fournissons des éléments visuels
                qui renforceront votre image de marque et vous démarqueront de
                la concurrence.
              </p>
            </div>
          </div>
          <div class="row_s">
            <div class="card0_s"></div>
            <div
              class="contact-us_s"
              onClick={() => navigate("/contactez-nous")}
            >
              Nous contacter{" "}
              <svg
                class="w-[148px] h-[48px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.4"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
          </div>
        </section>
        <section class="evenementiel_s">
          <div class="row_s">
            <div class="card0_s">
              <video class="morevideo_video_s" controls>
                <source
                  src="../assets/videos/homepagevideo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="card0_s">
              <h2 class="titre-evenementiel_s">EVENEMENTIEL</h2>
              <h3 class="sous-titre-evenementiel_s">
                Réalisation et couverture d'évènement
              </h3>
              <p class="texte-evenementiel_s">
                Faites de votre événement un succès inoubliable. Notre équipe
                travaille en étroite collaboration avec vous pour créer une
                expérience unique et mémorable, de la planiﬁcation initiale à la
                réalisation. Que ce soit pour un événement d’entreprise, un
                lancement de produit ou une célébration spéciale, nous sommes là
                pour vous aider à faire de votre vision une réalité.
              </p>
              <br />
              <div
                class="contact-us_s"
                onClick={() => navigate("/contactez-nous")}
              >
                Nous contacter{" "}
                <svg
                  class="w-[148px] h-[48px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.4"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section class="support_technique_s">
          <div class="row_s">
            <div class="card0_s">
              <h2 class="title-support_s">SUPPORT TECHNIQUE</h2>
              <h3 class="subtitle-support_s">
                Assistance informatique et maintenance
              </h3>
              <p class="text-support_s">
                Que ce soit pour la maintenance de votre site Internet, des
                logiciels obsolètes ou des questions de sécurité, nous
                intervenons rapidement pour remettre votre système en état de
                marche. Avec notre service d’assistance informatique et de
                maintenance, vous pouvez compter sur une assistance ﬁable et
                eﬃcace pour maintenir vos opérations en toute ﬂuidité.
              </p>
              <br />
              <div
                class="contact-us_s"
                onClick={() => navigate("/contactez-nous")}
              >
                Nous contacter{" "}
                <svg
                  class="w-[148px] h-[48px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.4"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </div>
            </div>
            <div class="card0_s">
              <img
                class="support_technique_img_s"
                src="../assets/img/support_technique.png"
                alt="Message home page"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
