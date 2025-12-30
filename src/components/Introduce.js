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
        2023년 2월, 풀스택 개발자가 되기 위해 국비 과정을 시작하며 본격적으로 개발을 배우기 시작했습니다.
        Java 기반으로 백엔드 개발을 중심으로 학습하며, Admin 페이지 구현 과정에서 회원 승인, 경고 처리,
        웹소켓 알림 기능 등을 개발하며 실무 감각을 키웠습니다.
        <br></br><br></br>
        프로젝트를 진행하며 JPQL·SQL 작성, 예외 처리, QA 대응 등에서 많은 시행착오를 겪었고,
        특히 위치 기반 서비스 프로젝트에서 HTTPS 설정 미흡으로 런칭에 실패한 경험을 통해
        보안과 배포 환경 사전 점검의 중요성을 체감했습니다.
        <br></br><br></br>
        현재는 EGIS에서 백엔드 개발자로 재직 중이며,
        개인 홈서버 환경에서 Docker, k3s, ELK 기반으로 서비스를 직접 구축·운영하고 있습니다.
        개발부터 배포·운영까지 전 과정을 경험하며,
        초심자에게도 서비스 구조를 이해하기 쉽게 설명할 수 있는 개발자를 지향하고 있습니다.
      </p>
      <div style={{marginTop:'1rem', paddingTop:'1.5rem', borderTop:'1px solid #232a34'}}>
        <div style={{fontWeight:700, color:'#8ecae6', fontSize:'1.1rem', marginBottom:'1rem'}}>개발자로서의 성장 철학</div>
        <p style={{lineHeight:'1.8', fontSize:'1.08rem', marginBottom:'1.2rem'}}>
          저는 '1인분 하는 개발자'가 되고 싶습니다. 기술적 어려움이나 대인관계적 문제가 발생했을 때, 나만의 생각과 판단으로 문제를 해결할 수 있는 레벨의 개발자가 바로 1인분 하는 개발자라고 생각합니다.
        </p>
        <div style={{marginBottom:'1rem'}}>
          <span style={{fontWeight:600, color:'#8ecae6'}}>팀워크와 소통</span>
          <ul style={{margin:'0.3rem 0 0.7rem 1.1em', fontSize:'1.02rem', lineHeight:'1.7'}}>
            <li>팀 프로젝트 진행 시 최대한 의견을 수용하고 함께 의견을 나누며, 무안함을 주지 않도록 노력하고 있습니다.</li>
            <li>개발 과정에서 발생하는 문제들을 혼자 해결하려 하기보다는 팀원들과 함께 고민하고 해결책을 찾아가는 것을 선호합니다.</li>
          </ul>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <span style={{fontWeight:600, color:'#8ecae6'}}>기술적 성장을 위한 노력</span>
          <ul style={{margin:'0.3rem 0 0.7rem 1.1em', fontSize:'1.02rem', lineHeight:'1.7'}}>
            <li>Java, JavaScript 등 주요 기술들의 공식 GitHub를 팔로우하여 최신 기술 트렌드를 파악하고 있습니다.</li>
            <li>Discord로 정리된 기술 내용을 받을 수 있도록 스크립팅하여 매주 보고 이해하려 노력하고 있습니다.</li>
            <li>기술 도태를 방지하기 위해 지속적인 학습과 실습을 통해 실무에 적용 가능한 기술력을 키워나가고 있습니다.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Introduce; 