import React, { useState } from "react";
import Footer from "../Components/Footer";
// import "../assets/css/nav_contact.css";
// import "../assets/css/contact.css";
import SimpleNavContact from "../Components/SimpleNavContact";
import NavMobileContact from "../Components/NavMobileContact";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../configs/variables";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
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
      <SimpleNavContact />
      <NavMobileContact />
      <div class="header-class_c">
        <p>
          Contactez-nous dès aujourd’hui pour échanger sur vos projets et
          obtenir un devis personnalisé :
        </p>
        <div class="row_c form-div_c">
          <div class="card_c">
            <img
              class="contact_img"
              src="../assets/img/about_img.png"
              alt="Message home page"
              loading="lazy"
            />
          </div>
          <div class="card_c">
            <form class="form_c" onSubmit={handleSubmit}>
              <input
                class="input_c nom_c"
                type="text"
                placeholder="Nom"
                onChange={(e) => setNom(e.target.value)}
              />
              <input
                class="input_c prenom_c"
                type="text"
                placeholder="Prénom"
                onChange={(e) => setPrenom(e.target.value)}
              />
              <input
                class="input_c email_c"
                type="text"
                placeholder="Entreprise (facultatif)"
                onChange={(e) => setEntreprise(e.target.value)}
              />
              <input
                class="input_c email_c"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                id="message"
                className="textarea_c message_c"
                cols="30"
                rows="10"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button class="send_button_c" type="submit">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <main>
        <section class="map_section"></section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
