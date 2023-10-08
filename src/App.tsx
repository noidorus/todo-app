import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { BoardsPage } from './pages/BoardsPage/BoardsPage';
import ActiveBoardPage from './pages/ActiveBoardPage/ActiveBoardPage';
import { ModalProvider } from './components/Modal/ModalProvider';
import logo from './assets/images/logo.png';
import './App.scss';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <header>
          <img width={40} src={logo} alt="" />
          <NavLink className="header__link" to="/">
            Boards
          </NavLink>
        </header>

        <Routes>
          <Route path="/" element={<BoardsPage />} />
          <Route path="/:id" element={<ActiveBoardPage />} />
        </Routes>
      </div>
    </ModalProvider>
  );
}

export default App;
