import { Link } from 'react-router-dom';
import './Header.css';
import NavLinks from './NavLinks';
import { SiPokemon } from 'react-icons/si';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link
          to="/"
          className="logoLink"
        >
          <SiPokemon size={240} />
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
