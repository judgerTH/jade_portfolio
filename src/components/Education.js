import React from 'react';

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
const ulStyle = {
  fontSize: '1.08rem',
  margin: 0,
  paddingLeft: '1.1em',
  lineHeight: '1.7',
  marginBottom: '1.1rem',
};
const imgRow = {
  display: 'flex',
  gap: '1.2rem',
  marginTop: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
};
const imgStyle = {
  width: '100%',
  maxWidth: '220px',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(33,147,176,0.10)',
  background: '#232a34',
  cursor: 'pointer',
};

function Education() {
  return (
    <section style={sectionStyle}>
      <div style={titleStyle}>
        <span role="img" aria-label="education">🎓</span> Education
      </div>
      <ul style={ulStyle}>
        <li>2019.03 ~ 2025.02 남서울대학교 정보통신공학과</li>
        <li>2023.02 ~ 2023.09 KH정보교육원 풀스택 개발자 과정 수료</li>
        <li>2024.01 ~ 2024.12 멋쟁이사자처럼대학 수료</li>
        <li>2024.10 ~ 2025.05 카카오테크 부트캠프 클라우드 과정 수료</li>
      </ul>
      <div style={imgRow}>
        <a href={process.env.PUBLIC_URL + '/그림8_수료증1.png'} target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/그림8_수료증1.png'} alt="수료증1" style={imgStyle} />
        </a>
        <a href={process.env.PUBLIC_URL + '/그림9_수료증2.png'} target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/그림9_수료증2.png'} alt="수료증2" style={imgStyle} />
        </a>
        <a href={process.env.PUBLIC_URL + '/그림10_수료증3.png'} target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/그림10_수료증3.png'} alt="수료증3" style={imgStyle} />
        </a>
      </div>
    </section>
  );
}

export default Education; 