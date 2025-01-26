import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import logo from '../../assets/logo-pokemon.svg';

import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header-container">
      <nav className="nav container">
        <Link to="/" className="logoLink">
          <img src={logo} alt="logo cinza com o nome pokemon" />
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
          <NavLinks closeMenu={closeMenu} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
