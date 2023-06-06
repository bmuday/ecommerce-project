import { Link } from "react-router-dom";

const NavLink = ({ link }) => {
  const { url, text } = link;
  return <Link to={url}>{text}</Link>;
};

export default NavLink;
