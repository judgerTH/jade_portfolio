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

function Introduce() {
  return (
    <section style={sectionStyle}>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'1.5rem'}}>
        <img 
          src={process.env.PUBLIC_URL + '/프로필사진.png'} 
          alt="프로필 사진" 
          style={{
            width: '180px',
            height: '180px',
            maxWidth: '90vw',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 2px 12px rgba(33,147,176,0.15)',
            border: '3px solid #8ecae6',
            marginBottom: '1.1rem',
          }}
        />
        <div style={{fontWeight:800, fontSize:'1.25rem', color:'#8ecae6', marginBottom:'0.3rem'}}>이태현</div>
        <div style={{fontSize:'1.05rem', color:'#b5d6e6', marginBottom:'0.7rem'}}>백엔드/클라우드 지향 개발자</div>
        <div style={titleStyle}>
          <span role="img" aria-label="wave">👋</span> Introduce
        </div>
      </div>
      <p style={{lineHeight:'1.8', fontSize:'1.08rem'}}>
        2023년 2월, 풀스택 개발자가 되기 위해 국비 과정을 시작하며 본격적으로 개발을 배우기 시작했습니다. Java를 기반으로 데이터베이스와 프론트엔드 기초를 익히며, Admin 페이지를 직접 구현하는 과정에서 회원 가입 승인, 경고 조치, 웹소켓 알람 기능 등을 개발하며 실무 감각을 키웠습니다.<br/><br/>
        처음에는 JPQL과 SQL이 낯설어 어려움을 겪었지만, 서브쿼리를 직접 작성하고 성능을 비교해보며 점차 효율적인 쿼리 작성법을 익혔습니다. 이후 팀과 함께 QA 과정을 진행하며 예외 처리의 중요성을 실감했고, 특히 위치 기반 서비스 프로젝트에서는 HTTP와 HTTPS의 차이를 간과해 런칭에 실패하는 경험을 했습니다. 이를 계기로 SSL 인증의 필요성을 절감했고, 이후 보안 배포 시 사전 점검을 철저히 진행하고 있습니다.<br/><br/>
        최근 카카오테크 부트캠프 클라우드 과정을 이수하여 도커와 쿠버네티스를 활용한 컨테이너 기반 배포를 학습하고 있습니다. 이를 통해 서비스 운영의 효율성을 높이는 법을 익히고 있으며, 앞으로도 클라우드 환경에서의 배포 최적화와 보안 강화를 연구하며 보다 안정적인 서비스를 운영할 수 있도록 성장해 나가겠습니다.
      </p>
    </section>
  );
}

export default Introduce; 