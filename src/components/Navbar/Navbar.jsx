import { Link, NavLink } from "react-router";
import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Github, TextAlignJustify } from "lucide-react";
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
    <nav className="bg-white border-b border-[#E9E9E9]">
      <Container>
        <div className="navbar p-0">
          <div className="navbar-start gap-1">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-transparent shadow-none border-none p-1 sm:hidden"
              >
                <TextAlignJustify size={18} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link
              to=".."
              className="flex items-center justify-center gap-0.5 sm:gap-1.5"
            >
              <img src={logo} alt="Logo" className="size-7 sm:size-10" />
              <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-base sm:text-lg font-bold">
                HERO.IO
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden sm:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
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
