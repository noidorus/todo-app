import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import SearchResult from '../SearchResult/SearchResult';
import logo from '../../assets/images/logo.png';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <img width={40} src={logo} alt="" />
      <Search />
      <SearchResult />
      <NavLink className="header__link" to="/">
        Boards
      </NavLink>
    </header>
  );
};
