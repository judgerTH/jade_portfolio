import React, { useEffect, useState } from 'react';

const headerStyle = {
  background: 'linear-gradient(90deg, #232526 0%, #2c5364 100%)',
  color: '#fff',
  padding: '64px 0 32px 0',
  textAlign: 'center',
  fontFamily: 'Inter, Pretendard, NEXONLv1GothicBold, sans-serif',
  borderBottom: '1px solid #222',
};

const mainTitle = {
  fontSize: '2.8rem',
  fontWeight: 800,
  marginBottom: '1.2rem',
  letterSpacing: '-0.03em',
};

const subTitle = {
  fontSize: '1.25rem',
  fontWeight: 400,
  color: '#b5e0ff',
  marginBottom: '0.5rem',
  letterSpacing: '-0.01em',
};

const aboutMeStyle = {
  fontSize: '1.45rem',
  fontWeight: 700,
  color: '#fff',
  margin: '1.2rem 0 0.5rem 0',
  letterSpacing: '-0.01em',
  opacity: 0,
  animation: 'fadeIn 1.2s ease-in 0.2s forwards',
};

// 애니메이션 keyframes를 전역에 추가
if (typeof document !== 'undefined' && !document.getElementById('aboutme-fadein')) {
  const style = document.createElement('style');
  style.id = 'aboutme-fadein';
  style.innerHTML = `@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`;
  document.head.appendChild(style);
}

function Header() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);
  return (
    <header style={headerStyle}>
      <div style={mainTitle}>Backend 개발자 이태현</div>
      <div style={subTitle}>실패를 경험 삼아 성장하며, 안정적인 서비스 운영을 고민하는 개발자입니다.</div>
      <div style={{...aboutMeStyle, opacity: show ? 1 : 0}}>
        💪🏻 실패를 경험 삼아 성장하며, 안정적인 서비스 운영을 고민하는 개발자입니다.
      </div>
    </header>
  );
}

export default Header; 