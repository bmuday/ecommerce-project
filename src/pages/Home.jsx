import React from "react";
import slide1 from "../images/slide_1.webp";
// import slide2 from "../images/slide_2.webp";

const Home = () => {
  return (
    <div>
      <img src={slide1} alt="Savons" />
      <p>
        La Savonnerie la Paysanne, située à Mont-Tremblant dans les Laurentides,
        vous offre des produits corporels zéro déchet fabriqués à partir
        d'huiles végétales et d'ingrédients naturels. Tous nos produits proposés
        sont faits de façon artisanale par une savonnière passionnée.
        L'authenticité de nos produits, leur originalité et leur qualité font la
        réputation de notre savonnerie. Tous nos savons et tous nos shampoings
        solides sont emballés sur du papier ensemencé de fleurs sauvages.
      </p>
    </div>
  );
};

export default Home;
