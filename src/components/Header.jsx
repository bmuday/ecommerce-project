import TopBar from "./TopBar";
import NavLink from "./NavLink";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ totalQuantity }) => {
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
            <li>
              <NavLink key={index} link={link} />
            </li>
          ))}
        </ul>
      </nav>
      <FaShoppingCart />
      <span>{totalQuantity}</span>
    </div>
  );
};

export default Header;
