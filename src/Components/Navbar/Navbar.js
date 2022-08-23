import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="nav">
    <div className="nav-link">
      <h1>Book Store</h1>
      <NavLink to="/" className="link1">BOOKS</NavLink>
      <NavLink to="/categories" className="link2">CATEGORIES</NavLink>
    </div>
  </div>
);

export default Navbar;
