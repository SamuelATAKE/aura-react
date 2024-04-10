import React from "react";
import Footer from "../Components/Footer";
// import "../assets/css/nav_contact.css";
// import "../assets/css/contact.css";
import SimpleNavContact from "../Components/SimpleNavContact";
import NavMobileContact from "../Components/NavMobileContact";

const Contact = () => {
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
            />
          </div>
          <div class="card_c">
            <form class="form_c" action="">
              <input class="input_c nom_c" type="text" placeholder="Nom" />
              <input class="input_c prenom_c" type="text" placeholder="Prénom" />
              <input
                class="input_c email_c"
                type="text"
                placeholder="Entreprise (facultatif)"
              />
              <input class="input_c email_c" type="text" placeholder="Email" />
              <textarea
                name="message"
                id="message"
                className="textarea_c message_c"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button class="send_button_c">Envoyer</button>
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
