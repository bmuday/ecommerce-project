import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  let { url } = useParams();
  const productInfo = products.filter((product) => product.url === url)[0];
  const { name, price, category } = productInfo;
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{category}</p>
    </div>
  );
};

export default ProductDetails;
