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

const card = {
  background: 'rgba(28, 30, 36, 0.98)',
  borderRadius: '14px',
  padding: '1.3rem 1.2rem',
  marginBottom: '1.3rem',
  border: '1px solid #232a34',
};

const cardTitle = {
  fontWeight: 700,
  fontSize: '1.08rem',
  color: '#8ecae6',
  marginBottom: '0.3rem',
};

const cardMeta = {
  fontSize: '0.95rem',
  color: '#b5d6e6',
  marginBottom: '0.7rem',
};

const ulStyle = {
  fontSize: '1.02rem',
  margin: 0,
  paddingLeft: '1.1em',
  lineHeight: '1.7',
};

const linkBtn = {
  display: 'inline-block',
  background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)',
  color: '#fff',
  borderRadius: '999px',
  padding: '0.45em 1.2em',
  fontWeight: 600,
  fontSize: '0.95rem',
  textDecoration: 'none',
  marginTop: '0.5rem',
  boxShadow: '0 2px 8px rgba(33,147,176,0.08)',
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

      <div style={card}>
        <div style={cardTitle}>멋쟁이사자처럼대학 연합동아리 · PBL 멘토</div>
        <div style={cardMeta}>
          2026.02.14 ~ 2026.02.28 · 백엔드 Django · 14기 대상 (약 2,300명)
        </div>
        <ul style={ulStyle}>
          <li>졸업 이후 연합동아리에서 멘토로 초청받아 PBL 방식으로 학생들이 직접 서비스를 구현하도록 지도했습니다.</li>
          <li>Django 기반 게시판, 인증, CRUD, API 연동 기능을 단계별로 개발하도록 실습 중심으로 진행했습니다.</li>
          <li>MTV 패턴·URL 라우팅·View 흐름을 예제로 설명한 뒤, 학생들이 직접 기능을 설계·구현하도록 유도했습니다.</li>
          <li>막히는 구간은 코드 제공보다 에러 원인 분석, 디버깅, DB 흐름 이해 위주로 설명하며 스스로 해결하도록 멘토링했습니다.</li>
          <li>Git/GitHub 협업, 브랜치 관리, 코드 리뷰 방식을 함께 안내하여 실제 팀 프로젝트 경험을 제공했습니다.</li>
          <li>기능 구현 이후 설계 의도, 유지보수성, 확장성까지 실무 관점으로 추가 설명했습니다.</li>
        </ul>
        <a
          href={process.env.PUBLIC_URL + '/lions-pbl-mentor-certificate.pdf'}
          style={linkBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          활동 확인서 보기 (PDF)
        </a>
      </div>

      <div style={{ ...cardTitle, marginBottom: '0.6rem', fontSize: '1rem' }}>수상 · 공모전</div>
      <ul style={ulStyle}>
        <li>제 9회 대학생이간다 공모전 - 천안시장상</li>
        <li>SW융합클러스터 2.0 디지털 콘텐츠 세종 DX 해커톤 - 고려대학교 세종산학협력단장상</li>
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
