import React, { useState } from "react";
import SimpleNav from "../Components/SimpleNav";
import NavMobile from "../Components/NavMobile";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
// import "../assets/css/nav.css";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../configs/variables";
import { toast } from "react-toastify";
// import "../assets/css/index.css";
// import "../assets/css/section.css";

const Home = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [entreprise, setEntreprise] = useState();
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom.length < 3) {
      toast("Le nom est invalide");
    } else if (prenom.length < 3) {
      toast("Le prénom est invalide");
    } else if (email.length < 5) {
      toast("Adresse mail invalide");
    } else if (message.length < 5) {
      toast("Message trop court");
    } else {
      const templateParams = {
        from_name: entreprise
          ? `${prenom} ${nom} - ${entreprise}`
          : `${prenom} ${nom}`,
        from_email: email,
        to_name: "Equipe Aura",
        message: message,
      };

      console.log("TemplateData: ", templateParams);

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((response) => {
          console.log(response.data);
          setNom("");
          setPrenom("");
          setEmail("");
          setEntreprise("");
          setMessage("");
          console.log("navigating");
          navigate("/message");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <SimpleNav />
      <NavMobile />
      <header className="header_i">
        <img src="../assets/img/logo_black.png" alt="" />
      </header>
      <main>
        <section class="hero_i">
          <div>
            <h1>
              Bienvenue chez Aura, l'art de sublimer vos communications et
              événements
            </h1>
          </div>
          <br />
          <p>
            Aura est une agence de communication audacieuse et créative, dédiée
            à la mise en lumière de votre marque. Nous mettons notre expertise
            en marketing et communication au service de votre réussite. Aura
            orchestre vos communications et événements grâce à la compréhension
            de votre vision et des solutions percutantes pour une expérience
            inoubliable et un succès retentissant.
          </p>
        </section>
        <section class="services_i">
          <div class="services-title_i">
            <h1>
              Découvrez nos services et bénéficiez de notre expertise pour
              renforcer votre entreprise
            </h1>
          </div>
          <br />
          <div class="the-services_i">
            <div class="service_i service-crea_i">
              <h3>CREA 360°</h3>
              <img src="../assets/img/crea360.png" alt="Service 1" />
            </div>
            <div class="service_i service-event_i">
              <h3>EVENT</h3>
              <img src="../assets/img/event.png" alt="Service 2" />
            </div>
            <div class="service_i service-tech_i">
              <h3>TECH</h3>
              <img src="../assets/img/tech.png" alt="Service 3" />
            </div>
          </div>
        </section>
        <section class="more_i">
          <div class="moretext_i">
            <p>
              Aura est une agence de marketing audacieuse et créative, composée
              d’expert en marketing et communication, dédiée à faire rayonner
              votre marque.
            </p>
            <p>
              Chez Aura, nous comprenons vos besoins, traduisons votre vision et
              créons des solutions de communication percutantes qui vous
              permettront d’atteindre vos objectifs.
            </p>
            <h3>
              En savoir plus{" "}
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
            </h3>
          </div>
          <div class="morevideo_i">
            <video class="morevideo_video_i" controls>
              <source
                src="../assets/videos/homepagevideo.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        <section class="home_contact_i">
          <div class="home_contact_brand_i">
            <img
              class="home_contact_img_i"
              src="../assets/img/message_homepage.png"
              alt="Message home page"
            />
          </div>
          <div class="home_contact_brand_i">
            <form class="home_contact_form_i" onSubmit={handleSubmit}>
              <input
                class="input_i nom_i"
                type="text"
                placeholder="Nom"
                onChange={(e) => setNom(e.target.value)}
              />
              <input
                class="input_i prenom_i"
                type="text"
                placeholder="Prénom"
                onChange={(e) => setPrenom(e.target.value)}
              />
              <input
                class="input_i email_i"
                type="text"
                placeholder="Entreprise (facultatif)"
                onChange={(e) => setEntreprise(e.target.value)}
              />
              <input
                class="input_i email_i"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                id="message"
                className="textarea_i message_i"
                cols="30"
                rows="10"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button class="send_button_i" type="submit">
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
