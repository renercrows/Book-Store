import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="nav">
    <div className="nav-link">
      <h1>Book Store</h1>
      <NavLink to="/">BOOKS</NavLink>
      <NavLink to="/categories">CATEGORIES</NavLink>
    </div>
  </div>
);

export default Navbar;
