import React, { useState, useEffect, createContext } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Introduce from './components/Introduce';
import Skills from './components/Skills';
import Projects from './components/Projects';
import OtherExperience from './components/OtherExperience';
import Education from './components/Education';
import NavigationBar from './components/NavigationBar';

export const ThemeContext = createContext();

const appStyle = (theme) => ({
  background: theme === 'dark'
    ? 'linear-gradient(180deg, #181a1b 0%, #232526 100%)'
    : 'linear-gradient(180deg, #f7fafc 0%, #e3e8ee 100%)',
  minHeight: '100vh',
  fontFamily: 'Inter, Pretendard, NEXONLv1GothicRegular, sans-serif',
  margin: 0,
  padding: 0,
  color: theme === 'dark' ? '#e0e0e0' : '#232526',
  transition: 'background 0.3s, color 0.3s',
});

const containerStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '32px 16px 64px 16px',
};

const sectionGap = {
  marginBottom: '3.5rem',
};
const divider = {
  border: 0,
  borderTop: '1px solid #232a34',
  margin: '2.5rem 0 2.5rem 0',
  opacity: 0.7,
};

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.style.background = theme === 'dark' ? '#181a1b' : '#f7fafc';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={appStyle(theme)}>
        <NavigationBar />
        <Header />
        <Contact />
        <div style={containerStyle}>
          <div id="introduce" style={sectionGap}><Introduce /></div>
          <hr style={divider} />
          <div id="skills" style={sectionGap}><Skills /></div>
          <hr style={divider} />
          <div id="projects" style={sectionGap}><Projects /></div>
          <hr style={divider} />
          <div id="experience" style={sectionGap}><OtherExperience /></div>
          <hr style={divider} />
          <div id="education" style={sectionGap}><Education /></div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
