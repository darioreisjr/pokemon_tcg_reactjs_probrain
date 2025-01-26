import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink, NavLinksProps } from '../../@types/navLinks';

import './Header.css';

const NavLinks: React.FC<NavLinksProps> = ({ closeMenu }) => {
  const links: NavLink[] = [
    { to: '/', label: 'Início' },
    { to: '/cards', label: 'Cards' },
    { to: '/sobre', label: 'Sobre' },
    { to: 'https://pokemontcg.io/', target: '_blank', label: 'Documentação' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <ul className="navLinks">
      {links.map((link) => (
        <li key={link.to} onClick={closeMenu}>
          <Link to={link.to} target={link.target}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
