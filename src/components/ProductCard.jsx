import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { name, url } = product;
  return (
    <Link to={`/product/${url}`}>
      <div>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
