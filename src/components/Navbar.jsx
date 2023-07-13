import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
