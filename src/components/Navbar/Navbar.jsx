import { Link, NavLink } from "react-router";
import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Github } from "lucide-react";
import Button from "../Button/Button";

const Navbar = () => {
  const navItems = ["Home", "Apps", "Installation"];
  const navLinks = navItems.map((item) => (
    <li key={item}>
      <NavLink
        to={item === "Home" ? ".." : item.toLowerCase()}
        className="nav-links"
      >
        {item}
      </NavLink>
    </li>
  ));

  return (
    <nav className="bg-white border-b border-[#E9E9E9] sticky top-0 z-10">
      <Container>
        <div className="navbar p-0">
          <div className="navbar-start gap-1">
            <Link
              to=".."
              className="flex items-center justify-center gap-1.5"
            >
              <img src={logo} alt="Logo" className="size-10" />
              <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-lg font-bold">
                HERO.IO
              </span>
            </Link>
          </div>

          <div className="navbar-center fixed sm:relative bottom-0 left-0 w-full sm:w-auto bg-white border-t-2 border-gray-300 sm:border-none z-10">
            <ul className="menu menu-horizontal w-full justify-evenly px-5 sm:px-1">
              {navLinks}
            </ul>
          </div>

          <div className="navbar-end">
            <Button to="https://github.com/programmerrakibul">
              <Github
                fill="#632EE3"
                size={20}
                className="bg-white rounded-full"
              />
              <span>Contribute</span>
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
