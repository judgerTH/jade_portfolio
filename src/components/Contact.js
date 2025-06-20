import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const cardStyle = {
  background: 'rgba(36, 39, 46, 0.98)',
  color: '#e0e0e0',
  padding: '1.7rem 2rem',
  fontFamily: 'inherit',
  borderRadius: '16px',
  boxShadow: '0 2px 16px rgba(33,147,176,0.10)',
  margin: '2.5rem auto 2.5rem auto',
  border: '1px solid #232a34',
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.1rem',
};
const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
  fontSize: '1.08rem',
};
const linkStyle = {
  color: '#8ecae6',
  textDecoration: 'none',
  fontWeight: 600,
  transition: 'color 0.15s',
};
const copyBtn = {
  background: 'none',
  border: 'none',
  color: '#8ecae6',
  cursor: 'pointer',
  fontSize: '1.1rem',
  marginLeft: '0.2rem',
  padding: 0,
};
const qrBox = {
  marginTop: '1.5rem',
  background: '#fff',
  borderRadius: '12px',
  padding: '0.7rem',
  boxShadow: '0 2px 8px rgba(33,147,176,0.10)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function Contact() {
  const [copied, setCopied] = useState('');
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 1200);
  };
  const qrValue = JSON.stringify({
    email: 'dev.work.jade@google.com',
    phone: '010-3078-6533',
    github: 'https://github.com/judgerTH',
    blog: 'https://blog.naver.com/disney1026',
  });
  // 모바일에서 QR코드 크기 조정
  const qrSize = window.innerWidth < 500 ? 90 : 110;

  return (
    <section style={cardStyle}>
      <div style={rowStyle}>
        <span role="img" aria-label="email">📧</span>
        dev.work.jade@google.com
        <button style={copyBtn} onClick={() => handleCopy('dev.work.jade@google.com', 'email')} title="복사">
          📋
        </button>
        {copied === 'email' && <span style={{color:'#6dd5ed', fontSize:'0.98em'}}>복사됨!</span>}
      </div>
      <div style={rowStyle}>
        <span role="img" aria-label="phone">📱</span>
        010-3078-6533
        <button style={copyBtn} onClick={() => handleCopy('010-3078-6533', 'phone')} title="복사">
          📋
        </button>
        {copied === 'phone' && <span style={{color:'#6dd5ed', fontSize:'0.98em'}}>복사됨!</span>}
      </div>
      <div style={rowStyle}>
        <span role="img" aria-label="github">🔗</span>
        <a href="https://github.com/judgerTH" style={linkStyle} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div style={rowStyle}>
        <span role="img" aria-label="blog">🚘</span>
        <a href="https://blog.naver.com/disney1026" style={linkStyle} target="_blank" rel="noopener noreferrer">Blog</a>
      </div>
      <div style={qrBox}>
        <QRCode value={qrValue} size={qrSize} fgColor="#232526" bgColor="#fff" />
        <div style={{fontSize:'0.92em', color:'#232526', marginTop:'0.3em'}}>QR로 연락처/채널 저장</div>
      </div>
    </section>
  );
}

export default Contact; 