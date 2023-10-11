import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BoardsPage } from './pages/BoardsPage/BoardsPage';
import ActiveBoardPage from './pages/ActiveBoardPage/ActiveBoardPage';
import { Header } from './components/Header/Header';
import { ModalLayout } from './components/Modal/ModalLayout';
import { CardModal } from './components/CardModal/CardModal';

import './App.scss';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Header />

      <Routes location={background}>
        <Route path="/" element={<BoardsPage />} />
        <Route path="/:id" element={<ActiveBoardPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="/" element={<ModalLayout />}>
            <Route path="/card/:id" element={<CardModal />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
