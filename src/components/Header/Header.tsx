import { Link } from 'react-router-dom';
import './Header.css';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link
          to="/"
          className="logoLink"
        >
          <img src="/src/assets/logo-pokemon.svg" alt="logo cinza com o nome pokemon" />
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
