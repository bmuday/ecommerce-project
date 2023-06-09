import React from "react";

// use Nodemailer library to send email
const Contact = () => {
  return (
    <div>
      <h2>Formulaire de contact</h2>
      <form onSubmit={""}>
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Sujet" />
        <input type="text" placeholder="Email" />
        <textarea id="story" name="story" rows="5" cols="30"></textarea>
        <button type="submit">Envoyer mon message</button>
      </form>
    </div>
  );
};

export default Contact;
