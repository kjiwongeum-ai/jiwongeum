window.SupportFinder = window.SupportFinder || {};

window.SupportFinder.forceRefresh = function() {
    // 데이터 강제 새로고침
    if (document.getElementById('supportFinderSupportGrid')) {
        this.updateCurrentDate();
        this.setupCheckboxes();
    }
};

window.SupportFinder.manualSupportData = [
    {
    title: "경상남도 농어업인수당 지원",
    description: "농어업경영체에 등록된 경영주 및 공동경영주",
    amount: " 연 30만원",
    deadline: "",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "읍면동 행정복지센터",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001092",
    priority: 1
},
    {
    title: "청년미래적금",
    description: "만 19~34세 청년 대상, 3년 만기 적금 상품. 정부가 6~12% 매칭 지원",
    amount: "최대 2,200만원 (3년 만기 시)",
    deadline: "2026-06-30",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "기획재정부",
    category: "자산형성",
    link: "https://www.moef.go.kr",
    priority: 1
  },
  {
    title: "청년도약계좌",
    description: "월 40~70만원 납입 시 정부 기여금 매칭, 5년 만기",
    amount: "최대 5,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "서민금융진흥원",
    category: "자산형성",
    link: "https://www.kinfa.or.kr",
    priority: 1
  },
  {
    title: "국민취업지원제도 구직촉진수당",
    description: "구직활동 지원을 위한 수당 지급 (2026년 월 60만원으로 인상)",
    amount: "월 60만원 (최대 6개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.kua.go.kr",
    priority: 1
  },
  {
    title: "청년일자리도약장려금",
    description: "5인 이상 우선지원대상기업에서 취업애로청년 정규직 채용 시 지원",
    amount: "월 60만원 × 12개월 (최대 720만원)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.ei.go.kr",
    priority: 1
  },
  {
    title: "청년월세 한시 특별지원",
    description: "무주택 저소득 청년 대상 월세 지원 (24개월로 확대)",
    amount: "월 20만원 (최대 24개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "국토교통부",
    category: "주거지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "아동수당 확대",
    description: "아동수당 지급 연령 확대 (만 7세 → 만 8세)",
    amount: "월 10만원",
    deadline: "2026-12-31",
    ages: ["10대 미만"],
    regions: ["전국"],
    source: "보건복지부",
    category: "가족지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "기초생활보장 생계급여",
    description: "기준 중위소득 6.51% 인상에 따른 생계급여 확대",
    amount: "4인가구 207만원, 1인가구 82만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "생활안정",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "교육급여 지원",
    description: "초중고 교육활동지원비 인상 (평균 6%)",
    amount: "초등 50.2만원, 중학 69.9만원, 고등 86만원",
    deadline: "2026-12-31",
    ages: ["10대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "교육지원",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "소상공인 정책자금",
    description: "소상공인 경영안정을 위한 정책자금 융자",
    amount: "최대 7,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 1
  },
  {
    title: "긴급복지 생계지원",
    description: "위기상황 발생 시 긴급 생계비 지원",
    amount: "1인가구 73만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보건복지상담센터",
    category: "생활안정",
    link: "https://www.bokjiro.go.kr",
    priority: 1
  },
  {
    title: "전기차 전환지원금",
    description: "내연차 폐차 후 전기차 구매 시 지원금 지급",
    amount: "최대 400만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "환경부",
    category: "친환경",
    link: "https://www.ev.or.kr",
    priority: 2
  },
  {
    title: "청년 소상공인 창업지원금",
    description: "만 39세 이하 청년 창업 소상공인 자금지원",
    amount: "최대 3,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 1
  },
  {
    title: "전통시장 특례보증",
    description: "전통시장 입점 소상공인 보증지원",
    amount: "최대 2,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "신용보증재단",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 2
  },
  {
    title: "실업크레딧 지원",
    description: "구직급여 수급자 국민연금 보험료 지원",
    amount: "최대 70만원",
    deadline: "2026-12-31",
    ages: ["30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "장기전세 주택공급",
    description: "시세 80% 수준의 저렴한 장기전세주택 공급",
    amount: "시세의 80%",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "한국토지주택공사",
    category: "주거지원",
    link: "https://www.lh.or.kr",
    priority: 1
  },

  // ==================== 서울특별시 ====================
  {
    title: "서울시 청년수당",
    description: "미취업 청년 대상 활동지원금 및 성장지원 프로그램 제공",
    amount: "월 50만원 × 최대 6개월",
    deadline: "2026-03-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "청년지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울 영커리언스 인턴십",
    description: "재학생 중심 일 경험 지원 통합 플랫폼 (캠프, 챌린지, 인턴십)",
    amount: "인턴십 참여 지원",
    deadline: "2026-02-28",
    ages: ["20대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울시 청년월세지원",
    description: "무주택 청년 월세 부담 완화 지원",
    amount: "월 20만원 (최대 12개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "주거지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "희망두배 청년통장",
    description: "청년 자산형성 지원을 위한 매칭 저축",
    amount: "본인저축액 1:1 매칭",
    deadline: "2026-05-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "자산형성",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "청년 이사·중개비 지원",
    description: "서울시 전입 또는 시내 이사 청년 대상 이사비 지원",
    amount: "최대 40만원",
    deadline: "2026-08-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "주거지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "전기 이륜차 보조금",
    description: "도심 대기오염 저감을 위한 전기 이륜차 구매 지원",
    amount: "최대 40%",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["서울특별시"],
    source: "서울시",
    category: "친환경",
    link: "https://www.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년취업사관학교",
    description: "유망 직무 분야 취업 역량 교육 지원",
    amount: "무료 교육 + 취업 연계",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 1
  },
  {
    title: "서울형 마이크로크레딧",
    description: "소상공인 대상 초저금리 융자 및 매장 리뉴얼 바우처",
    amount: "연 1%대 융자",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["서울특별시"],
    source: "서울신용보증재단",
    category: "창업지원",
    link: "https://www.seoulshinbo.co.kr",
    priority: 2
  },
  {
    title: "서울시 고립·은둔청년 지원",
    description: "사회적 고립 청년 대상 맞춤형 상담 및 프로그램",
    amount: "상담 및 프로그램 무료",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울광역청년센터",
    category: "복지지원",
    link: "https://youth.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년정책네트워크",
    description: "청년정책 참여 활동 지원 (정책제안, 모니터링, 홍보)",
    amount: "활동비 지원",
    deadline: "2026-01-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "참여지원",
    link: "https://youth.seoul.go.kr",
    priority: 3
  },
  {
    title: "서울시 뉴딜일자리",
    description: "공공기관 단기 일자리 제공",
    amount: "급여 지급",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["서울특별시"],
    source: "서울특별시",
    category: "취업지원",
    link: "https://job.seoul.go.kr",
    priority: 2
  },
  {
    title: "서울시 청년 면접정장 대여",
    description: "취업준비 청년 대상 면접 정장 무료 대여",
    amount: "무료 대여",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "서울청년센터",
    category: "취업지원",
    link: "https://youth.seoul.go.kr",
    priority: 3
  },

  // ==================== 경기도 ====================
  {
    title: "경기도 청년기본소득",
    description: "만 24세 경기도 청년 대상 분기별 지역화폐 지급",
    amount: "분기별 25만원 (연 최대 100만원)",
    deadline: "2026-03-31",
    ages: ["20대"],
    regions: ["경기도"],
    source: "경기도",
    category: "기본소득",
    link: "https://apply.jobaba.net",
    priority: 1
  },
  {
    title: "경기도 청년 복지포인트",
    description: "중소기업 재직 청년 대상 복지포인트 지급",
    amount: "연 120만원 (반기별 60만원)",
    deadline: "2026-06-12",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "복지지원",
    link: "https://youth.jobaba.net",
    priority: 1
  },
  {
    title: "중소기업 청년 노동자 지원사업",
    description: "경기도 중소기업 재직 청년에게 2년간 지역화폐 지원",
    amount: "2년간 480만원 (반기 120만원)",
    deadline: "2026-10-16",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "복지지원",
    link: "https://youth.jobaba.net",
    priority: 1
  },
  {
    title: "경기도 청년 매입임대주택",
    description: "시세 40~50% 수준 임대주택 제공 (최장 6년)",
    amount: "시세 40~50%",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기주택도시공사",
    category: "주거지원",
    link: "https://www.gico.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 역량강화 기회지원",
    description: "미취업 청년 자격증 응시료 지원",
    amount: "최대 30만원",
    deadline: "2026-11-30",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도",
    category: "취업지원",
    link: "https://www.gg.go.kr",
    priority: 2
  },
  {
    title: "경기도 꿈날개",
    description: "여성 경력개발 온라인 서비스 (무료 교육, 취업 상담)",
    amount: "무료 서비스",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["경기도"],
    source: "경기도여성가족재단",
    category: "취업지원",
    link: "https://www.dreamwing.or.kr",
    priority: 2
  },
  {
    title: "경기도 행복주택",
    description: "대학생, 사회초년생, 신혼부부 대상 공공임대주택",
    amount: "시세 60~80%",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "LH/GH",
    category: "주거지원",
    link: "https://www.lh.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 노동자 통장",
    description: "저소득 청년 자산형성 지원 매칭 저축",
    amount: "본인저축액 매칭",
    deadline: "2026-05-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도미래세대재단",
    category: "자산형성",
    link: "https://account.ggwf.or.kr",
    priority: 1
  },
  {
    title: "경기도 청년 면접비 지원",
    description: "구직활동 청년 면접 교통비 지원",
    amount: "면접당 최대 5만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "취업지원",
    link: "https://youth.jobaba.net",
    priority: 2
  },
  {
    title: "경기도 디지털 상점 전환 사업",
    description: "소상공인 온라인 쇼핑몰, 스마트 POS 설치 지원",
    amount: "최대 500만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경기도"],
    source: "경기도",
    category: "창업지원",
    link: "https://www.gg.go.kr",
    priority: 2
  },
  {
    title: "경기도 국방전직지원 직업교육",
    description: "전역 예정 군인 대상 직업교육 지원",
    amount: "무료 교육",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["경기도"],
    source: "경기도일자리재단",
    category: "취업지원",
    link: "https://gjf.or.kr",
    priority: 3
  },
  {
    title: "경기도 청년 월세 지원",
    description: "무주택 저소득 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경기도"],
    source: "경기도",
    category: "주거지원",
    link: "https://youth.gg.go.kr",
    priority: 1
  },

  // ==================== 인천광역시 ====================
  {
    title: "인천 청년월세 지원",
    description: "무주택 청년 월세 부담 완화",
    amount: "월 20만원 (최대 24개월)",
    deadline: "2026-02-25",
    ages: ["20대", "30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://youth.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 청년 임차보증금 대출이자 지원",
    description: "청년 주거비용 부담 완화를 위한 이자 지원",
    amount: "대출이자 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://youth.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i+ 1억드림 출산지원",
    description: "임산부 교통비, 출산지원금, 아이꿈수당 등 종합 지원",
    amount: "종합 지원 패키지",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "가족지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 75세 이상 버스 무료화",
    description: "어르신 대중교통 복지 확대",
    amount: "버스 무료",
    deadline: "2026-12-31",
    ages: ["70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "교통지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 i-패스 교통비 환급",
    description: "대중교통 이용 시 교통비 환급",
    amount: "환급 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "교통지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 청년 행정체험 인턴십",
    description: "공공기관 다양한 직무체험 기회 제공",
    amount: "인턴십 참여",
    deadline: "2026-01-28",
    ages: ["20대", "30대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "취업지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 소상공인 경영환경개선 지원",
    description: "점포환경, 홍보, 위생, 스마트기술 구축 지원",
    amount: "업체당 최대 250만원",
    deadline: "2026-08-14",
    ages: ["40대", "50대", "60대", "70대"],
    regions: ["인천광역시"],
    source: "인천광역시청",
    category: "창업지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 외로움돌봄 지원",
    description: "사회적 고립 문제 대응 외로움 대응센터, 24시간 상담전화",
    amount: "무료 상담 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["인천광역시"],
    source: "인천광역시 외로움국",
    category: "복지지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 i+ 집Dream 신혼부부 지원",
    description: "신혼부부 임대료 지원",
    amount: "임대료 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 군장병 재해보험",
    description: "군복무 중 발생 피해 보상 보험",
    amount: "보험료 전액 지원",
    deadline: "2026-12-31",
    ages: ["20대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "복지지원",
    link: "https://www.incheon.go.kr",
    priority: 2
  },
  {
    title: "인천 아동수당 확대",
    description: "아동수당 9세 미만으로 확대",
    amount: "월 10만원",
    deadline: "2026-12-31",
    ages: ["10대 미만"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "가족지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },
  {
    title: "인천 자립준비청년 주거지원",
    description: "자립준비청년 주거지원 19개소 확충",
    amount: "주거 지원",
    deadline: "2026-12-31",
    ages: ["20대"],
    regions: ["인천광역시"],
    source: "인천광역시",
    category: "주거지원",
    link: "https://www.incheon.go.kr",
    priority: 1
  },

  // ==================== 충청북도 ====================
  {
    title: "충북 청년 1인가구 이사 지원",
    description: "청년 1인가구 이사비 지원",
    amount: "이사비 지원",
    deadline: "2026-08-27",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 장학금 지원 (성적장학금)",
    description: "충북인재평생교육진흥원 성적장학금",
    amount: "1인 200만원",
    deadline: "2026-09-09",
    ages: ["20대"],
    regions: ["충청북도"],
    source: "충북인재평생교육진흥원",
    category: "교육지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 청년내일저축계좌",
    description: "저소득 청년 자산형성 지원",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "자산형성",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 청년월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 대학생 주거 지원",
    description: "서울·동서울관, 청주관 대학생 주거 지원",
    amount: "기숙사 지원",
    deadline: "2026-12-31",
    ages: ["20대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "주거지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 청년사회서비스사업단",
    description: "청년 사회서비스 분야 일자리 지원",
    amount: "일자리 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "취업지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 마음이음 열린상담",
    description: "청년 심리상담 프로그램",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "복지지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 자립준비청년 자립수당",
    description: "자립준비청년 자립수당 지급",
    amount: "자립수당 지급",
    deadline: "2026-12-31",
    ages: ["20대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "복지지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 1
  },
  {
    title: "충북 행복결혼공제",
    description: "결혼 준비 청년 대상 공제 지원",
    amount: "공제 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "가족지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 소상공인 창업응원금",
    description: "청년 소상공인 창업 지원금",
    amount: "창업 지원금",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "창업지원",
    link: "https://www.chungbuk.go.kr/young",
    priority: 2
  },
  {
    title: "충북 무료 법률상담",
    description: "충북도민 무료 법률상담",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "생활안정",
    link: "https://www.chungbuk.go.kr/young",
    priority: 3
  },

  // ==================== 충청남도 ====================
  {
    title: "충남 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "주거지원",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충남 청년 창업지원금",
    description: "청년 창업자 사업화 자금 지원",
    amount: "최대 3,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "창업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충남 청년 취업지원금",
    description: "미취업 청년 구직활동 지원",
    amount: "구직활동비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "취업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충남 청년 자산형성 지원",
    description: "청년 목돈 마련 매칭 저축",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "자산형성",
    link: "https://youth.chungnam.go.kr",
    priority: 1
  },
  {
    title: "충남 청년활력공간 운영",
    description: "청년 커뮤니티 및 활동 공간 제공",
    amount: "무료 공간 이용",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "참여지원",
    link: "https://youth.chungnam.go.kr",
    priority: 3
  },
  {
    title: "충남 청년 심리상담 지원",
    description: "청년 정신건강 상담 지원",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "복지지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충남 청년 교통비 지원",
    description: "청년 대중교통비 지원",
    amount: "교통비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "교통지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충남 농어촌 청년 정착 지원",
    description: "농어촌 지역 청년 정착 지원금",
    amount: "정착 지원금",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "정착지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충남 청년 직업훈련 지원",
    description: "청년 직업능력개발 훈련비 지원",
    amount: "훈련비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "취업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },
  {
    title: "충남 소상공인 경영안정 자금",
    description: "소상공인 경영안정을 위한 저금리 융자",
    amount: "최대 5,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["충청남도"],
    source: "충청남도",
    category: "창업지원",
    link: "https://youth.chungnam.go.kr",
    priority: 2
  },

  // ==================== 대전광역시 ====================
  {
    title: "대전 청년 주택임차보증금 이자지원",
    description: "대전시 청년 보증금 대출 이자 지원",
    amount: "최대 연 3%",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "주거지원",
    link: "https://djhousing.or.kr",
    priority: 1
  },
  {
    title: "대전 청년 월세 지원",
    description: "대전 거주 청년 무주택 세대주 월세 지원",
    amount: "월 20만원 × 최대 12개월",
    deadline: "2026-08-14",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "주거지원",
    link: "https://www.djhousing.or.kr",
    priority: 1
  },
  {
    title: "대전 영세소상공인 인건비 지원",
    description: "대전 소재 영세 소상공인 신규 채용 인건비 지원",
    amount: "근로자 1인당 150만원 (50만원×3개월)",
    deadline: "2026-11-28",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 2
  },
  {
    title: "대전 청년부부 결혼장려금",
    description: "대전 거주 청년 초혼 부부에게 결혼장려금 지급",
    amount: "1인당 250만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "가족지원",
    link: "https://www.djwedding.or.kr",
    priority: 1
  },
  {
    title: "대전 청년 창업지원",
    description: "대전 청년 창업자 사업화 자금 지원",
    amount: "최대 3,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "창업지원",
    link: "https://www.daejeon.go.kr",
    priority: 1
  },
  {
    title: "대전 청년 취업역량 강화",
    description: "청년 취업 교육 및 상담 지원",
    amount: "무료 교육",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 자격증 응시료 지원",
    description: "취업준비 청년 자격증 응시료 지원",
    amount: "응시료 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 심리상담 지원",
    description: "청년 정신건강 상담 서비스",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "복지지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 청년 면접비 지원",
    description: "구직활동 청년 면접 교통비 지원",
    amount: "면접비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "취업지원",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },
  {
    title: "대전 소상공인 전기요금 지원",
    description: "영세 소상공인 전기요금 지원",
    amount: "전기요금 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "생활안정",
    link: "https://www.daejeon.go.kr",
    priority: 2
  },

  // ==================== 세종특별자치시 ====================
  {
    title: "세종 청년 월세 지원",
    description: "세종시 무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "주거지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 창업지원금",
    description: "세종시 청년 창업자 지원",
    amount: "최대 2,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "창업지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 취업지원",
    description: "미취업 청년 구직활동 지원",
    amount: "구직활동비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 자산형성 지원",
    description: "청년 목돈 마련 매칭 저축",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "자산형성",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 청년 교통비 지원",
    description: "청년 대중교통비 지원",
    amount: "교통비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "교통지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 심리상담",
    description: "청년 정신건강 상담 지원",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "복지지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 직업훈련",
    description: "청년 직업능력개발 훈련 지원",
    amount: "훈련비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 신혼부부 주거지원",
    description: "신혼부부 전세자금 이자 지원",
    amount: "이자 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "주거지원",
    link: "https://www.sejong.go.kr",
    priority: 1
  },
  {
    title: "세종 소상공인 지원금",
    description: "소상공인 경영안정 자금 지원",
    amount: "최대 5,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "창업지원",
    link: "https://www.sejong.go.kr",
    priority: 2
  },
  {
    title: "세종 청년 면접정장 대여",
    description: "취업준비 청년 면접 정장 무료 대여",
    amount: "무료 대여",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["세종특별자치시"],
    source: "세종특별자치시",
    category: "취업지원",
    link: "https://www.sejong.go.kr",
    priority: 3
  },

  // ==================== 경상남도 ====================
  {
    title: "경남 농어업인수당",
    description: "농어업경영체 등록 경영주 및 공동경영주 지원",
    amount: "연 30만원",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "읍면동 행정복지센터",
    category: "농업지원",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "경남 노인가장세대 지원",
    description: "65세 이상 차상위 어르신 가장세대 냉난방비 지원",
    amount: "냉방비 4만원, 난방비 8.5만원",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "복지지원",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "경남 청년구직활동수당",
    description: "미취업 청년 구직활동 지원 (김해, 사천, 의령)",
    amount: "월 50만원 (6개월)",
    deadline: "2026-05-22",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도 투자경제진흥원",
    category: "취업지원",
    link: "https://www.gyeongnam.go.kr/mydata",
    priority: 1
  },
  {
    title: "경남 소상공인 융자지원",
    description: "소상공인 경영안정, 창업, 버팀목 자금 융자",
    amount: "업체당 최대 1억원",
    deadline: "2026-01-27",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "주거지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 창업지원금",
    description: "청년 창업자 사업화 자금 지원",
    amount: "최대 3,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 자산형성 지원",
    description: "청년 목돈 마련 매칭 저축",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "자산형성",
    link: "https://www.gyeongnam.go.kr",
    priority: 1
  },
  {
    title: "경남 청년 취업역량 강화",
    description: "청년 취업 교육 및 상담 지원",
    amount: "무료 교육",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "취업지원",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },
  {
    title: "경남 전통시장 환급행사",
    description: "전통시장 구매금액 온누리상품권 환급",
    amount: "최대 2만원 환급",
    deadline: "2026-01-27",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["경상남도"],
    source: "농림축산식품부",
    category: "생활안정",
    link: "https://www.gyeongnam.go.kr",
    priority: 2
  },
  {
    title: "경남 무의탁노인 건강음료배달",
    description: "독거노인 등 돌봄 사각지대 어르신 건강음료 제공",
    amount: "건강음료 제공",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "복지지원",
    link: "https://www.gov.kr",
    priority: 2
  },

  // ==================== 경상북도 ====================
  {
    title: "경북 거동불편 저소득 노인 식사배달",
    description: "거동불편 저소득 어르신 도시락, 반찬 무료 제공",
    amount: "무료 급식",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상북도"],
    source: "경상북도청",
    category: "복지지원",
    link: "https://www.gov.kr",
    priority: 1
  },
  {
    title: "경북 청년일자리도약장려금",
    description: "청년 정규직 채용 기업 지원",
    amount: "월 60만원 × 12개월",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 1
  },
  {
    title: "경북 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원 (최대 12개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "주거지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 구직활동 지원",
    description: "미취업 청년 구직활동비 지원",
    amount: "월 50만원 (6개월)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "취업지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 창업지원금",
    description: "청년 창업자 초기자금 및 컨설팅 지원",
    amount: "최대 1,000만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "창업지원",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 교통비·통신비 지원",
    description: "청년 대중교통비 환급 및 통신비 지원",
    amount: "교통비 환급 + 월 2만원 통신비",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "생활안정",
    link: "https://gbyouth.co.kr",
    priority: 2
  },
  {
    title: "경북 청년 긴급생활안정 지원",
    description: "긴급 생계비, 의료비 등 지원",
    amount: "최대 100만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "생활안정",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 청년 자산형성 지원",
    description: "청년 목돈 마련 매칭 저축",
    amount: "매칭 저축",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "자산형성",
    link: "https://gbyouth.co.kr",
    priority: 1
  },
  {
    title: "경북 무의탁노인 건강음료배달",
    description: "독거노인 건강음료 제공",
    amount: "건강음료 제공",
    deadline: "2026-12-31",
    ages: ["60대", "70대"],
    regions: ["경상북도"],
    source: "주민센터",
    category: "복지지원",
    link: "https://www.gov.kr",
    priority: 2
  },
  {
    title: "경북 청년 면접비 지원",
    description: "구직활동 청년 면접 교통비 지원",
    amount: "면접비 일부 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["경상북도"],
    source: "경상북도",
    category: "취업지원",
    link: "https://gbyouth.co.kr",
    priority: 2
  },

  // ==================== 대구광역시 ====================
  {
    title: "대구 청년희망적금",
    description: "청년 자산형성 지원, 12개월 저축 시 대구시 매칭",
    amount: "본인 120만원 + 대구시 120만원 = 240만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "자산형성",
    link: "https://youthdream.daegu.go.kr",
    priority: 1
  },
  {
    title: "대구 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원 (최대 12개월, 총 240만원)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "주거지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년 구직지원금",
    description: "구직 중인 청년 대상 구직활동비 지원",
    amount: "월 50만원 (최대 6개월, 총 300만원)",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "취업지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년 창업지원금",
    description: "창업 희망 청년 대상 창업자금 지원",
    amount: "최대 1,500만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시",
    category: "창업지원",
    link: "https://www.daegu.go.kr/YouthPolicy",
    priority: 1
  },
  {
    title: "대구 청년일자리도약장려금",
    description: "청년 정규직 채용 기업 지원 (달서구, 달성군, 서구, 남구)",
    amount: "월 60만원 × 12개월",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구경영자총협회",
    category: "취업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 1
  },
  {
    title: "대구 청년활력공간 다온나그래",
    description: "청년 활동 공간 및 프로그램 지원",
    amount: "무료 공간 이용",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "참여지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년 면접비 지원",
    description: "구직활동 청년 면접 교통비 지원",
    amount: "면접비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "취업지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 사회적 고립청년 지원",
    description: "고립·은둔 청년 상담 및 프로그램 지원",
    amount: "무료 상담 및 프로그램",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년상담소",
    description: "청년 대상 진로, 취업, 심리 상담",
    amount: "무료 상담",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "복지지원",
    link: "http://www.dgyouth.kr",
    priority: 2
  },
  {
    title: "대구 청년 정장대여",
    description: "취업준비 청년 면접 정장 무료 대여",
    amount: "무료 대여",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["대구광역시"],
    source: "대구광역시청년센터",
    category: "취업지원",
    link: "http://www.dgyouth.kr",
    priority: 3
  },

  // ==================== 제주특별자치도 ====================
  {
    title: "제주 도민안전보험",
    description: "제주도민 전체 자동가입 보험",
    amount: "보험료 전액 지원",
    deadline: "2026-03-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "복지지원",
    link: "https://www.jejubokji.net",
    priority: 1
  },
  {
    title: "제주 청년 월세 지원",
    description: "무주택 청년 월세 지원",
    amount: "월 20만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "주거지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 청년 자격증 응시료 지원",
    description: "취업준비 청년 자격증 응시료 실비 지원",
    amount: "1인·1시험 연 1회",
    deadline: "2026-12-12",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주시",
    category: "취업지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 청년희망대출 융자지원",
    description: "저소득·저신용 청년 금융포용 지원",
    amount: "융자 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "금융지원",
    link: "https://jejuyouthdream.com",
    priority: 1
  },
  {
    title: "제주 정책서민금융 이차보전금",
    description: "서민가계 이자부담 완화 지원 (도민 확대)",
    amount: "이자 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "금융지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 예술인 복지지원",
    description: "예술인 창작준비금, 공간임차료, 도외교통비 지원",
    amount: "창작준비금 등 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "문화지원",
    link: "https://www.jeju.go.kr",
    priority: 2
  },
  {
    title: "제주 서귀포시 청년지원센터",
    description: "서귀포시 청년 맞춤형 프로그램 및 공간",
    amount: "무료 공간 및 프로그램",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "참여지원",
    link: "https://jejuyouth.com",
    priority: 2
  },
  {
    title: "제주 교통복지카드 어린이 확대",
    description: "6~12세 어린이 버스요금 무료",
    amount: "버스 무료",
    deadline: "2026-12-31",
    ages: ["10대 미만", "10대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "교통지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 출산가정 산후조리비",
    description: "도내 출산가정 산후조리비 지원",
    amount: "40만원",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "가족지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 2자녀 이상 주택 취득세 감면",
    description: "2자녀 이상 양육자 주택 취득세 감면",
    amount: "취득세 감면",
    deadline: "2026-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["제주특별자치도"],
    source: "제주특별자치도",
    category: "주거지원",
    link: "https://www.jeju.go.kr",
    priority: 1
  },
  {
    title: "제주 청년 정착 지원",
    description: "제주 정착 희망 청년 지원 사업",
    amount: "정착 지원금",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주상공회의소",
    category: "정착지원",
    link: "https://jejucci.korcham.net",
    priority: 2
  },
  {
    title: "제주 청년 기업 견학 프로그램",
    description: "취업준비 청년 국내기업 견학 지원",
    amount: "견학비 지원",
    deadline: "2026-12-31",
    ages: ["20대", "30대"],
    regions: ["제주특별자치도"],
    source: "제주시",
    category: "취업지원",
    link: "https://jejuyouthdream.com",
    priority: 2
  },
    {
    title: "노인가장세대 지원",
    description: "65세이상 차상위 어르신 가장세대 대상 냉방비 40천원과 난방비 85천원 지원",
    amount: "냉방비 40천원과 난방비 85천원",
    deadline: "",
    ages: ["60대", "70대"],
    regions: ["경상남도"],
    source: "주민센터",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001100",
    priority: 1
},
    {
    title: "무의탁노인 건강음료배달",
    description: "노인맞춤돌봄서비스 대상자 중 중점군 및 그외 독거노인 등 돌봄 사각지대 어르신",
    amount: "건강음료제공",
    deadline: "",
    ages: ["60대", "70대"],
    regions: ["경상북도", "경상남도"],
    source: "주민센터",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000143",
    priority: 1
},
    {
    title: "거동불편저소득재가노인식사배달",
    description: "거동이 불편한 저소득 어르신 가정에 도시락, 반찬 등 무료급식을 제공하여 어르신 건강 지원",
    amount: "건강 지원",
    deadline: "",
    ages: ["60대", "70대"],
    regions: ["경상북도"],
    source: "경상북도청",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000124",
    priority: 1
},
    {
    title: "전기 이륜차 보조금",
    description: "서울시가 도심 대기오염과 생활 소음 저감을 위해 전기 이륜차 구매 지원",
    amount: "최대 40%",
    deadline: "",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["서울특별시"],
    source: "서울시",
    category: "",
    link: "https://www.seoul.go.kr/seoul/mediahub.do?schAgeVals=40&schTargetVals=&schBunyaVals=&schType=TAG&schValue=",
    priority: 1
},
    {
    title: "청년 이사·중개비 지원",
    description: "2023년 1월 1일 이후 서울시로 전입 또는 서울시 내에서 이사 후 전입신고 완료한 청년가구",
    amount: "최대 40만원",
    deadline: "2025-08-25",
    ages: ["20대", "30대"],
    regions: ["서울특별시"],
    source: "청년 몽땅 정보통",
    category: "주거지원",
    link: "https://youth.seoul.go.kr/mainA.do",
    priority: 1
},
    {
    title: "청년도약계좌",
    description: "(적금방식) 월 최대 70만원 이하 자유적립(회차별 최소 1천원 이상 1천원 단위 입금)",
    amount: "최대6%",
    deadline: "매달 초 신청",
    ages: ["20대", "30대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "서민금융진흥원",
    category: "기타",
    link: "https://www.kinfa.or.kr",
    priority: 1
},
        {
    title: "장기전세 주택공급",
    description: "시세의 80% 수준의 저렴한 임대보증금의 장기전세주택 공급",
    amount: "시세의 80%",
    deadline: "접수기관 별 상이",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "한국토지주택공사",
    category: "주거지원",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/999000000024?administOrgCd=ALL",
    priority: 1
},
{
title: "2025 청년 창업 지원금",
description: "만 18세~39세 청년 창업자를 위한 포괄적 지원 프로그램입니다. 사업자금, 교육, 멘토링을 종합적으로 지원합니다.",
amount: "최대 5,000만원",
deadline: "2025-12-31",
ages: ["20대", "30대"],
regions: ["서울특별시", "경기도", "부산광역시", "대구광역시", "인천광역시"],
source: "중소벤처기업부",
category: "창업지원",
link: "https://www.kosmes.or.kr/nsh/SH/SBI/SHSBI004M0.do",
priority: 1
},

    {
    title: "실업크레딧 지원",
    description: " 국민연금 가입자 또는 가입자였던 사람 중 18세이상 60세미만의 구직급여 수급자",
    amount: "최대70만원",
    deadline: "구직급여종료일이 속하는 달의 다음달 15일 이내",
    ages: ["50대", "40대", "30대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/B55201500004?administOrgCd=ALL",
    priority: 1
},


{
    title: "긴급복지 생계지원",
    description: "식료품비, 의복비, 냉방비 등 생계유지에 필요한 비용 또는 현물 지원",
    amount: "1인 가구: 730,500원",
    deadline: "",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "보건복지상담센터",
    category: "",
    link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/135200005003?administOrgCd=ALL",
    priority: 1
},

    
{
title: "2025 신혼부부 주택 구입 지원",
description: "신혼부부 및 예비 신혼부부를 대상으로 한 주택 구입 자금 지원 프로그램입니다. 저금리 대출과 이자 지원을 제공합니다.",
amount: "최대 3억원",
deadline: "2025-07-01",
ages: ["20대", "30대", "40대"],
regions: ["전국"],
source: "국토교통부",
category: "주거지원",
link: "https://plus.gov.kr/",
priority: 1
},
  {
    title: "민생회복지원금",
    description: "전 국민 대상, 카드·상품권·선불카드 방식 지급",
    amount: "최소 15만원 ~ 최대 55만원",
    deadline: "2025-10-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "정부24",
    category: "생활안정",
    link: "https://plus.gov.kr/",
    priority: 1
  },
      {
    title: "상생페이백",
    description: "전 국민 대상, 카드·상품권·선불카드 방식 지급",
    amount: "최대 30만원",
    deadline: "2025-11-30",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "정부24",
    category: "생활안정",
    link: "https://xn--3h3bl7foc243a8lq.kr/",
    priority: 1
  },
  {
    title: "대전 청년 주택임차보증금 이자지원사업",
    description: "대전시 거주 19세~39세 무주택 청년 대상 보증금 대출 이자 지원",
    amount: "최대 연 3%",
    deadline: "예산 소진 시까지",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "청년지원",
    link: "https://djhousing.or.kr/",
    priority: 1
  },
  {
    title: "2025년 대전 청년 월세 지원사업",
    description: "대전 거주 청년 무주택 세대주 월세 지원",
    amount: "월 20만원 × 최대 12개월",
    deadline: "2025-08-14",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "청년지원",
    link: "https://www.djhousing.or.kr/bbs/content.php?co_id=DH2025001",
    priority: 3
  },
  {
    title: "영세 소상공인 인건비 지원사업",
    description: "대전 소재 영세 소상공인 신규 채용 인건비 지원",
    amount: "근로자 1인당 150만원 (50만원×3개월)",
    deadline: "2025-11-28",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["대전광역시"],
    source: "대전광역시",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000110405",
    priority: 4
  },
  {
    title: "대전 청년부부 결혼장려금 지원사업",
    description: "대전 거주 청년 초혼 부부에게 결혼장려금 지급",
    amount: "1인당 250만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대"],
    regions: ["대전광역시"],
    source: "대전청년내일재단",
    category: "청년지원",
    link: "https://www.djwedding.or.kr/",
    priority: 5
  },
  {
    title: "소상공인 정책자금",
    description: "소상공인의 경영 안정 위한 정책자금",
    amount: "최대 7,000만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 6
  },
  {
    title: "전통시장 특례보증",
    description: "전통시장 입점 소상공인 보증지원",
    amount: "최대 2,000만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "지자체 및 신용보증재단",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 7
  },
  {
    title: "청년 소상공인 창업지원금",
    description: "만 39세 이하 청년 창업 소상공인 자금지원",
    amount: "최대 3,000만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "창업지원",
    link: "https://ols.semas.or.kr",
    priority: 8
  },
  {
    title: "소상공인 전기요금 지원",
    description: "전기요금 부담 완화를 위한 할인 지원",
    amount: "월 최대 70만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "한국전력공사",
    category: "생활안정",
    link: "https://www.kepco.co.kr",
    priority: 9
  },
  {
    title: "긴급경영안정자금",
    description: "매출급감 등 경영애로 소상공인 자금지원",
    amount: "최대 7,000만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["전국"],
    source: "중소벤처기업부",
    category: "생활안정",
    link: "https://ols.semas.or.kr",
    priority: 10
  },
  {
    title: "어르신 스포츠 상품권 지원사업",
    description: "체육활동 기회 제공 위한 상품권 배포",
    amount: "1인당 스포츠상품권",
    deadline: "2025-08-13",
    ages: ["60대","70대"],
    regions: ["전국"],
    source: "문화체육관광부",
    category: "생활안정",
    link: "https://www.mois.go.kr", 
    priority: 7
  },
    {
    title: "오산시 경기청년 역량강화 기회지원",
    description: "미취업 청년 자격증 응시료 지원",
    amount: "최대 30만원",
    deadline: "2025-11-30",
    ages: ["20대","30대"],
    regions: ["경기도"],
    source: "오산시청",
    category: "청년지원",
    link: "https://www.gov.kr",
    priority: 8
  },
  {
    title: "인천시 소상공인 경영환경개선 지원사업",
    description: "점포환경·홍보·위생·스마트기술 구축 지원",
    amount: "업체당 최대 250만원",
    deadline: "2025-08-14",
    ages: ["40대","50대","60대","70대"],
    regions: ["인천광역시"],
    source: "인천광역시청",
    category: "생활안정",
    link: "https://www.gov.kr",
    priority: 9
  },
  {
    title: "인천형 예비사회적기업 공모",
    description: "예비 사회적기업 판로·컨설팅·입주 기회 제공",
    amount: "지원금 별도 공모",
    deadline: "2025-08-22",
    ages: ["30대","40대"],
    regions: ["인천광역시"],
    source: "인천광역시청",
    category: "창업지원",
    link: "https://www.gov.kr",
    priority: 6
  },
     {
    title: "경상북도 산불피해 긴급재난지원금",
    description: "경북 5개 시·군 주민 대상 산불피해 긴급 생계비 지원",
    amount: "1인당 30만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["경상북도"],
    source: "경상북도청",
    category: "생활안정",
    link: "https://www.gb.go.kr",
    priority: 1
  },
  {
    title: "경상북도 창업 및 경쟁력강화 사업자금",
    description: "도내 중소기업 대상 창업·설비·ESG 경영자금 장기 저리 융자",
    amount: "최대 5억원 (금리 약 2.5%)",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경상북도"],
    source: "경상북도경제진흥원",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 3
  },
  {
    title: "경상남도 창업기업 신규고용인력 보조금",
    description: "경남 소재 창업 7년 이내 중소·벤처기업 대상",
    amount: "1인당 최대 300만원 (기업당 최대 5명)",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["경상남도"],
    source: "경상남도",
    category: "창업지원",
    link: "https://www.bizinfo.go.kr",
    priority: 4
  },
  {
    title: "2025 충청북도 중소기업육성자금 융자(이차보전)",
    description: "충북 중소기업 대상 기금 융자 및 이차보전 지원",
    amount: "총 3,950억원 규모",
    deadline: "2024-12-26",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["충청북도"],
    source: "충청북도기업진흥원",
    category: "창업지원",
    link: "https://www.cba.ne.kr",
    priority: 2
  },
  {
    title: "2025 충북 소상공인 맞춤형 도시근로자 지원사업",
    description: "충북 소상공인 근로자 임금의 40% 인건비 보조",
    amount: "270일 한도, 최저시급의 40%",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대"],
    regions: ["충청북도"],
    source: "충청북도",
    category: "생활안정",
    link: "https://www.welfarehello.com",
    priority: 3
  },
  {
    title: "작은결혼식 및 인구감소지역 결혼지원금",
    description: "충북 청년 신혼부부 대상 결혼식 및 정착지원금",
    amount: "최대 200만원 + 100만원",
    deadline: "2025-12-12",
    ages: ["20대", "30대"],
    regions: ["충청북도"],
    source: "충청북도사회복지협의회",
    category: "생활안정",
    link: "https://gachi.chungbuk.go.kr",
    priority: 5
  },
     {
    title: "경기도 청년기본소득",
    description: "24세 경기도 거주 청년 대상 분기별 지역화폐 지원",
    amount: "분기별 25만원 (최대 연 100만원)",
    deadline: "2025-08-11",
    ages: ["20대"],
    regions: ["경기도"],
    source: "경기도청",
    category: "청년지원",
    link: "https://www.gg.go.kr/contents/contents.do?ciIdx=1037&menuId=2736",
    priority: 1
  },
  {
    title: "민생회복 소비쿠폰 (경기도)",
    description: "경기도 거주민 대상 전국민 소비쿠폰 지급 (현금성)",
    amount: "최소 15만원 ~ 최대 45만원",
    deadline: "2025‑09‑12",
    ages: ["20대","30대","40대","50대","60대","70대"],
    regions: ["경기도"],
    source: "행정안전부",
    category: "생활안정",
    link: "https://www.korea.kr",
    priority: 3
  },
      {
    title: "국민취업지원제도 취업지원신청",
    description: "구직자 대상 취업 지원 서비스",
    amount: "최대 월 50만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "취업지원",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000086",
    priority: 9
  },
  {
    title: "난임부부 시술비 지원 신청",
    description: "난임부부 대상 시술비 일부 지원",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["30대", "40대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "건강복지",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000394",
    priority: 8
  },
  {
    title: "생계지원금 지급신청",
    description: "생활 어려운 대상자 생계지원금 신청",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보훈처",
    category: "생활안정",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000165",
    priority: 7
  },
  {
    title: "고용촉진장려금 지급",
    description: "취약계층 고용 유지 사업주 대상 장려금",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대"],
    regions: ["전국"],
    source: "고용노동부",
    category: "고용지원",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000227",
    priority: 7
  },
  {
    title: "사회보장급여 신청(변경)",
    "description": "저소득층 대상 가족 사회보장 급여 신청",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
    regions: ["전국"],
    source: "보건복지부",
    category: "복지",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000275",
    priority: 8
  },
  {
    title: "생활지원금 지급 신청",
    description: "독립유공자 대상 생활안정 지원",
    amount: "최대 수백만원",
    deadline: "2025-12-31",
    ages: ["60대", "70대"],
    regions: ["전국"],
    source: "국가보훈처",
    category: "복지",
    link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000168",
    priority: 6
  }   
]

window.SupportFinder.updateCurrentDate = function() {
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var dateElement = document.getElementById('supportFinderCurrentDate');
if (dateElement) {
dateElement.textContent = year + '년 ' + month + '월 ' + day + '일';
}
};

window.SupportFinder.setupCheckboxes = function() {
var checkboxItems = document.querySelectorAll('.support-finder-checkbox-item');
for (var i = 0; i < checkboxItems.length; i++) {
var item = checkboxItems[i];
var checkbox = item.querySelector('input[type="checkbox"]');
if (item && checkbox) {
(function(item, checkbox) {
item.addEventListener('click', function(e) {
if (e.target.type !== 'checkbox') {
checkbox.checked = !checkbox.checked;
}
if (checkbox.checked) {
item.classList.add('checked');
} else {
item.classList.remove('checked');
}
});
checkbox.addEventListener('change', function() {
if (this.checked) {
item.classList.add('checked');
} else {
item.classList.remove('checked');
}
});
})(item, checkbox);
}
}
};

window.SupportFinder.calculateDday = function(deadline) {
var today = new Date();
today.setHours(0, 0, 0, 0);
var deadlineDate = new Date(deadline);
deadlineDate.setHours(23, 59, 59, 999);
var diffTime = deadlineDate - today;
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

if (diffDays < 0) {
    return { text: '마감됨', urgent: true, color: '#ff6b6b' };
} else if (diffDays <= 7) {
    return { text: 'D-' + diffDays, urgent: true, color: '#ff6b6b' };
} else if (diffDays <= 30) {
    return { text: 'D-' + diffDays, urgent: false, color: '#FF9800' };
} else if (diffDays <= 180) {
    return { text: 'D-' + diffDays, urgent: false, color: '#4285F4' };
} else {
    return { text: '상시접수', urgent: false, color: '#4CAF50' };
}
};

window.SupportFinder.safeString = function(str) {
return String(str || '')
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '&quot;')
.replace(/'/g, '&#39;');
};

window.supportFinderStartSearch = function() {
var selectedAges = [];
var selectedRegions = [];
var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

for (var i = 0; i < checkedBoxes.length; i++) {
    var checkbox = checkedBoxes[i];
    if (checkbox.id.indexOf('supportFinderAge') === 0) {
        selectedAges.push(checkbox.value);
    } else {
        selectedRegions.push(checkbox.value);
    }
}

if (selectedAges.length === 0 || selectedRegions.length === 0) {
    alert('연령대와 지역을 최소 하나씩 선택해주세요!');
    return;
}

window.SupportFinder.showLoading();
setTimeout(function() {
    window.SupportFinder.performSearch(selectedAges, selectedRegions);
}, 1000);
};

window.SupportFinder.showLoading = function() {
var supportGrid = document.getElementById('supportFinderSupportGrid');
var resultsCount = document.getElementById('supportFinderResultsCount');

if (resultsCount) {
    resultsCount.innerHTML = '<span class="support-finder-loading-spinner"></span>검색 중...';
}
if (supportGrid) {
    supportGrid.innerHTML = '<div style="text-align: center; padding: 50px; color: #4285F4;"><div class="support-finder-loading-spinner" style="width: 40px; height: 40px; margin: 0 auto 20px;"></div><div style="font-size: 18px; font-weight: 600;">정부지원금 검색 중...</div><div style="font-size: 14px; margin-top: 10px; color: #888;">최신 정부지원금 데이터를 조회하고 있습니다</div></div>';
}
};

window.SupportFinder.performSearch = function(selectedAges, selectedRegions) {
var allSupports = window.SupportFinder.manualSupportData;
var filteredSupports = [];

for (var i = 0; i < allSupports.length; i++) {
    var support = allSupports[i];
    var ageMatch = false;
    var regionMatch = false;

    for (var j = 0; j < support.ages.length; j++) {
        if (selectedAges.indexOf(support.ages[j]) !== -1) {
            ageMatch = true;
            break;
        }
    }

    if (support.regions.indexOf('전국') !== -1) {
        regionMatch = true;
    } else {
        for (var k = 0; k < support.regions.length; k++) {
            if (selectedRegions.indexOf(support.regions[k]) !== -1) {
                regionMatch = true;
                break;
            }
        }
    }

    if (ageMatch && regionMatch) {
        filteredSupports.push(support);
    }
}

filteredSupports.sort(function(a, b) {
    return a.priority - b.priority;
});

window.SupportFinder.displayResults(filteredSupports);
};

window.SupportFinder.displayResults = function(supports) {
var supportGrid = document.getElementById('supportFinderSupportGrid');
var resultsCount = document.getElementById('supportFinderResultsCount');

if (resultsCount) {
    resultsCount.textContent = supports.length + '개 지원금';
}

if (supports.length === 0) {
    if (supportGrid) {
        supportGrid.innerHTML = '<div class="support-finder-no-results"><div style="font-size: 48px; margin-bottom: 20px;">😔</div><div>선택한 조건에 맞는 정부지원금이 없습니다.</div><div style="font-size: 14px; margin-top: 10px; color: #888;">다른 연령대나 지역을 선택해보세요.</div></div>';
    }
    return;
}

var supportCards = '';
for (var i = 0; i < supports.length; i++) {
    var support = supports[i];
    var dday = window.SupportFinder.calculateDday(support.deadline);
    var urgentClass = dday.urgent ? 'urgent' : '';

    var safeTitle = window.SupportFinder.safeString(support.title);
    var safeDescription = window.SupportFinder.safeString(support.description);
    var safeAmount = window.SupportFinder.safeString(support.amount);
    var safeSource = window.SupportFinder.safeString(support.source);
    var safeCategory = window.SupportFinder.safeString(support.category);
    var clickEvent = support.link ? 'onclick="window.location.href=\'' + support.link + '\'"' : '';
    var cursorStyle = support.link ? 'cursor: pointer;' : '';

    supportCards += '<div class="support-finder-support-card ' + urgentClass + '" style="' + cursorStyle + '" ' + clickEvent + '>';
    supportCards += '<h4>' + safeTitle + '</h4>';
    supportCards += '<p>' + safeDescription + '</p>';
    supportCards += '<div class="support-finder-support-info">';
    supportCards += '<span class="support-finder-support-amount">' + safeAmount + '</span>';
    supportCards += '<span class="support-finder-support-deadline" style="color: ' + dday.color + '; font-weight: ' + (dday.urgent ? '700' : '500') + ';">' + dday.text + '</span>';
    supportCards += '</div>';
    supportCards += '<div class="support-finder-support-source">🏛️ 담당기관: ' + safeSource + '<br/>📋 분야: ' + safeCategory + '<br/>📡 출처: 최신 정부지원금 데이터</div>';
    supportCards += '</div>';
}

if (supportGrid) {
    supportGrid.innerHTML = supportCards;
}
};

function supportFinderInit() {
if (typeof window.SupportFinder !== 'undefined') {
window.SupportFinder.updateCurrentDate();
window.SupportFinder.setupCheckboxes();
console.log('정부지원금 찾기 시스템 초기화 완료');
}
}

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', supportFinderInit);
} else {
supportFinderInit();
}
