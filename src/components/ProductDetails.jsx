import { useParams } from "react-router-dom";
import Count from "./Count";

const ProductDetails = ({ products }) => {
  let { url } = useParams();
  const productInfo = products.filter((product) => product.url === url)[0];
  const { name, price, category } = productInfo;
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{category}</p>
      <Count />
    </div>
  );
};

export default ProductDetails;
