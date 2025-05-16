import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AboutPage from './pages/AboutPage';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Skills from './pages/Skills';
import './index.css';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-light transition-colors">
        {/* Retro Menu Header */}
        <nav className="fixed top-0 w-full z-50 mac-menu">
          <div className="max-w-7xl mx-auto px-4 h-8 flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/" className="mac-button">👋 About</Link>
              <Link to="/education" className="mac-button">🎓 Education</Link>
              <Link to="/experience" className="mac-button">💼 Work</Link>
              <Link to="/projects" className="mac-button">🚀 Projects</Link>
              <Link to="/leadership" className="mac-button">🤝 Leadership</Link>
              <Link to="/skills" className="mac-button">🛠 Skills</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">{time.toLocaleTimeString()}</span>
            </div>
          </div>
        </nav>

        {/* Page Content with Transitions */}
        <PageTransitions />
      </div>
    </Router>
  );
}

function PageTransitions() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/education"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Education />
            </motion.div>
          }
        />
        <Route
          path="/experience"
          element={
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Experience />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/leadership"
          element={
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Leadership />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Skills />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}