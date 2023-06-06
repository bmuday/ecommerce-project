import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Formulaire de contact</h2>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Sujet" />
        <input type="text" placeholder="Email" />
        <textarea id="story" name="story" rows="5" cols="30"></textarea>
      </form>
    </div>
  );
};

export default Contact;
