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
const imgStyle1 = {
  width: '100%',
  maxWidth: '440px',
  height: 'auto',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(33,147,176,0.10)',
  background: '#232a34',
  cursor: 'pointer',
};
const imgStyle2 = {
  width: '100%',
  maxWidth: '260px',
  height: 'auto',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(33,147,176,0.10)',
  background: '#232a34',
  cursor: 'pointer',
};

function OtherExperience() {
  return (
    <section style={sectionStyle}>
      <div style={titleStyle}>
        <span role="img" aria-label="trophy">🏆</span> Other Experience
      </div>
      <ul style={ulStyle}>
        <li>제 9회 대학생이간다 공모전 - 천안시장상</li>
        <li>SW융합클러스터 2.0 디지털 콘텐츠 세종 DX 해커톤 - 고려대학교 세종산학협력단장상</li>
        <li>멋쟁이사자처럼 대학 13기 해커톤 멘토</li>
        <li style={{
              fontSize: '0.98rem',
              color: '#b5d6e6',
              marginTop: '0.4rem',
              marginLeft: '1.2rem',     // 🔹 들여쓰기 핵심
              listStyle: 'none',        // 🔹 점 제거
              lineHeight: '1.6',
            }}>
          해커톤 기간 동안 팀별 아이디어 구체화 및 백엔드 구조 설계에 대한 피드백을 제공하며,
          <br></br>초심자 질문에 대응하는 멘토 역할을 수행했습니다.
        </li>

      </ul>
      <div style={imgRow}>
        <a href={process.env.PUBLIC_URL + '/그림6_대외활동사진1.png'} target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/그림6_대외활동사진1.png'} alt="대외활동 사진1" style={imgStyle1} />
        </a>
        <a href={process.env.PUBLIC_URL + '/그림7_대외활동사진2.png'} target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/그림7_대외활동사진2.png'} alt="대외활동 사진2" style={imgStyle2} />
        </a>
      </div>
    </section>
  );
}

export default OtherExperience; 