import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BoardsPage } from './pages/BoardsPage/BoardsPage';
import ActiveBoardPage from './pages/ActiveBoardPage/ActiveBoardPage';
import { ModalProvider } from './components/Modal/ModalProvider';
import { Header } from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<BoardsPage />} />
          <Route path="/:id" element={<ActiveBoardPage />} />
        </Routes>
      </div>
    </ModalProvider>
  );
}

export default App;
