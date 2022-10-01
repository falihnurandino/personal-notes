import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import ArchivesNotesPage from './pages/ArchivesNotesPage';
import DetailNotesPage from './pages/DetailNotesPage';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="notes-app">
      <header className="notes-app__header">
        <h1>
          <Link to="/">Notes App</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailNotesPage />} />
          <Route path="/archives" element={<ArchivesNotesPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer tabIndex="0">
        <p>Copyright &copy; 2022 Falih Nur Andino</p>
      </footer>
    </div>
  );
}

export default App;
