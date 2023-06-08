import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { url, name, price, source } = product;
  return (
    <div>
      <Link to={`/product/${url}`}>
        <img src={source} alt={name} width={500} height={500} />
      </Link>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
