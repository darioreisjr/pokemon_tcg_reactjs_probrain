import { Link } from 'react-router-dom';
import './Header.css';

const NavLinks = () => {
  const links = [
    { to: '/', label: 'Início' },
    { to: '/cards', label: 'Cards' },
    { to: '/sobre', label: 'Sobre' },
    { to: 'https://pokemontcg.io/', target: '_blank', label: 'Documentação' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <ul className="navLinks">
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} target={link.target}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
