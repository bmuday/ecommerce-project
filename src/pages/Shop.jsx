import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const Shop = ({ products, displayedFilter, changeDisplayFilter }) => {
  const categories = products.map((product) => product.category);
  const uniqueCategories = categories.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(50);
  const [category, setCategory] = useState(uniqueCategories[0]);

  const changeMinRange = (range) => {
    setMinRange(range);
  };
  const changeMaxRange = (range) => {
    setMaxRange(range);
  };

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredProductsByPrice = products.filter(
    (product) => product.price >= minRange && product.price <= maxRange
  );
  const filteredProductsByCategory = products.filter(
    (product) => product.category === category
  );

  // Pour récupérer la liste des produits qui respectent les deux filtres par prix et par catégorie,
  // il faut que l'on trouve l'intersection entre le tableau filteredProductsByPrice et le tableau filteredProductsByPrice

  return (
    <div>
      {/* Filtre */}
      <button onClick={changeDisplayFilter}>Display filter</button>
      {displayedFilter && (
        <Filter
          minRange={minRange}
          maxRange={maxRange}
          changeMinRange={changeMinRange}
          changeMaxRange={changeMaxRange}
          category={category}
          changeCategory={changeCategory}
          uniqueCategories={uniqueCategories}
        />
      )}

      {/* Liste des produits */}
      {filteredProductsByCategory.length > 0
        ? filteredProductsByCategory.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        : "No products"}
    </div>
  );
};

export default Shop;
