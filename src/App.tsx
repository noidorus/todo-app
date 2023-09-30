import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BoardsPage } from './pages/BoardsPage/BoardsPage';
import './App.scss';
import ActiveBoardPage from './pages/ActiveBoardPage/ActiveBoardPage';
import { ModalProvider } from './components/Modal/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <header>
          <span>logo</span>
          <Link
            style={{
              float: 'right',
              padding: '4px',
              border: '1px solid black',
              borderRadius: '5px',
            }}
            to="/"
          >
            Boards
          </Link>
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
