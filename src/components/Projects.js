import React, { useState } from 'react';
import { FaReact, FaPython, FaAws, FaDocker, FaGithub, FaCloud } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiOracle, SiNavercloud, SiFlask } from 'react-icons/si';

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
const projectCard = {
  background: 'rgba(28, 30, 36, 0.98)',
  borderRadius: '14px',
  boxShadow: '0 2px 12px rgba(33,147,176,0.08)',
  padding: '1.5rem 1.2rem',
  marginBottom: '1.5rem',
  border: '1px solid #232a34',
};
const linkButton = {
  display: 'inline-block',
  background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '999px',
  padding: '0.5em 1.3em',
  fontWeight: 600,
  fontSize: '1rem',
  margin: '0.5em 0.5em 0 0',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(33,147,176,0.08)',
  textDecoration: 'none',
  transition: 'background 0.2s, box-shadow 0.2s',
};
const imgStyle = {
  width: '100%',
  maxWidth: '600px',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(33,147,176,0.10)',
  margin: '0.7rem auto 0.7rem auto',
  display: 'block',
  background: '#232a34',
  cursor: 'pointer',
};
const imgRow = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.2rem',
  margin: '0.5rem 0 0.5rem 0',
};
const tagRow = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.6rem',
  margin: '0.7rem 0 0.7rem 0',
};
const tag = {
  background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)',
  color: '#fff',
  borderRadius: '999px',
  padding: '0.32em 1.1em',
  fontWeight: 600,
  fontSize: '0.98rem',
  letterSpacing: '-0.01em',
  boxShadow: '0 2px 8px rgba(33,147,176,0.08)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4em',
};
const roleTag = {
  ...tag,
  background: 'linear-gradient(90deg, #8ecae6 0%, #2193b0 100%)',
  color: '#232526',
};
const techStackBox = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'rgba(36, 39, 46, 0.85)',
  borderRadius: '10px',
  padding: '0.7rem 1rem',
  marginBottom: '0.7rem',
  marginTop: '0.2rem',
  minHeight: '48px',
  justifyContent: 'flex-start',
  boxShadow: '0 1px 6px rgba(33,147,176,0.07)',
  maxWidth: '100%',
  overflowX: 'auto',
};

function Projects() {
  // 각 프로젝트별 시연영상 토글 상태
  const [showVideo, setShowVideo] = useState([false, false, false]);
  const handleToggle = idx => {
    setShowVideo(prev => prev.map((v, i) => i === idx ? !v : v));
  };
  return (
    <section style={sectionStyle}>
      <div style={titleStyle}>
        <span role="img" aria-label="project">📁</span> Projects
      </div>
      {/* 프로젝트 1 */}
      <div style={projectCard}>
        <h3 style={{color:'#8ecae6', fontWeight:700, fontSize:'1.15rem'}}>Modie</h3>
        <ul style={{margin:'0 0 1.1rem 0', paddingLeft:'1.1em', fontSize:'1.02rem', lineHeight:'1.7'}}>
          <li>진행기관 : 카카오테크 부트캠프</li>
          <li>활동기간 : 2025-01-20 ~ 2025-05-03</li>
          <li>팀 인원 : 6명<br/>
            <span style={{fontSize:'0.97em', color:'#b5d6e6'}}>
              └ 프론트 : 2명, 백엔드 : 3명, 데브옵스 : 1명
            </span>
          </li>
        </ul>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700, color:'#8ecae6', marginRight:'0.7rem'}}>기술스택</span>
          <div style={techStackBox}>
            <span style={tag}><SiSpringboot size={18}/>SpringBoot</span>
            <span style={tag}><FaAws size={18}/>AWS</span>
            <span style={tag}><FaDocker size={18}/>Docker</span>
            <span style={tag}><FaReact size={18}/>React</span>
            <span style={tag}><SiMysql size={18}/>MySQL</span>
            <span style={tag}><FaGithub size={18}/>GitHub Actions</span>
          </div>
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700, color:'#8ecae6'}}>담당업무</span>
          <ul style={{margin:'0.3rem 0 1.1rem 1.1em', fontSize:'1.02rem', listStyle:'disc', lineHeight:'1.7'}}>
            <li>jwt를 활용한 카카오로그인</li>
            <li>Stomp를 활용한 채팅기능 개발</li>
            <li>프론트-백엔드 간 API 연결</li>
          </ul>
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700, color:'#8ecae6'}}>업무 성과</span>
          <ul style={{margin:'0.3rem 0 1.1rem 1.1em', fontSize:'1.02rem', listStyle:'disc', lineHeight:'1.7'}}>
            <li>채팅 내역 불러오기 API 속도 테스트 - System.currentTimeMillis() 사용</li>
            <li>기존 : 메세지 당 쿼리를 하나씩 요청보냈을 때, 25개의 메세지 불러오는 시간 → 0.1초 * 25건 = 2.5초</li>
            <li>수정 후 : 25개를 하나의 쿼리로 작성하여 총 소모 시간 단축 → 0.8초</li>
            <li>속도 개선율 : 68%</li>
          </ul>
        </div>
        <div style={imgRow}>
          <a href={process.env.PUBLIC_URL + '/그림1_PROD서버아키텍처.png'} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/그림1_PROD서버아키텍처.png'} alt="PROD 서버 아키텍처" style={imgStyle} />
          </a>
          <a href={process.env.PUBLIC_URL + '/그림2_DEV서버아키텍처.png'} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/그림2_DEV서버아키텍처.png'} alt="DEV 서버 아키텍처" style={imgStyle} />
          </a>
        </div>
        <a href="https://github.com/100-hours-a-week/3-team-modie-be" style={linkButton} target="_blank" rel="noopener noreferrer">GitHub</a>
        <button style={linkButton} onClick={() => handleToggle(0)}>시연 영상</button>
        {showVideo[0] && (
          <div style={{marginTop:'1.2rem', textAlign:'center'}}>
            <iframe width="100%" height="320" src="https://www.youtube.com/embed/0pVhOIUkDa8" title="Modie 시연영상" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{borderRadius:'12px', maxWidth:'600px'}}></iframe>
          </div>
        )}
      </div>
      {/* 프로젝트 2 */}
      <div style={projectCard}>
        <h3 style={{color:'#8ecae6', fontWeight:700, fontSize:'1.15rem'}}>아무 말 대잔치 <span style={{fontSize:'0.9rem', color:'#bbb'}}>- 현재 리팩토링 진행중</span></h3>
        <ul style={{margin:'0 0 1.1rem 0', paddingLeft:'1.1em', fontSize:'1.02rem', lineHeight:'1.7'}}>
          <li>진행기관 : 개인</li>
          <li>활동기간 : 2024-10-23 ~ 2025-02-28</li>
          <li>팀 인원 : 1명(개인프로젝트)</li>
        </ul>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700, color:'#8ecae6', marginRight:'0.7rem'}}>기술스택</span>
          <div style={techStackBox}>
            <span style={tag}><FaReact size={18}/>React</span>
            <span style={tag}><FaAws size={18}/>AWS</span>
            <span style={tag}><SiMysql size={18}/>MySQL</span>
            <span style={tag}><FaDocker size={18}/>Docker</span>
            <span style={tag}><SiFlask size={18}/>Node.js</span>
            <span style={tag}><FaCloud size={18}/>Express</span>
          </div>
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700, color:'#8ecae6'}}>특징</span>
          <ul style={{margin:'0.3rem 0 1.1rem 1.1em', fontSize:'1.02rem', listStyle:'disc', lineHeight:'1.7'}}>
            <li>모든 과정을 혼자서 수행하여 독립적으로 웹 서비스 런칭</li>
          </ul>
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700, color:'#8ecae6'}}>담당업무</span>
          <ul style={{margin:'0.3rem 0 1.1rem 1.1em', fontSize:'1.02rem', listStyle:'disc', lineHeight:'1.7'}}>
            <li>AWS EC2를 이용한 서버 배포 및 관리</li>
            <li>AWS RDS를 활용한 데이터베이스 관리</li>
            <li>블루-그린 전략을 활용한 무중단 배포 실현</li>
          </ul>
        </div>
        <div style={imgRow}>
          <a href={process.env.PUBLIC_URL + '/그림3_아무말대잔치아키텍처.png'} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/그림3_아무말대잔치아키텍처.png'} alt="아무말대잔치 아키텍처" style={imgStyle} />
          </a>
        </div>
        <a href="https://github.com/judgerTH/2-jade-lee-community-fe" style={linkButton} target="_blank" rel="noopener noreferrer">GitHub</a>
        <button style={linkButton} onClick={() => handleToggle(1)}>시연 영상</button>
        {showVideo[1] && (
          <div style={{marginTop:'1.2rem', textAlign:'center'}}>
            <iframe width="100%" height="320" src="https://www.youtube.com/embed/KWbDogHR_04" title="아무 말 대잔치 시연영상" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{borderRadius:'12px', maxWidth:'600px'}}></iframe>
          </div>
        )}
      </div>
      {/* 프로젝트 3 */}
      <div style={projectCard}>
        <h3 style={{color:'#8ecae6', fontWeight:700, fontSize:'1.15rem'}}>MediChart</h3>
        <ul style={{margin:'0 0 1.1rem 0', paddingLeft:'1.1em', fontSize:'1.02rem', lineHeight:'1.7'}}>
          <li>진행기관 : 세종 DX 해커톤 (특상 수상)</li>
          <li>활동기간 : 2024-07-05 ~ 2024-08-06</li>
          <li>팀 인원 : 6명<br/>
            <span style={{fontSize:'0.97em', color:'#b5d6e6'}}>
              └ 프론트 : 2명, 백엔드 : 4명
            </span>
          </li>
        </ul>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700, color:'#8ecae6', marginRight:'0.7rem'}}>기술스택</span>
          <div style={techStackBox}>
            <span style={tag}><SiSpringboot size={18}/>SpringBoot</span>
            <span style={tag}><FaPython size={18}/>Python</span>
            <span style={tag}><SiMysql size={18}/>MySQL</span>
            <span style={tag}><FaReact size={18}/>React</span>
            <span style={tag}><FaAws size={18}/>AWS</span>
            <span style={tag}><FaDocker size={18}/>Docker</span>
          </div>
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700, color:'#8ecae6'}}>담당업무</span>
          <ul style={{margin:'0.3rem 0 1.1rem 1.1em', fontSize:'1.02rem', listStyle:'disc', lineHeight:'1.7'}}>
            <li>공공데이터포탈-건강검진데이터 100만건 전처리 이후 모델링</li>
            <li>scikit-learn과 matplotlib을 활용한 질병 분석 모델 설계</li>
            <li>React의 Geolocation을 활용하여 사용자 위치에서 가장 가까운 병원(건강검진 가능)을 카카오맵에 표시</li>
            <li>백엔드와 프론트엔드 간의 API 연결 전체 담당</li>
          </ul>
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700, color:'#8ecae6'}}>업무 성과</span>
          <ul style={{margin:'0.3rem 0 1.1rem 1.1em', fontSize:'1.02rem', listStyle:'disc', lineHeight:'1.7'}}>
            <li>10만건의 데이터로 학습시킬 모델의 정확성 → 64%</li>
            <li>100만건으로 데이터의 양을 10배로 늘리고 확인해본 결과 정확성 → 82%</li>
            <li>정확성 증가율 → 28.13%</li>
          </ul>
        </div>
        <div style={imgRow}>
          <a href={process.env.PUBLIC_URL + '/그림4_데이터간상관관계히트맵.png'} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/그림4_데이터간상관관계히트맵.png'} alt="데이터간 상관관계 히트맵" style={imgStyle} />
          </a>
          <a href={process.env.PUBLIC_URL + '/그림5_예측흐름도.png'} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/그림5_예측흐름도.png'} alt="예측 흐름도" style={imgStyle} />
          </a>
        </div>
        <a href="https://github.com/judgerTH/2024-09-Medichart" style={linkButton} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://drive.google.com/file/d/1AQCQrWDDd2NS_OQNSIdsBGEtVYFFfKdK/view?usp=sharing" style={linkButton} target="_blank" rel="noopener noreferrer">발표자료</a>
      </div>
    </section>
  );
}

export default Projects; 