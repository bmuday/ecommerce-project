import { Link } from "react-router-dom";
const CartNotification = ({
  changeDisplayCart,
  productsInCart,
  removeProduct,
}) => {
  return (
    <div>
      {productsInCart.map((product, index) => (
        <div key={index}>
          <img src={product.source} alt={product.name} width={80} />
          <p>{product.name}</p>
          <p>{product.quantity}</p>
          <p>${product.price}</p>
          <div>
            <Link to={`/product/${product.url}`}>Voir l'item</Link>
            <button onClick={() => removeProduct(product.name)}>Retirer</button>
          </div>
        </div>
      ))}
      <button onClick={changeDisplayCart}>Close</button>
    </div>
  );
};

export default CartNotification;
