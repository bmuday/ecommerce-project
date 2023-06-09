import TopBar from "./TopBar";
import NavLink from "./NavLink";
import { FaShoppingCart } from "react-icons/fa";
import CartNotification from "./CartNotification";

const Header = ({
  totalQuantity,
  displayedCart,
  changeDisplayCart,
  productsInCart,
  removeProduct,
}) => {
  const links = [
    { text: "Home", url: "/" },
    { text: "Shop", url: "/shop" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <div>
      <TopBar />
      <img
        src={
          "https://images.panierdachat.app/68/OwW0mp2s_logo-savonnerie-paysanne-102be223-1cbe-485f-ba39-aec31b142faf.png?w=500&h=105&fit=max"
        }
        alt="logo"
      />
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink link={link} />
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={changeDisplayCart}>
        <FaShoppingCart />
        <span>{totalQuantity}</span>
      </button>
      {displayedCart && (
        <CartNotification
          changeDisplayCart={changeDisplayCart}
          productsInCart={productsInCart}
          removeProduct={removeProduct}
        />
      )}
    </div>
  );
};

export default Header;
