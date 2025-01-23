import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavLinks from './NavLinks';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="logoLink">
          <img src="/src/assets/logo-pokemon.svg" alt="logo cinza com o nome pokemon" />
        </Link>
        <div
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
