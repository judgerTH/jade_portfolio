import React, { useState } from 'react';
import { FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiElasticsearch, SiPostgresql } from 'react-icons/si';

const projectCard = {
  background: 'rgba(28, 30, 36, 0.98)',
  borderRadius: '14px',
  boxShadow: '0 2px 12px rgba(33,147,176,0.08)',
  padding: '1.5rem 1.2rem',
  marginBottom: '1.5rem',
  border: '1px solid #232a34',
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
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4em',
};

const techStackBox = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'rgba(36, 39, 46, 0.85)',
  borderRadius: '10px',
  padding: '0.7rem 1rem',
  marginBottom: '1rem',
  marginTop: '0.2rem',
  boxShadow: '0 1px 6px rgba(33,147,176,0.07)',
};

const flowBlock = {
  marginBottom: '0.85rem',
  paddingLeft: '0.85rem',
  borderLeft: '3px solid #232a34',
};

const flowLabel = {
  fontWeight: 700,
  color: '#8ecae6',
  fontSize: '0.92rem',
  marginBottom: '0.25rem',
  letterSpacing: '0.02em',
};

const flowText = {
  fontSize: '1.02rem',
  lineHeight: '1.65',
  color: '#d8dee9',
  margin: 0,
};

const resultBadge = {
  display: 'inline-block',
  background: 'rgba(33,147,176,0.18)',
  color: '#8ecae6',
  borderRadius: '8px',
  padding: '0.45rem 0.85rem',
  fontSize: '0.95rem',
  fontWeight: 600,
  marginTop: '0.3rem',
};

const noticeBox = {
  background: 'rgba(36, 39, 46, 0.85)',
  borderRadius: '12px',
  padding: '1rem 1.2rem',
  fontSize: '0.95rem',
  color: '#b5d6e6',
  lineHeight: '1.65',
  border: '1px dashed #3a4553',
  marginTop: '0.5rem',
};

const detailBtn = {
  display: 'inline-block',
  background: '#232a34',
  color: '#8ecae6',
  border: '1px solid #3a4553',
  borderRadius: '999px',
  padding: '0.5em 1.3em',
  fontWeight: 600,
  fontSize: '0.95rem',
  marginTop: '0.5rem',
  cursor: 'pointer',
};

const detailBox = {
  marginTop: '1rem',
  background: 'rgba(26, 29, 35, 0.95)',
  borderRadius: '12px',
  padding: '1.2rem',
  border: '1px solid #232a34',
};

const subTitle = {
  fontWeight: 700,
  color: '#8ecae6',
  fontSize: '0.98rem',
  marginBottom: '0.5rem',
  marginTop: '1rem',
};

const codeBlock = {
  background: '#14171c',
  borderRadius: '8px',
  padding: '0.85rem 1rem',
  fontSize: '0.84rem',
  lineHeight: '1.55',
  overflowX: 'auto',
  color: '#c5d4e3',
  border: '1px solid #232a34',
  margin: '0.5rem 0 0.8rem',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  whiteSpace: 'pre',
};

const tableCell = {
  padding: '0.45em 0.75em',
  border: '1px solid #232a34',
  textAlign: 'center',
  fontSize: '0.93em',
};

function FlowItem({ label, children, highlight }) {
  return (
    <div style={{ ...flowBlock, borderLeftColor: highlight ? '#8ecae6' : '#232a34' }}>
      <div style={flowLabel}>{label}</div>
      <p style={flowText}>{children}</p>
    </div>
  );
}

const archBlock = {
  ...codeBlock,
  color: '#8ecae6',
  textAlign: 'center',
  lineHeight: '1.8',
  fontSize: '0.82rem',
};

const tagList = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.45rem',
  margin: '0.5rem 0 0.8rem',
};

const detectTag = {
  background: 'rgba(33,147,176,0.15)',
  color: '#b5d6e6',
  borderRadius: '6px',
  padding: '0.3em 0.75em',
  fontSize: '0.88rem',
  border: '1px solid #2a3540',
};

function SearchTechnicalDetail() {
  return (
    <div style={detailBox}>
      <div style={{ ...subTitle, marginTop: 0 }}>데이터 적재 최적화</div>
      <p style={{ ...flowText, marginBottom: '0.5rem' }}>
        Spring Batch 기반으로 5,000건 단위 Bulk API 비동기 적재를 구성했습니다.
        적재 중 refresh_interval 비활성화, replica 임시 제거 후 완료 시 복구하는 방식으로 전국 주소 데이터 적재 시간을 단축했습니다.
      </p>
      <pre style={codeBlock}>{`// 적재 중 인덱스 설정
PUT road_address/_settings
{ "index": { "refresh_interval": "-1", "number_of_replicas": 0 } }

// Bulk 적재 (5,000건 단위)
POST _bulk
{ "index": { "_index": "road_address", "_id": "1001" } }
{ "roadAddr": "서울특별시 강남구 테헤란로", "jibun": "역삼동", "x": 127.123, "y": 37.123 }`}</pre>

      <div style={subTitle}>검색어 전처리 · Analyzer 설계</div>
      <p style={{ ...flowText, marginBottom: '0.5rem' }}>
        「강남 테헤란」「테헤란로123」「ㄱㄴㅌㅎㄹ」 등 다양한 입력 패턴을 대응하기 위해 Java 전처리와 Ngram Analyzer를 적용했습니다.
        자동완성은 Edge Ngram으로 별도 구성했습니다.
      </p>
      <pre style={codeBlock}>{`public String normalizeKeyword(String keyword) {
    if (keyword == null) return "";
    return keyword.trim()
        .replaceAll("\\\\s+", " ")
        .replaceAll("[^가-힣0-9a-zA-Z\\\\s]", "")
        .toLowerCase();
}

// Ngram Analyzer — 부분·초성 검색 대응
"tokenizer": { "type": "ngram", "min_gram": 2, "max_gram": 3 }`}</pre>

      <div style={subTitle}>multi_match 쿼리 전략</div>
      <p style={{ ...flowText, marginBottom: '0.5rem' }}>
        기존 RDB LIKE Full Scan 대신 multi_match + field boost로 도로명 우선 검색, 오타·부분 검색을 지원했습니다.
      </p>
      <pre style={codeBlock}>{`{
  "query": {
    "multi_match": {
      "query": "강남 테헤란",
      "fields": ["roadAddr^3", "buildingName^2", "jibun"],
      "type": "best_fields"
    }
  }
}`}</pre>

      <div style={subTitle}>성능 개선 수치</div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '0.4rem' }}>
          <thead>
            <tr style={{ background: '#232a34', color: '#8ecae6' }}>
              <th style={tableCell}>항목</th>
              <th style={tableCell}>기존 RDB</th>
              <th style={tableCell}>Elasticsearch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCell}>주소 검색 응답</td>
              <td style={tableCell}>약 2~4초</td>
              <td style={{ ...tableCell, color: '#8ecae6', fontWeight: 600 }}>약 200~400ms</td>
            </tr>
            <tr>
              <td style={tableCell}>자동완성</td>
              <td style={tableCell}>미지원</td>
              <td style={tableCell}>지원</td>
            </tr>
            <tr>
              <td style={tableCell}>전국 주소 적재</td>
              <td style={tableCell}>약 9~10시간</td>
              <td style={{ ...tableCell, color: '#8ecae6', fontWeight: 600 }}>약 2~3시간</td>
            </tr>
            <tr>
              <td style={tableCell}>일일 증분 적재</td>
              <td style={tableCell}>약 30~40분</td>
              <td style={{ ...tableCell, color: '#8ecae6', fontWeight: 600 }}>약 8~12분</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MonitoringTechnicalDetail() {
  const detectedItems = [
    'Elasticsearch 적재 실패',
    '공공데이터 API 응답 지연',
    'DB Connection Pool 부족',
    'Batch Scheduler 중단',
    'NullPointerException',
    'OutOfMemory 위험 로그',
    '특정 API 5xx 급증',
  ];

  return (
    <div style={detailBox}>
      <div style={{ ...subTitle, marginTop: 0 }}>로그 수집 구조</div>
      <pre style={archBlock}>{`Application Server
        ↓
    Filebeat
        ↓
    Logstash  →  Grok Filter  →  Slack Webhook
        ↓
 Elasticsearch
        ↓
 Kibana Dashboard`}</pre>

      <div style={subTitle}>Logstash Grok 필터 — 에러 패턴 구조화</div>
      <p style={{ ...flowText, marginBottom: '0.5rem' }}>
        ERROR, Exception, Timeout, Connection refused, Batch Fail 등 장애 패턴을 Grok 필터로 분석·구조화했습니다.
      </p>
      <pre style={codeBlock}>{`filter {
  if [message] =~ "ERROR|Exception|Fail|Timeout|Connection refused" {
    grok {
      match => {
        "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:error_message}"
      }
    }
  }
}`}</pre>

      <div style={subTitle}>Slack Webhook — 실시간 장애 알림</div>
      <p style={{ ...flowText, marginBottom: '0.5rem' }}>
        ERROR 레벨 로그 발생 시 운영 Slack 채널로 즉시 알림이 전달되도록 Logstash HTTP Output을 구성했습니다.
      </p>
      <pre style={codeBlock}>{`output {
  if [level] == "ERROR" {
    http {
      url => "https://hooks.slack.com/services/XXXXX"
      http_method => "post"
      format => "json"
      mapping => { "text" => "[장애 감지] %{error_message}" }
    }
  }
}`}</pre>

      <div style={subTitle}>실제 운영 중 감지 항목</div>
      <div style={tagList}>
        {detectedItems.map(item => (
          <span key={item} style={detectTag}>{item}</span>
        ))}
      </div>

      <div style={subTitle}>운영 효율 개선</div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '0.4rem' }}>
          <thead>
            <tr style={{ background: '#232a34', color: '#8ecae6' }}>
              <th style={tableCell}>항목</th>
              <th style={tableCell}>개선 전</th>
              <th style={tableCell}>개선 후</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCell}>장애 인지</td>
              <td style={tableCell}>수동 확인·제보</td>
              <td style={{ ...tableCell, color: '#8ecae6', fontWeight: 600 }}>실시간 Slack 알림</td>
            </tr>
            <tr>
              <td style={tableCell}>로그 분석</td>
              <td style={tableCell}>서버 직접 접속</td>
              <td style={{ ...tableCell, color: '#8ecae6', fontWeight: 600 }}>Kibana 대시보드</td>
            </tr>
            <tr>
              <td style={tableCell}>운영 대응</td>
              <td style={tableCell}>지연 발생</td>
              <td style={{ ...tableCell, color: '#8ecae6', fontWeight: 600 }}>즉각 대응</td>
            </tr>
            <tr>
              <td style={tableCell}>장애 누락</td>
              <td style={tableCell}>가능성 존재</td>
              <td style={{ ...tableCell, color: '#8ecae6', fontWeight: 600 }}>대폭 감소</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Career() {
  const [showSearchDetail, setShowSearchDetail] = useState(false);
  const [showMonitorDetail, setShowMonitorDetail] = useState(false);

  return (
    <>
      <div style={{
        ...projectCard,
        borderLeft: '4px solid #8ecae6',
        marginBottom: '1.8rem',
      }}>
        <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#8ecae6', marginBottom: '0.3rem' }}>
          (주)이지스
        </div>
        <div style={{ color: '#b5d6e6', fontSize: '1rem', marginBottom: '0.5rem' }}>
          2025.08 ~ 현재
        </div>
        <p style={{ lineHeight: '1.65', fontSize: '1.02rem', margin: 0, color: '#d8dee9' }}>
          검색·데이터·인프라 영역의 백엔드 업무를 수행하고 있습니다.
        </p>
      </div>

      <div style={projectCard}>
        <h3 style={{ color: '#8ecae6', fontWeight: 700, fontSize: '1.15rem', marginTop: 0, marginBottom: '0.9rem' }}>
          도로명주소 전국 단위 검색 시스템 고도화
        </h3>
        <div style={techStackBox}>
          <span style={tag}><SiSpringboot size={18} />Spring Boot</span>
          <span style={tag}><SiSpringboot size={18} />Spring Batch</span>
          <span style={tag}><SiElasticsearch size={18} />Elasticsearch</span>
          <span style={tag}><FaDocker size={18} />Docker</span>
          <span style={tag}>REST API</span>
        </div>
        <FlowItem label="배경">
          기존 RDB 기반 LIKE·복합 JOIN 구조와 시중 API의 좌표 데이터 부족으로 검색 속도 저하와 대량 적재 지연이 발생했습니다.
          사내 geom 데이터와 도로명주소체계를 결합해 활용할 수 있는 구조가 필요했습니다.
        </FlowItem>
        <FlowItem label="해결">
          Elasticsearch 기반 검색 시스템을 직접 설계·구축했습니다.
          Bulk API 적재 최적화, Ngram·Edge Ngram Analyzer, multi_match 쿼리 전략, Java 검색어 전처리를 적용해
          전국 주소·인허가·시계열·자동완성 검색을 개선했습니다.
        </FlowItem>
        <FlowItem label="결과" highlight>
          검색 응답 <b style={{ color: '#8ecae6' }}>약 2~4초 → 200~400ms</b>,
          전국 적재 <b style={{ color: '#8ecae6' }}>약 9~10시간 → 2~3시간</b>으로 개선했습니다.
          사내 프로젝트에서 실서비스 운영 중입니다.
        </FlowItem>
        <button type="button" style={detailBtn} onClick={() => setShowSearchDetail(v => !v)}>
          {showSearchDetail ? '기술 상세 닫기' : '기술 상세 보기 (Bulk · Analyzer · Query)'}
        </button>
        {showSearchDetail && <SearchTechnicalDetail />}
      </div>

      {/* <div style={projectCard}>
        <h3 style={{ color: '#8ecae6', fontWeight: 700, fontSize: '1.15rem', marginTop: 0, marginBottom: '0.9rem' }}>
          인허가 데이터 시계열 관리 · 위치 기반 행정 서비스
        </h3>
        <div style={techStackBox}>
          <span style={tag}><SiSpringboot size={18} />Spring Boot</span>
          <span style={tag}><SiPostgresql size={18} />PostgreSQL</span>
          <span style={tag}>GIS Engine</span>
          <span style={tag}>Batch</span>
        </div>
        <FlowItem label="배경">
          행정기관에서 관할 지역 사업장의 개업·폐업·업종 변경 이력을 위치 기반으로 파악할 수 있는 서비스가 필요했습니다.
        </FlowItem>
        <FlowItem label="해결">
          공공데이터포털 인허가 데이터를 수집·정제하고, GIS 엔진과 연계해 좌표 매핑 및 시계열 구조로 관리하는 배치·API 시스템을 구축했습니다.
        </FlowItem>
        <FlowItem label="결과" highlight>
          <span style={resultBadge}>강남구청 납품 프로젝트로 실 운영 적용</span>
        </FlowItem>
      </div> */}

      <div style={projectCard}>
        <h3 style={{ color: '#8ecae6', fontWeight: 700, fontSize: '1.15rem', marginTop: 0, marginBottom: '0.9rem' }}>
          사내 클라우드망 로그 모니터링 및 실시간 장애 알림 시스템
        </h3>
        <div style={techStackBox}>
          <span style={tag}><FaDocker size={18} />Docker</span>
          <span style={tag}>Filebeat</span>
          <span style={tag}>Logstash</span>
          <span style={tag}><SiElasticsearch size={18} />Elasticsearch</span>
          <span style={tag}>Kibana</span>
          <span style={tag}>Slack Webhook</span>
        </div>
        <FlowItem label="배경">
          WAS 에러, API 예외, 배치 실패, DB 연결 오류, 수집·Elasticsearch 적재 실패 등이 발생해도
          장애 대응이 유선·수동 확인 위주여서 퇴근 이후 즉시 대응하기 어려운 상황이었습니다.
        </FlowItem>
        <FlowItem label="해결">
          Filebeat → Logstash → Elasticsearch → Kibana 파이프라인을 구축하고,
          Grok 필터로 에러 패턴을 구조화한 뒤 Slack Webhook 연동으로 운영 채널에 실시간 알림을 구현했습니다.
        </FlowItem>
        <FlowItem label="결과" highlight>
          장애 인지가 <b style={{ color: '#8ecae6' }}>수동 확인 → 실시간 알림</b>으로 전환되었고,
          Kibana 기반 로그 분석으로 원인 추적 시간을 단축했습니다. 장애 누락 가능성도 대폭 줄였습니다.
        </FlowItem>
        <button type="button" style={detailBtn} onClick={() => setShowMonitorDetail(v => !v)}>
          {showMonitorDetail ? '기술 상세 닫기' : '기술 상세 보기 (ELK · Grok · Slack)'}
        </button>
        {showMonitorDetail && <MonitoringTechnicalDetail />}
      </div>

      <div style={noticeBox}>
        <span style={{ color: '#8ecae6', fontWeight: 600 }}>📌 안내</span>
        {' '}회사 프로젝트 특성상 상세 아키텍처, 구현 코드, 내부 시스템 구성은 공개하지 않습니다.
      </div>
    </>
  );
}

export default Career;
