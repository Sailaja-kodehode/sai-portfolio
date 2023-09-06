import React from "react";
import "./contact.css";
function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact_title">Kontakt</h2>
      <div className="contact_container">
        <form className="contact_form">
          <label htmlFor="name" className="contact_form_label">
            Navn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact_form_input"
          />
          <label htmlFor="email" className="contact_form_label">
            E-post
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="contact_form_input"
          />
          <label htmlFor="message" className="contact_form_label">
            Beskjed
          </label>
          <textarea
            id="message"
            name="message"
            className="contact_form_text"
          ></textarea>
          <button className="contact_button">Send mail</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
