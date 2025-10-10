import "./Button.css";
import { Link } from "react-router";

const Button = ({ children, to }) => {
  return (
    <Link to={to} className="button">
      {children}
    </Link>
  );
};

export default Button;
