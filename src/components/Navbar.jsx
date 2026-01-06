import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Wall of Love</div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Wall of Love
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
