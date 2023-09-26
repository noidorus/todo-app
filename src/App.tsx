import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BoardsPage } from './pages/BoardsPage/BoardsPage';
import './App.scss';
import ActiveBoardPage from './pages/ActiveBoardPage/ActiveBoardPage';

function App() {
  return (
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
  );
}

export default App;
