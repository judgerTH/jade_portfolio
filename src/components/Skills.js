import React from 'react';
import { FaReact, FaPython, FaAws, FaDocker, FaGithub, FaCloud } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiOracle, SiFlask } from 'react-icons/si';

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
const tagList = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.7rem',
  marginTop: '1rem',
};
const tag = {
  background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)',
  color: '#fff',
  borderRadius: '999px',
  padding: '0.4em 1.2em',
  fontWeight: 600,
  fontSize: '1rem',
  letterSpacing: '-0.01em',
  boxShadow: '0 2px 8px rgba(33,147,176,0.08)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
};

function Skills() {
  return (
    <section style={sectionStyle}>
      <div style={titleStyle}>
        <span role="img" aria-label="rocket">🚀</span> Skills
      </div>
      <div style={tagList}>
        <span style={tag}><SiSpringboot size={22}/>SpringBoot</span>
        <span style={tag}><SiFlask size={22}/>Flask</span>
        <span style={tag}><FaPython size={22}/>Python</span>
        <span style={tag}><SiOracle size={22}/>Oracle</span>
        <span style={tag}><SiMysql size={22}/>MySQL</span>
        <span style={tag}><FaAws size={22}/>AWS</span>
        <span style={tag}><FaCloud size={22}/>NCP</span>
        <span style={tag}><FaDocker size={22}/>Docker</span>
        <span style={tag}><FaGithub size={22}/>GitHub Actions</span>
        <span style={tag}><FaReact size={22}/>React</span>
      </div>
    </section>
  );
}

export default Skills; 