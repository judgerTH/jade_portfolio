import React, { useState } from 'react';
import Career from './Career';
import StudentProjects from './StudentProjects';

const sectionStyle = {
  background: 'rgba(36, 39, 46, 0.95)',
  color: '#e0e0e0',
  padding: '2.5rem 2rem',
  fontFamily: 'inherit',
  borderRadius: '18px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
  marginBottom: '2.5rem',
  border: '1px solid #232a34',
  transition: 'box-shadow 0.2s',
};

const titleStyle = {
  color: '#8ecae6',
  fontWeight: 700,
  fontSize: '1.3rem',
  marginBottom: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const tabBarStyle = {
  display: 'flex',
  gap: '0.6rem',
  marginBottom: '1.8rem',
  flexWrap: 'wrap',
};

const tabBtnStyle = (active) => ({
  background: active
    ? 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)'
    : 'rgba(36, 39, 46, 0.85)',
  color: active ? '#fff' : '#8ecae6',
  border: active ? 'none' : '1px solid #232a34',
  borderRadius: '999px',
  padding: '0.55em 1.4em',
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: active ? '0 2px 8px rgba(33,147,176,0.15)' : 'none',
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
});

function Projects() {
  const [activeTab, setActiveTab] = useState('career');

  return (
    <section style={sectionStyle}>
      <div style={titleStyle}>
        <span role="img" aria-label="project">📁</span> 경력 & 프로젝트
      </div>
      <div style={tabBarStyle}>
        <button
          type="button"
          style={tabBtnStyle(activeTab === 'career')}
          onClick={() => setActiveTab('career')}
        >
          회사 경력
        </button>
        <button
          type="button"
          style={tabBtnStyle(activeTab === 'student')}
          onClick={() => setActiveTab('student')}
        >
          학생 프로젝트
        </button>
      </div>
      {activeTab === 'career' ? <Career /> : <StudentProjects />}
    </section>
  );
}

export default Projects;
