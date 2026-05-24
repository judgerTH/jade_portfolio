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

const certCard = {
  background: 'rgba(28, 30, 36, 0.98)',
  borderRadius: '14px',
  padding: '1.3rem 1.2rem',
  border: '1px solid #232a34',
  borderLeft: '4px solid #8ecae6',
};

const certTitle = {
  fontWeight: 700,
  fontSize: '1.1rem',
  color: '#8ecae6',
  marginBottom: '0.35rem',
};

const certMeta = {
  fontSize: '0.98rem',
  color: '#b5d6e6',
  lineHeight: '1.7',
  marginBottom: '0.9rem',
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
  boxShadow: '0 2px 8px rgba(33,147,176,0.08)',
};

function Certifications() {
  return (
    <section style={sectionStyle}>
      <div style={titleStyle}>
        <span role="img" aria-label="certificate">📜</span> Certifications
      </div>
      <div style={certCard}>
        <div style={certTitle}>리눅스마스터 2급</div>
        <div style={certMeta}>
          국가공인 정보통신기술자격 · 자격번호 LMS-2601-004219<br />
          합격일 2026.04.03
        </div>
        <a
          href={process.env.PUBLIC_URL + '/linux-master-certificate.pdf'}
          style={linkBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          자격증 원본 보기 (PDF)
        </a>
      </div>
    </section>
  );
}

export default Certifications;
