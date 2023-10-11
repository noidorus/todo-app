import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import './Header.scss';
import { Search } from './Search';

export const Header = () => {
  return (
    <header className="header">
      <img width={40} src={logo} alt="" />
      <Search />
      <NavLink className="header__link" to="/">
        Boards
      </NavLink>
    </header>
  );
};
