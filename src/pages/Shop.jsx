import ProductCard from "../components/ProductCard";

const Shop = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li>
          <ProductCard key={index} product={product} />
        </li>
      ))}
    </ul>
  );
};

export default Shop;
