import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const Shop = ({ products, displayedFilter, changeDisplayFilter }) => {
  return (
    <div>
      <button onClick={changeDisplayFilter}>Display filter</button>
      {displayedFilter && (
        <Filter changeDisplayFilter={changeDisplayFilter} products={products} />
      )}
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Shop;
