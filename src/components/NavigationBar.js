import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const navStyle = (theme) => ({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  background: theme === 'dark' ? 'rgba(24,26,27,0.97)' : 'rgba(247,250,252,0.97)',
  borderBottom: theme === 'dark' ? '1px solid #232a34' : '1px solid #d1d5db',
  boxShadow: '0 2px 8px rgba(33,147,176,0.04)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.2rem',
  padding: '0.7rem 0',
  fontFamily: 'inherit',
  transition: 'background 0.3s',
});
const linkStyle = (theme) => ({
  color: theme === 'dark' ? '#8ecae6' : '#2193b0',
  fontWeight: 600,
  fontSize: '1.08rem',
  textDecoration: 'none',
  padding: '0.2em 0.7em',
  borderRadius: '8px',
  transition: 'background 0.15s, color 0.15s',
});
const toggleBtn = {
  marginLeft: '1.5rem',
  padding: '0.3em 1.1em',
  borderRadius: '999px',
  border: 'none',
  background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(33,147,176,0.08)',
  transition: 'background 0.2s, box-shadow 0.2s',
};

const sections = [
  { id: 'introduce', label: '소개' },
  { id: 'skills', label: '스킬' },
  { id: 'projects', label: '프로젝트' },
  { id: 'experience', label: '경험' },
  { id: 'education', label: '교육' },
];

function NavigationBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav style={navStyle(theme)}>
      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          style={linkStyle(theme)}
          onClick={e => { e.preventDefault(); handleScroll(sec.id); }}
        >
          {sec.label}
        </a>
      ))}
      <button
        style={toggleBtn}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="다크/라이트 모드 토글"
      >
        {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
      </button>
    </nav>
  );
}

export default NavigationBar; 