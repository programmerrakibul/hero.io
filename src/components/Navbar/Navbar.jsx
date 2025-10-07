import { Link, NavLink } from "react-router";
import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Github } from "lucide-react";

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
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link to=".." className="flex items-center justify-center gap-1.5">
              <img src={logo} alt="Logo" className="size-10" />
              <span className="text-[#632EE3] font-bold">HERO.IO</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <Link to="https://github.com/programmerrakibul" className="nav-btn">
              <Github fill="#632EE3" size={20} className="bg-white rounded-full" />
              <span>Contribute</span>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
