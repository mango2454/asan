const SUBJECTS = [
          { id: 's1', name: '국어', category: '공통과목', description: '모든 학습의 기본이 되는 국어 능력을 배양합니다.' },
          { id: 's2', name: '수학', category: '공통과목', description: '논리적 사고력과 문제 해결 능력을 키웁니다.' },
          { id: 's3', name: '영어', category: '공통과목', description: '글로벌 시대의 필수적인 의사소통 능력을 함양합니다.' },
          { id: 's4', name: '한국사', category: '공통과목', description: '우리 역사에 대한 이해와 자긍심을 높합니다.' },
          { id: 's5', name: '통합사회', category: '공통과목', description: '사회 현상에 대한 종합적인 이해를 돕습니다.' },
          { id: 's6', name: '통합과학', category: '공통과목', description: '자연 현상에 대한 통합적인 이해를 돕습니다.' },
          { id: 's7', name: '과학탐구실험', category: '공통과목', description: '과학적 탐구 능력과 실험 능력을 기릅니다.' },
          { id: 's101', name: '화법과 작문', category: '일반선택', description: '효과적인 의사소통 능력과 글쓰기 능력을 심화합니다.' },
          { id: 's102', name: '독서', category: '일반선택', description: '비판적이고 창의적인 독서 능력을 향상시킵니다.' },
          { id: 's103', name: '언어와 매체', category: '일반선택', description: '언어와 다양한 매체에 대한 이해를 넓힙니다.' },
          { id: 's104', name: '문학', category: '일반선택', description: '문학 작품 감상을 통해 인간과 세계를 이해합니다.' },
          { id: 's201', name: '수학Ⅰ', category: '일반선택', description: '지수함수, 로그함수, 삼각함수의 뜻과 활용을 학습합니다.' },
          { id: 's202', name: '수학Ⅱ', category: '일반선택', description: '함수의 극한과 연속, 미분, 적분을 학습합니다.' },
          { id: 's203', name: '확률과 통계', category: '일반선택', description: '확률과 통계의 기본 개념과 활용을 다룹니다.' },
          { id: 's204', name: '미적분', category: '일반선택', description: '수열의 극한, 미분법, 적분법을 심도 있게 학습합니다.' },
          { id: 's301', name: '영어Ⅰ', category: '일반선택', description: '다양한 주제의 글을 읽고 이해하며 영어 사용 능력을 키웁니다.' },
          { id: 's302', name: '영어Ⅱ', category: '일반선택', description: '보다 심화된 영어 독해 및 작문 능력을 배양합니다.' },
          { id: 's401', name: '물리학Ⅰ', category: '일반선택', description: '역학과 에너지, 물질과 전자기장 등 물리학의 기본 원리를 탐구합니다.' },
          { id: 's402', name: '화학Ⅰ', category: '일반선택', description: '물질의 구조와 변화, 화학 반응의 원리를 이해합니다.' },
          { id: 's403', name: '생명과학Ⅰ', category: '일반선택', description: '생명 현상의 다양성과 공통성, 생명 활동의 원리를 학습합니다.' },
          { id: 's404', name: '지구과학Ⅰ', category: '일반선택', description: '지구 시스템과 환경 변화, 우주에 대한 이해를 넓힙니다.' },
          { id: 's501', name: '생활과 윤리', category: '일반선택', description: '현대 생활의 윤리적 문제들을 탐구하고 해결 방안을 모색합니다.' },
          { id: 's502', name: '사회·문화', category: '일반선택', description: '사회 구조와 문화 현상에 대한 이해를 바탕으로 사회 문제를 분석합니다.' },
          { id: 's503', name: '경제', category: '일반선택', description: '경제 현상의 기본 원리를 이해하고 합리적인 의사 결정을 학습합니다.' },
          { id: 's601', name: '심화 국어', category: '진로선택', description: '국어 교과 역량을 심화하고 진로와 연계된 탐구를 수행합니다.' },
          { id: 's602', name: '기하', category: '진로선택', description: '이차곡선, 평면벡터, 공간도형과 공간좌표를 학습합니다.' },
          { id: 's603', name: '경제 수학', category: '진로선택', description: '경제 및 금융 관련 문제를 수학적으로 분석하고 해결합니다.' },
          { id: 's604', name: '물리학Ⅱ', category: '진로선택', description: '물리학Ⅰ의 내용을 심화하고 현대 물리학의 기초를 다룹니다.' },
          { id: 's605', name: '화학Ⅱ', category: '진로선택', description: '화학Ⅰ의 내용을 심화하고 다양한 화학 현상을 탐구합니다.' },
          { id: 's606', name: '생명과학Ⅱ', category: '진로선택', description: '생명과학Ⅰ의 내용을 심화하고 생명공학 기술의 원리를 이해합니다.' },
          { id: 's607', name: '지구과학Ⅱ', category: '진로선택', description: '지구과학Ⅰ의 내용을 심화하고 지구와 우주에 대한 탐구를 확장합니다.' },
          { id: 's608', name: '여행지리', category: '진로선택', description: '여행을 통해 지역의 자연 및 인문 환경을 이해하고 지리적 소양을 함양합니다.' },
          { id: 's609', name: '사회문제 탐구', category: '진로선택', description: '다양한 사회문제를 심층적으로 탐구하고 해결 방안을 모색합니다.' },
          { id: 's610', name: '프로그래밍', category: '진로선택', description: '프로그래밍 언어를 활용하여 문제를 해결하는 능력을 기릅니다.' },
          { id: 's611', name: '인공지능 기초', category: '진로선택', description: '인공지능의 기본 원리를 이해하고 관련 기술을 탐색합니다.' },
        ];

        const MAJORS = [
          { id: 'm1', name: '기계공학과', description: '기계 시스템의 설계, 분석, 제작 및 유지보수를 다루며, 다양한 산업 분야의 핵심 기술을 연구합니다.', universityDetails: [ { universityName: '서울대학교', departmentName: '기계공학부' }, { universityName: 'KAIST', departmentName: '기계항공공학부 기계공학전공' }, { universityName: '연세대학교', departmentName: '기계공학부' }, { universityName: '고려대학교', departmentName: '기계공학부' }, { universityName: '한양대학교', departmentName: '기계공학부' }, ] },
          { id: 'm2', name: '컴퓨터공학과', description: '컴퓨터 하드웨어 및 소프트웨어 시스템을 연구하고 개발하여, 정보화 사회를 이끄는 기술을 탐구합니다.', universityDetails: [ { universityName: '서울대학교', departmentName: '컴퓨터공학부' }, { universityName: 'KAIST', departmentName: '전산학부' }, { universityName: 'POSTECH', departmentName: '컴퓨터공학과' }, { universityName: '고려대학교', departmentName: '컴퓨터학과' }, { universityName: '연세대학교', departmentName: '컴퓨터과학과' }, { universityName: '성균관대학교', departmentName: '소프트웨어학과' }, ]},
          { id: 'm3', name: '전자공학과', description: '전자회로, 반도체, 통신 시스템 등 전기 및 전자 기술을 연구하여 첨단 기술 발전에 기여합니다.', universityDetails: [ { universityName: '서울대학교', departmentName: '전기정보공학부' }, { universityName: 'KAIST', departmentName: '전기및전자공학부' }, { universityName: 'POSTECH', departmentName: '전자전기공학과' }, { universityName: '연세대학교', departmentName: '전기전자공학부' }, ] },
          { id: 'm4', name: '화학공학과', description: '화학 반응과 공정을 이용하여 새로운 물질을 개발하고 생산 시스템을 설계하는 학문입니다.', universityDetails: [ { universityName: '서울대학교', departmentName: '화학생명공학부' }, { universityName: 'KAIST', departmentName: '화학생명공학과' }, { universityName: 'POSTECH', departmentName: '화학공학과' }, ] },
          { id: 'm5', name: '생명과학과', description: '생명 현상의 기본 원리를 탐구하고, 의학, 약학, 환경 등 다양한 분야에 응용하는 학문입니다.', universityDetails: [ { universityName: '서울대학교', departmentName: '생명과학부' }, { universityName: '연세대학교', departmentName: '생명시스템대학 생명과학과' }, { universityName: '고려대학교', departmentName: '생명과학부' }, ] },
          { id: 'm6', name: '의예과', description: '인간의 질병 예방, 진단, 치료를 위한 의학 지식과 기술을 배우고, 생명 존중의 윤리 의식을 함양합니다.', universityDetails: [ {universityName: '서울대학교', departmentName: '의예과'}, {universityName: '연세대학교', departmentName: '의예과'}, {universityName: '가톨릭대학교', departmentName: '의예과'}, ] },
          { id: 'm7', name: '간호학과', description: '과학적 지식과 돌봄 기술을 바탕으로 대상자의 건강 증진, 질병 예방, 회복을 돕는 전문 인력을 양성합니다.', universityDetails: [ {universityName: '서울대학교', departmentName: '간호학과'}, {universityName: '연세대학교', departmentName: '간호학과'}, ] },
          { id: 'm8', name: '경영학과', description: '조직의 목표 달성을 위한 효율적인 운영, 마케팅, 재무, 인사 관리 등 경영 전반의 이론과 실제를 학습합니다.', universityDetails: [ {universityName: '서울대학교', departmentName: '경영학과'}, {universityName: '고려대학교', departmentName: '경영대학'}, {universityName: '연세대학교', departmentName: '경영학과'}, ] },
          { id: 'm9', name: '경제학과', description: '자원의 희소성 속에서 개인, 기업, 국가의 합리적 선택과 경제 현상을 분석하고 예측하는 학문입니다.', universityDetails: [ {universityName: '서울대학교', departmentName: '경제학부'}, {universityName: '연세대학교', departmentName: '경제학부'}, ] },
          { id: 'm10', name: '미디어커뮤니케이션학과', description: '다양한 미디어를 통해 정보를 생산, 전달, 수용하는 과정과 그 사회적 영향을 연구합니다.', universityDetails: [ {universityName: '서울대학교', departmentName: '언론정보학과'}, {universityName: '연세대학교', departmentName: '커뮤니케이션대학원 (학부 유사 전공 확인 필요)'}, {universityName: '고려대학교', departmentName: '미디어학부'}, ] },
          { id: 'm11', name: '심리학과', description: '인간의 마음과 행동을 과학적으로 연구하여 개인과 사회의 문제를 이해하고 해결하는 데 기여합니다.', universityDetails: [ {universityName: '서울대학교', departmentName: '심리학과'}, {universityName: '연세대학교', departmentName: '심리학과'}, ] },
          { id: 'm12', name: '교육학과', description: '교육의 본질, 목적, 방법, 제도 등을 연구하고 미래 사회의 교육 전문가를 양성합니다.', universityDetails: [ {universityName: '서울대학교', departmentName: '교육학과'}, {universityName: '고려대학교', departmentName: '교육학과'}, ] },
        ];

        const MAJOR_SUBJECT_MAPPINGS = [
          { majorId: 'm1', subjectIds: ['s201', 's202', 's204', 's401', 's602', 's604'] },
          { majorId: 'm2', subjectIds: ['s201', 's202', 's204', 's602', 's610', 's611'] },
          { majorId: 'm3', subjectIds: ['s201', 's202', 's204', 's401', 's604', 's610'] },
          { majorId: 'm4', subjectIds: ['s201', 's202', 's204', 's402', 's603', 's605'] },
          { majorId: 'm5', subjectIds: ['s402', 's403', 's605', 's606'] },
          { majorId: 'm6', subjectIds: ['s201', 's402', 's403', 's605', 's606'] },
          { majorId: 'm7', subjectIds: ['s403', 's606', 's501'] },
          { majorId: 'm8', subjectIds: ['s201', 's203', 's502', 's503', 's603'] },
          { majorId: 'm9', subjectIds: ['s201', 's203', 's502', 's503', 's603'] },
          { majorId: 'm10', subjectIds: ['s101', 's102', 's103', 's502', 's609'] },
          { majorId: 'm11', subjectIds: ['s102', 's403', 's501', 's502', 's609'] },
          { majorId: 'm12', subjectIds: ['s101', 's102', 's501', 's502', 's609'] },
        ];

        const GRADUATION_REQUIREMENTS_INFO = {
          totalCredits: 192,
          rules: [
            { id: 'rule1', description: '공통과목 필수 이수', appliesToCategory: '공통과목', minSubjects: 7 },
            { id: 'rule2', description: '일반선택 최소 5과목 이수', appliesToCategory: '일반선택', minSubjects: 5 },
            { id: 'rule3', description: '진로선택 최소 3과목 이수', appliesToCategory: '진로선택', minSubjects: 3 },
            { id: 'rule4', description: '교양 영역 (예체능 등) 최소 10학점 이수 (여기서는 단순화하여 과목 수로 대체)', minSubjects: 2 },
          ],
        };

        const CREDIT_SYSTEM_EXPLANATION = [
          { title: "고교학점제란 무엇인가요?", content: "고교학점제는 학생들이 자신의 진로와 적성에 따라 다양한 과목을 선택하여 이수하고, 누적 학점이 일정 기준에 도달하면 졸업을 인정받는 제도입니다. 기존의 정해진 교육과정을 따르는 방식에서 벗어나, 학생의 과목 선택권을 확대하여 자기주도적 학습을 지원하는 것을 목표로 합니다." },
          { title: "과목 선택은 어떻게 하나요?", content: "학교마다 개설되는 과목이 다를 수 있으며, 일반적으로 공통과목, 일반선택 과목, 진로선택 과목으로 구분됩니다. 공통과목은 모든 학생이 이수해야 하는 기초 소양 과목이며, 일반선택 과목은 교과별 학문 영역을 심화하는 과목, 진로선택 과목은 특정 분야의 심화 학습이나 진로 준비를 위한 과목입니다. 자신의 흥미, 적성, 희망 진로 등을 고려하여 학교 안내에 따라 과목을 선택하게 됩니다." },
          { title: "졸업 조건은 무엇인가요?", content: `일반적으로 ${GRADUATION_REQUIREMENTS_INFO.totalCredits}학점 이상을 이수해야 하며, 각 과목군(공통, 일반선택, 진로선택 등)별 최소 이수 학점 또는 과목 수 기준을 충족해야 합니다. 또한, 학교생활기록부의 출결 상황, 봉사활동 시간 등도 졸업 요건에 포함될 수 있습니다. 정확한 졸업 기준은 재학 중인 학교의 규정을 확인해야 합니다.` },
          { title: "학점 시뮬레이션 (간단 예시)", content: "본 웹사이트에서는 선택한 과목을 바탕으로 간단한 졸업 요건 충족 여부를 가늠해볼 수 있습니다. 예를 들어, '일반선택 과목 5개 이상, 진로선택 과목 3개 이상 이수'와 같은 규칙을 기준으로 점검합니다. 이는 참고용이며, 정확한 판단은 학교 선생님과의 상담이 필요합니다." }
        ];
        
        const ROUTE_PATHS = {
          HOME: '/',
          MAJOR_TO_SUBJECT: '/major-to-subject',
          SUBJECT_TO_MAJOR: '/subject-to-major',
          RESULTS: '/results',
          INFO: '/info',
        };

        const RecommendationMode = {
          MAJOR_TO_SUBJECT: 'major_to_subject',
          SUBJECT_TO_MAJOR: 'subject_to_major',
        };

        // --- Services ---
        const getSubjectById = (id) => SUBJECTS.find(subject => subject.id === id);
        const getMajorById = (id) => MAJORS.find(major => major.id === id);

        const getRecommendedSubjectsForMajor = (majorId) => {
          const mapping = MAJOR_SUBJECT_MAPPINGS.find(m => m.majorId === majorId);
          if (!mapping) return [];
          return mapping.subjectIds.map(id => getSubjectById(id)).filter(s => s !== undefined);
        };

        const getRecommendedMajorsForSubjects = (subjectIds) => {
          const majorScores = [];
          MAJOR_SUBJECT_MAPPINGS.forEach(mapping => {
            const major = getMajorById(mapping.majorId);
            if (!major) return;

            let score = 0;
            const currentMatchedSubjects = [];
            mapping.subjectIds.forEach(requiredSubjectId => {
              if (subjectIds.includes(requiredSubjectId)) {
                score++;
                const subject = getSubjectById(requiredSubjectId);
                if (subject) currentMatchedSubjects.push(subject);
              }
            });

            if (score > 0) {
              majorScores.push({ major, score, matchedSubjects: currentMatchedSubjects });
            }
          });

          majorScores.sort((a, b) => {
            if (b.score === a.score) {
              return a.major.name.localeCompare(b.major.name);
            }
            return b.score - a.score;
          });
          
          return majorScores.map(ms => ({...ms.major, description: `${ms.matchedSubjects.map(s => s.name).join(', ')} 과목과 연관성이 높습니다. (일치: ${ms.score}개)`}));
        };

        const simulateCredits = (selectedSubjectIds) => {
          const selectedSubjects = selectedSubjectIds.map(id => getSubjectById(id)).filter(s => s !== undefined);
          let meetsAllRequirements = true;
          const summary = [];
          const details = [];

          GRADUATION_REQUIREMENTS_INFO.rules.forEach(rule => {
            let currentCount = 0;
            if (rule.appliesToCategory) {
              currentCount = selectedSubjects.filter(s => s.category === rule.appliesToCategory).length;
            } else {
              currentCount = selectedSubjects.length; 
            }
            
            const minRequired = rule.minSubjects || 0;
            const isMet = currentCount >= minRequired;
            
            const detailEntry = {
              ruleId: rule.id,
              ruleDescription: rule.description,
              isMet,
              appliesToCategory: rule.appliesToCategory
            };

            if (!isMet) {
              meetsAllRequirements = false;
              const neededCount = minRequired - currentCount;
              details.push({ ...detailEntry, needed: `${neededCount} 과목 더 필요` });
            } else {
              details.push(detailEntry);
            }
          });
          
          const estimatedTotalCredits = selectedSubjects.length * 3; 
          if (estimatedTotalCredits < GRADUATION_REQUIREMENTS_INFO.totalCredits) {
             meetsAllRequirements = false; 
             summary.push(`예상 총 이수 학점: ${estimatedTotalCredits} / ${GRADUATION_REQUIREMENTS_INFO.totalCredits} (과목당 3학점 가정, 부족)`);
          } else {
             summary.push(`예상 총 이수 학점: ${estimatedTotalCredits} / ${GRADUATION_REQUIREMENTS_INFO.totalCredits} (과목당 3학점 가정, 충족)`);
          }

          if (meetsAllRequirements) {
            summary.unshift("기본 졸업 요건을 충족하는 것으로 보입니다 (간단 시뮬레이션 기준).");
          } else {
            summary.unshift("일부 졸업 요건을 충족하지 못했습니다 (간단 시뮬레이션 기준).");
          }

          return { meetsRequirements: meetsAllRequirements, summary, details };
        };


        // --- Global State & Navigation ---
        let currentResultsState = null; // Used to pass state to results page
        let _currentResultsStateDeepCompare = null; // For detecting actual new results data for resultsPageLocalState reset

        // --- Page Containers ---
        const pageElements = { // Renamed from 'pages' to 'pageElements' as in user's file
            home: document.getElementById('home-page'),
            majorToSubject: document.getElementById('major-to-subject-page'),
            subjectToMajor: document.getElementById('subject-to-major-page'),
            results: document.getElementById('results-page'),
            info: document.getElementById('info-page'),
            loading: document.getElementById('loading-page')
        };

        // --- UI Helper Functions ---
        function createButton(text, onClick, variant = 'primary', size = 'md', additionalClasses = '', disabled = false, id = null) {
            const btn = document.createElement('button');
            btn.textContent = text;
            btn.className = `btn btn-${variant} btn-${size} ${additionalClasses}`;
            if (id) btn.id = id;
            btn.disabled = disabled;
            btn.addEventListener('click', onClick);
            return btn;
        }
        
        function createCard(title, contentHTML, additionalClasses = '') {
            const card = document.createElement('div');
            card.className = `card ${additionalClasses}`;
            if (title) {
                const cardTitle = document.createElement('h3');
                cardTitle.className = 'card-title';
                cardTitle.textContent = title;
                card.appendChild(cardTitle);
            }
            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = contentHTML; // Assuming contentHTML is a string
            card.appendChild(contentDiv);
            return card;
        }


        // --- Page Rendering Functions ---
        function renderHomePage() {
            pageElements.home.innerHTML = `
                <div class="text-center pt-8">
                    <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6">당신의 진로, 여기서 설계해보세요!</h1>
                    <p class="text-lg text-textSecondary mb-12 max-w-2xl mx-auto">
                        고교학점제, 더 이상 복잡하게 생각하지 마세요. <br />
                        나에게 맞는 학과를 찾고, 필요한 과목 선택까지 한 번에!
                    </p>
                    <div class="grid md-grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div class="card">
                            <div class="p-6">
                                <h2 class="text-2xl font-semibold text-secondary mb-4">🎯 학과 기준 추천</h2>
                                <p class="text-textSecondary mb-6">
                                    가고 싶은 대학이나 학과가 있나요? <br/> 해당 학과 진학에 유리한 고등학교 과목들을 추천해 드립니다.
                                </p>
                                <button id="navigateToMajorToSubject" class="btn btn-secondary btn-lg w-full">추천 과목 찾기</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="p-6">
                                <h2 class="text-2xl font-semibold text-accent mb-4">📚 과목 기준 추천</h2>
                                <p class="text-textSecondary mb-6">
                                    이미 선택했거나 관심 있는 과목들이 있나요? <br/> 이 과목들로 진학하기 좋은 학과들을 추천해 드립니다.
                                </p>
                                <button id="navigateToSubjectToMajor" class="btn btn-accent btn-lg w-full">추천 학과 찾기</button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-16 p-8 bg-blue-50 rounded-lg shadow-md">
                        <h3 class="text-2xl font-semibold text-primary mb-4">✨ 고교학점제 완전 정복!</h3>
                        <p class="text-textSecondary mb-6">
                            고교학점제가 무엇인지, 어떻게 활용해야 하는지 궁금하다면? <br/>
                            자세한 정보와 졸업 요건 시뮬레이션(간단) 기능을 확인해보세요.
                        </p>
                        <button id="navigateToInfo" class="btn btn-outline btn-lg">고교학점제 알아보기</button>
                    </div>
                </div>
            `;
            document.getElementById('navigateToMajorToSubject').addEventListener('click', () => navigateTo(ROUTE_PATHS.MAJOR_TO_SUBJECT));
            document.getElementById('navigateToSubjectToMajor').addEventListener('click', () => navigateTo(ROUTE_PATHS.SUBJECT_TO_MAJOR));
            document.getElementById('navigateToInfo').addEventListener('click', () => navigateTo(ROUTE_PATHS.INFO));
        }

        let majorToSubjectState = {
            searchTerm: '',
            selectedMajor: null,
            filteredMajors: [],
            showSuggestions: false
        };

        function renderMajorToSubjectPage() {
            const pageContent = `
                <div class="max-w-2xl mx-auto">
                    <div class="card">
                        <h3 class="card-title">🎯 학과 검색하여 추천 과목 찾기</h3>
                        <p class="text-textSecondary mb-6">
                            관심 있는 학과의 이름을 입력하여 검색한 후 선택해주세요. 해당 학과 진학에 도움이 될 수 있는 고등학교 선택 과목들을 추천해 드립니다.
                        </p>
                        <div class="space-y-6">
                            <div class="relative">
                                <label for="major-search-input" class="block text-sm font-medium text-textSecondary mb-1">학과 검색</label>
                                <div class="flex items-center">
                                    <input
                                        id="major-search-input"
                                        type="text"
                                        value="${majorToSubjectState.searchTerm}"
                                        placeholder="학과 이름을 입력하세요 (예: 컴퓨터공학과)"
                                        class="w-full"
                                        aria-autocomplete="list"
                                        aria-controls="suggestions-box"
                                    />
                                    ${majorToSubjectState.selectedMajor ? 
                                        `<button id="clearMajorSelectionBtn" class="btn btn-outline btn-sm ml-2 py-3 text-red-500 border-red-300">X</button>` 
                                        : ''
                                    }
                                </div>
                                <ul id="suggestions-box" class="suggestions-box" role="listbox" style="display: ${majorToSubjectState.showSuggestions ? 'block' : 'none'};">
                                </ul>
                            </div>
                            <div id="selectedMajorInfo" class="mt-6 p-4 bg-blue-50 rounded-lg" style="display: ${majorToSubjectState.selectedMajor ? 'block' : 'none'};">
                                <!-- Content will be filled by JS -->
                            </div>
                            <button id="submitMajorSelection" class="btn btn-primary btn-lg w-full" ${!majorToSubjectState.selectedMajor ? 'disabled' : ''}>
                                추천 과목 보기
                            </button>
                        </div>
                    </div>
                </div>
            `;
            pageElements.majorToSubject.innerHTML = pageContent;

            const searchInput = document.getElementById('major-search-input');
            const suggestionsBox = document.getElementById('suggestions-box');
            const selectedMajorInfoDiv = document.getElementById('selectedMajorInfo');
            const submitButton = document.getElementById('submitMajorSelection');

            function updateSuggestions() {
                suggestionsBox.innerHTML = '';
                if (majorToSubjectState.showSuggestions) {
                    if (majorToSubjectState.filteredMajors.length > 0) {
                        majorToSubjectState.filteredMajors.forEach(major => {
                            const li = document.createElement('li');
                            li.textContent = major.name;
                            li.setAttribute('role', 'option');
                            li.tabIndex = 0;
                            li.addEventListener('click', () => handleMajorSelect(major));
                            li.addEventListener('keydown', (e) => e.key === 'Enter' && handleMajorSelect(major));
                            suggestionsBox.appendChild(li);
                        });
                    } else if (majorToSubjectState.searchTerm.length > 1 && !majorToSubjectState.selectedMajor) {
                        suggestionsBox.innerHTML = `<li class="no-results">"${majorToSubjectState.searchTerm}"에 대한 검색 결과가 없습니다.</li>`;
                    }
                }
                suggestionsBox.style.display = majorToSubjectState.showSuggestions && (majorToSubjectState.filteredMajors.length > 0 || (majorToSubjectState.searchTerm.length > 1 && !majorToSubjectState.selectedMajor)) ? 'block' : 'none';
            }
            
            function updateSelectedMajorInfo() {
                if (majorToSubjectState.selectedMajor) {
                    selectedMajorInfoDiv.innerHTML = `
                        <h4 class="font-semibold text-primary">${majorToSubjectState.selectedMajor.name} 소개</h4>
                        <p class="text-sm text-textSecondary mt-1">${majorToSubjectState.selectedMajor.description || ''}</p>
                    `;
                    selectedMajorInfoDiv.style.display = 'block';
                    // Re-add clear button if not present or re-render input container
                    if(!document.getElementById('clearMajorSelectionBtn')) {
                        const inputContainer = searchInput.parentElement;
                        const clearBtnHTML = `<button id="clearMajorSelectionBtn" class="btn btn-outline btn-sm ml-2 py-3 text-red-500 border-red-300">X</button>`;
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = clearBtnHTML;
                        const clearBtn = tempDiv.firstChild;
                        inputContainer.appendChild(clearBtn);
                        clearBtn.addEventListener('click', handleClearSelection);
                    }

                } else {
                    selectedMajorInfoDiv.style.display = 'none';
                    const clearBtn = document.getElementById('clearMajorSelectionBtn');
                    if(clearBtn) clearBtn.remove();
                }
                submitButton.disabled = !majorToSubjectState.selectedMajor;
            }


            searchInput.addEventListener('input', (event) => {
                majorToSubjectState.searchTerm = event.target.value;
                majorToSubjectState.selectedMajor = null; 
                if (majorToSubjectState.searchTerm.length > 1) {
                    majorToSubjectState.filteredMajors = MAJORS.filter(major =>
                        major.name.toLowerCase().includes(majorToSubjectState.searchTerm.toLowerCase())
                    );
                    majorToSubjectState.showSuggestions = true;
                } else {
                    majorToSubjectState.filteredMajors = [];
                    majorToSubjectState.showSuggestions = false;
                }
                updateSuggestions();
                updateSelectedMajorInfo(); // Update button state and clear button
            });
            
            searchInput.addEventListener('focus', () => {
                 if (majorToSubjectState.searchTerm.length > 1 && majorToSubjectState.filteredMajors.length > 0 && !majorToSubjectState.selectedMajor) {
                    majorToSubjectState.showSuggestions = true;
                    updateSuggestions();
                }
            });

            function handleMajorSelect(major) {
                majorToSubjectState.selectedMajor = major;
                majorToSubjectState.searchTerm = major.name;
                searchInput.value = major.name; // Update input field display
                majorToSubjectState.filteredMajors = [];
                majorToSubjectState.showSuggestions = false;
                updateSuggestions();
                updateSelectedMajorInfo();
            }
            
            function handleClearSelection() {
                majorToSubjectState.selectedMajor = null;
                majorToSubjectState.searchTerm = '';
                searchInput.value = '';
                majorToSubjectState.filteredMajors = [];
                majorToSubjectState.showSuggestions = false;
                updateSuggestions();
                updateSelectedMajorInfo();
            }

            // Initial render of info and suggestions (if any from previous state)
            updateSuggestions();
            updateSelectedMajorInfo();


            if(majorToSubjectState.selectedMajor && document.getElementById('clearMajorSelectionBtn')) {
                 document.getElementById('clearMajorSelectionBtn').addEventListener('click', handleClearSelection);
            }


            submitButton.addEventListener('click', () => {
                if (majorToSubjectState.selectedMajor) {
                    currentResultsState = { // Set currentResultsState here for navigation
                        mode: RecommendationMode.MAJOR_TO_SUBJECT,
                        selectedMajorId: majorToSubjectState.selectedMajor.id,
                        // Pass additional data if needed by results page directly
                        recommendedSubjects: getRecommendedSubjectsForMajor(majorToSubjectState.selectedMajor.id),
                        selectedMajorName: majorToSubjectState.selectedMajor.name
                    };
                    navigateTo(ROUTE_PATHS.RESULTS);
                }
            });
            
            // Click outside to close suggestions
            document.addEventListener('click', function(event) {
                const suggestionsBoxEl = document.getElementById('suggestions-box');
                const searchInputEl = document.getElementById('major-search-input');
                 // Check if the event target is part of the majorToSubject page. If not, don't act.
                if (!pageElements.majorToSubject.contains(event.target)) return;

                if (suggestionsBoxEl && searchInputEl && !suggestionsBoxEl.contains(event.target) && event.target !== searchInputEl) {
                    if (majorToSubjectState.showSuggestions) { // Only update if it was shown
                        majorToSubjectState.showSuggestions = false;
                        updateSuggestions();
                    }
                }
            });
        }

        let subjectToMajorState = {
            selectedSubjectIds: []
        };

        function renderSubjectToMajorPage() {
            const subjectOptions = SUBJECTS.map(s => ({ id: s.id, name: s.name, category: s.category }));
            
            let checkboxGroupHTML = '<div class="space-y-6">';
            const groupedOptions = subjectOptions.reduce((acc, option) => {
                const category = option.category || '기타';
                if (!acc[category]) acc[category] = [];
                acc[category].push(option);
                return acc;
            }, {});

            for (const category in groupedOptions) {
                checkboxGroupHTML += `
                    <div>
                        <h4 class="checkbox-category-title">${category} (${groupedOptions[category].length})</h4>
                        <div class="checkbox-grid">
                `;
                groupedOptions[category].forEach(option => {
                    const isSelected = subjectToMajorState.selectedSubjectIds.includes(option.id);
                    checkboxGroupHTML += `
                        <label class="checkbox-label ${isSelected ? 'selected' : ''}" data-subject-id="${option.id}">
                            <input type="checkbox" ${isSelected ? 'checked' : ''} data-subject-id="${option.id}" />
                            <span>${option.name}</span>
                        </label>
                    `;
                });
                checkboxGroupHTML += `</div></div>`;
            }
            checkboxGroupHTML += `</div>`;

            pageElements.subjectToMajor.innerHTML = `
                <div class="max-w-4xl mx-auto">
                    <div class="card">
                        <h3 class="card-title">📚 선택 과목으로 추천 학과 찾기</h3>
                        <p class="text-textSecondary mb-6">
                            이미 선택하셨거나 관심 있는 과목들을 선택해주세요. 해당 과목들과 연관성이 높은 학과들을 추천해 드립니다. (여러 개 선택 가능)
                        </p>
                        <div class="space-y-6">
                            ${checkboxGroupHTML}
                            <button id="submitSubjectSelection" class="btn btn-primary btn-lg w-full md:w-auto" ${subjectToMajorState.selectedSubjectIds.length === 0 ? 'disabled' : ''}>
                                추천 학과 보기 (선택: ${subjectToMajorState.selectedSubjectIds.length}개)
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            const submitButton = document.getElementById('submitSubjectSelection');
            const checkboxLabels = pageElements.subjectToMajor.querySelectorAll('.checkbox-label');

            function updateSubjectSubmitButton() {
                submitButton.textContent = `추천 학과 보기 (선택: ${subjectToMajorState.selectedSubjectIds.length}개)`;
                submitButton.disabled = subjectToMajorState.selectedSubjectIds.length === 0;
            }

            checkboxLabels.forEach(label => {
                // Event listener for the label itself for better UX
                label.addEventListener('click', (event) => {
                    const checkbox = label.querySelector('input[type="checkbox"]');
                    if (event.target !== checkbox) { // Avoid double toggling if checkbox itself is clicked
                        checkbox.checked = !checkbox.checked;
                    }
                    // Trigger change event on checkbox to consolidate logic
                    const changeEvent = new Event('change', { bubbles: true });
                    checkbox.dispatchEvent(changeEvent);
                });

                // Event listener for the checkbox's change event
                const checkbox = label.querySelector('input[type="checkbox"]');
                checkbox.addEventListener('change', () => {
                    const subjectId = checkbox.dataset.subjectId;
                    if (checkbox.checked) {
                        if (!subjectToMajorState.selectedSubjectIds.includes(subjectId)) {
                            subjectToMajorState.selectedSubjectIds.push(subjectId);
                        }
                        label.classList.add('selected');
                    } else {
                        subjectToMajorState.selectedSubjectIds = subjectToMajorState.selectedSubjectIds.filter(id => id !== subjectId);
                        label.classList.remove('selected');
                    }
                    updateSubjectSubmitButton();
                });
            });
            
            submitButton.addEventListener('click', () => {
                if (subjectToMajorState.selectedSubjectIds.length > 0) {
                    currentResultsState = { // Set currentResultsState here
                        mode: RecommendationMode.SUBJECT_TO_MAJOR,
                        selectedSubjectIds: [...subjectToMajorState.selectedSubjectIds],
                        recommendedMajors: getRecommendedMajorsForSubjects([...subjectToMajorState.selectedSubjectIds])
                    };
                    navigateTo(ROUTE_PATHS.RESULTS);
                }
            });
        }
        
        let resultsPageLocalState = {
            expandedUniversityDetail: null, 
            additionalSelectedSubjectIds: [],
            showAdditionalSubjectSelectorInfo: null,
            currentSimulationResult: null, 
            initialSubjectIdsForSim: [] 
        };

        function renderResultsPage() {
            pageElements.results.innerHTML = ''; // Clear previous content
            showLoading(); // Uses global showLoading()

            const isNewPrimaryData = !_currentResultsStateDeepCompare || JSON.stringify(_currentResultsStateDeepCompare) !== JSON.stringify(currentResultsState);

            if (isNewPrimaryData) {
                // Full reset of local state because primary data has changed
                resultsPageLocalState = {
                    expandedUniversityDetail: null,
                    additionalSelectedSubjectIds: [],
                    showAdditionalSubjectSelectorInfo: null,
                    currentSimulationResult: null,
                    initialSubjectIdsForSim: [] 
                };
                if (currentResultsState) { // Only update compare cache and initialSim if new data is valid
                   _currentResultsStateDeepCompare = JSON.parse(JSON.stringify(currentResultsState));
                   // Populate initialSubjectIdsForSim from the new currentResultsState
                   if (currentResultsState.mode === RecommendationMode.MAJOR_TO_SUBJECT) {
                       resultsPageLocalState.initialSubjectIdsForSim = currentResultsState.recommendedSubjects?.map(s => s.id) || [];
                   } else if (currentResultsState.mode === RecommendationMode.SUBJECT_TO_MAJOR) {
                       resultsPageLocalState.initialSubjectIdsForSim = currentResultsState.selectedSubjectIds || [];
                   }
                } else {
                    _currentResultsStateDeepCompare = null; // No valid new data to cache
                }
            }
            
            setTimeout(() => { 
                if (!currentResultsState) { // Check currentResultsState validity after potential reset
                    pageElements.results.innerHTML = createCard('오류 발생', `
                        <p class="text-red-600 mb-4">결과를 표시할 정보가 없습니다. 홈으로 돌아가 다시 시도해주세요.</p>
                        <button id="resultsErrorHomeBtn" class="btn btn-primary">홈으로 돌아가기</button>
                    `).outerHTML;
                     if(document.getElementById('resultsErrorHomeBtn')) {
                        document.getElementById('resultsErrorHomeBtn').addEventListener('click', () => navigateTo(ROUTE_PATHS.HOME));
                     }
                    hideLoading();
                    return;
                }
                
                let processedResults = { ...currentResultsState }; // Use a copy for processing
                let error = null;

                try {
                    // Data processing that might have been in navigateTo or early renderResultsPage
                    if (processedResults.mode === RecommendationMode.MAJOR_TO_SUBJECT && processedResults.selectedMajorId) {
                        const major = getMajorById(processedResults.selectedMajorId);
                        if (!major) throw new Error("선택한 학과 정보를 찾을 수 없습니다.");
                        // Ensure recommendedSubjects and name are part of the processedResults if not already from navigation
                        if (!processedResults.recommendedSubjects) {
                            processedResults.recommendedSubjects = getRecommendedSubjectsForMajor(processedResults.selectedMajorId);
                        }
                        if (!processedResults.selectedMajorName) {
                             processedResults.selectedMajorName = major.name;
                        }
                    } else if (processedResults.mode === RecommendationMode.SUBJECT_TO_MAJOR && processedResults.selectedSubjectIds) {
                        if (processedResults.selectedSubjectIds.length === 0) throw new Error("선택한 과목이 없습니다.");
                        if (!processedResults.recommendedMajors) {
                             processedResults.recommendedMajors = getRecommendedMajorsForSubjects(processedResults.selectedSubjectIds);
                        }
                    } else if (!processedResults.mode) { // Fallback if mode is missing
                        throw new Error("결과 유형 정보가 누락되었습니다.");
                    }
                } catch (e) {
                    error = e.message || "결과를 불러오는 중 오류가 발생했습니다.";
                }
                
                if (error) {
                    pageElements.results.innerHTML = createCard('오류 발생', `
                        <p class="text-red-600 mb-4">${error}</p>
                        <button id="resultsErrorHomeBtn2" class="btn btn-primary">홈으로 돌아가기</button>
                    `).outerHTML;
                    if(document.getElementById('resultsErrorHomeBtn2')) {
                        document.getElementById('resultsErrorHomeBtn2').addEventListener('click', () => navigateTo(ROUTE_PATHS.HOME));
                    }
                    hideLoading();
                    return;
                }
                
                function renderCoreResultsContent() {
                    let contentHTML = '';
                    if (processedResults.mode === RecommendationMode.MAJOR_TO_SUBJECT) {
                        contentHTML += renderMajorToSubjectResultsHTML(processedResults);
                    } else {
                        contentHTML += renderSubjectToMajorResultsHTML(processedResults);
                    }
                    
                    // Use initialSubjectIdsForSim from resultsPageLocalState as it's correctly populated now
                    const allSelectedIdsForSim = Array.from(new Set([...resultsPageLocalState.initialSubjectIdsForSim, ...resultsPageLocalState.additionalSelectedSubjectIds]));
                    const simulation = simulateCredits(allSelectedIdsForSim);
                    resultsPageLocalState.currentSimulationResult = simulation; // Store for potential re-use if only selector changes
                    contentHTML += renderCreditSimulationResultsHTML(simulation, processedResults);
                    
                    if(resultsPageLocalState.showAdditionalSubjectSelectorInfo) {
                        contentHTML += renderAdditionalSubjectSelectorHTML(resultsPageLocalState.initialSubjectIdsForSim);
                    }

                    contentHTML += `
                        <div class="mt-10 text-center">
                            <button id="resultsGoBackBtn" class="btn btn-outline">이전으로 돌아가기</button>
                            <button id="resultsGoHomeBtn" class="btn btn-primary ml-4">다른 추천 받기</button>
                        </div>
                    `;
                    pageElements.results.innerHTML = contentHTML;
                    attachResultsPageEventListeners(processedResults); // Pass processedResults to event listeners
                }
                
                renderCoreResultsContent();
                hideLoading();
            }, 300); 
        }

        function attachResultsPageEventListeners(processedResults) { // Accept processedResults
            const goBackBtn = document.getElementById('resultsGoBackBtn');
            if (goBackBtn) goBackBtn.addEventListener('click', () => window.history.back());
            
            const goHomeBtn = document.getElementById('resultsGoHomeBtn');
            if (goHomeBtn) goHomeBtn.addEventListener('click', () => navigateTo(ROUTE_PATHS.HOME));

            const uniDetailHeaders = pageElements.results.querySelectorAll('.university-detail-header');
            uniDetailHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const majorId = header.dataset.majorId;
                    const index = parseInt(header.dataset.index);
                    handleToggleExpandedUniversity(majorId, index); // This updates resultsPageLocalState
                    // No need to pass processedResults to renderResultsPage, it uses currentResultsState
                    renderResultsPage(); // Re-render: will use updated resultsPageLocalState
                });
            });
            
            const addSubjectBtns = pageElements.results.querySelectorAll('.add-extra-subject-btn');
            addSubjectBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                     const ruleId = btn.dataset.ruleId;
                     const ruleDescription = btn.dataset.ruleDescription;
                     const category = btn.dataset.category;
                     resultsPageLocalState.showAdditionalSubjectSelectorInfo = { ruleId, ruleDescription, category: category === "undefined" ? undefined : category };
                     renderResultsPage(); // Re-render to show selector
                });
            });

            const closeAddSubjectPanelBtn = document.getElementById('closeAddSubjectPanelBtn');
            if(closeAddSubjectPanelBtn) {
                closeAddSubjectPanelBtn.addEventListener('click', () => {
                    resultsPageLocalState.showAdditionalSubjectSelectorInfo = null;
                    renderResultsPage(); // Re-render to hide selector
                });
            }
            
            const additionalSubjectCheckboxes = pageElements.results.querySelectorAll('.additional-subject-checkbox');
            additionalSubjectCheckboxes.forEach(checkbox => {
                const label = checkbox.closest('.checkbox-label'); // Get parent label
                if (label) { // Check if label exists
                    // Handle click on label for better UX
                    label.addEventListener('click', (event) => {
                        if (event.target !== checkbox) { // Prevent double-trigger if checkbox itself is clicked
                            checkbox.checked = !checkbox.checked;
                            // Manually dispatch change event on checkbox
                            const changeEvent = new Event('change', { bubbles: true });
                            checkbox.dispatchEvent(changeEvent);
                        }
                    });
                }

                checkbox.addEventListener('change', () => { // Handle change on checkbox
                    const subjectId = checkbox.dataset.subjectId;
                    const currentAdditionalIds = [...resultsPageLocalState.additionalSelectedSubjectIds];
                    const associatedLabel = checkbox.closest('.checkbox-label'); // Find label again for styling

                    if (checkbox.checked) {
                        if (!currentAdditionalIds.includes(subjectId)) {
                            resultsPageLocalState.additionalSelectedSubjectIds.push(subjectId);
                        }
                        if (associatedLabel) associatedLabel.classList.add('selected');
                    } else {
                        resultsPageLocalState.additionalSelectedSubjectIds = currentAdditionalIds.filter(id => id !== subjectId);
                        if (associatedLabel) associatedLabel.classList.remove('selected');
                    }
                    renderResultsPage(); // Re-render to update simulation and selector UI
                });
            });
        }
        
        function handleToggleExpandedUniversity(majorId, index) {
            if (resultsPageLocalState.expandedUniversityDetail?.majorId === majorId && resultsPageLocalState.expandedUniversityDetail?.index === index) {
                resultsPageLocalState.expandedUniversityDetail = null;
            } else {
                resultsPageLocalState.expandedUniversityDetail = { majorId, index };
            }
        }

        function renderMajorToSubjectResultsHTML(resultsData) {
            const major = resultsData.selectedMajorId ? getMajorById(resultsData.selectedMajorId) : null;
            if (!major) return `<p class="text-textSecondary">선택된 학과 정보를 불러올 수 없습니다.</p>`;

            // These are the subjects recommended for the *overall major*, used in the expansion
            const generalRecommendedSubjects = resultsData.recommendedSubjects || getRecommendedSubjectsForMajor(major.id);

            let universityDetailsHTML = '';
            if (major.universityDetails && major.universityDetails.length > 0) {
                universityDetailsHTML = `<div class="space-y-3">`;
                major.universityDetails.forEach((detail, index) => {
                    const isExpanded = resultsPageLocalState.expandedUniversityDetail?.majorId === major.id && resultsPageLocalState.expandedUniversityDetail?.index === index;
                    let recommendedSubjectsContentHTML = '';
                    if (generalRecommendedSubjects && generalRecommendedSubjects.length > 0) {
                        recommendedSubjectsContentHTML = `<ul class="list-disc list-inside text-sm text-indigo-700 space-y-1">`;
                        generalRecommendedSubjects.forEach(subject => {
                            recommendedSubjectsContentHTML += `<li>${subject.name} <span class="text-xs text-indigo-500">(${subject.category})</span></li>`;
                        });
                        recommendedSubjectsContentHTML += `</ul>`;
                    } else {
                        recommendedSubjectsContentHTML = `<p class="text-sm text-textSecondary">추천 교과목 정보가 준비되지 않았습니다.</p>`;
                    }

                    universityDetailsHTML += `
                        <div class="university-detail-item">
                            <div class="university-detail-header ${isExpanded ? 'open' : ''}" data-major-id="${major.id}" data-index="${index}" role="button" tabIndex="0">
                                <div>
                                    <h5 class="font-semibold text-indigo-700">${detail.universityName}</h5>
                                    <p class="text-sm text-gray-600">${detail.departmentName}</p>
                                    ${detail.description ? `<p class="description-text">${detail.description}</p>` : ''}
                                </div>
                                <svg class="w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                            <div class="university-detail-expanded ${isExpanded ? 'open' : ''}">
                                <p class="text-sm font-semibold text-indigo-800 mb-2">"${major.name}" 분야 관련 학부/학과입니다.</p>
                                <h6 class="text-sm font-semibold text-indigo-800 mb-1">"${detail.departmentName}" 진학에 도움되는 추천 교과목 (일반 "${major.name}" 기준):</h6>
                                ${recommendedSubjectsContentHTML}
                            </div>
                        </div>
                    `;
                });
                universityDetailsHTML += `<p class="text-xs text-gray-500 mt-4">* 실제 모집 요강, 학과명 및 개설 여부는 각 대학별 홈페이지를 통해 반드시 확인하시기 바랍니다.</p></div>`;
            } else {
                universityDetailsHTML = `<p class="text-textSecondary">관련 대학 및 학과 정보가 아직 준비되지 않았습니다.</p>`;
            }

            return `
                <h2 class="text-3xl font-bold text-primary mb-2">"${resultsData.selectedMajorName || major.name}" 학과 정보</h2>
                <p class="text-textSecondary mb-6">선택하신 학과와 관련된 대학 및 학부/학과 정보입니다. 각 항목을 클릭하여 상세 정보를 확인하세요.</p>
                <div class="card mt-6 bg-blue-50 border border-blue-200">
                    <h3 class="card-title">🎓 관련 대학 및 학부/학과</h3>
                    ${universityDetailsHTML}
                </div>
            `;
        }

        function renderSubjectToMajorResultsHTML(resultsData) {
            const selectedSubjectsNames = resultsData.selectedSubjectIds?.map(id => getSubjectById(id)?.name).join(', ');
            let majorsHTML = '';
            const recommendedMajors = resultsData.recommendedMajors || []; // Ensure it's an array

            if (recommendedMajors.length > 0) {
                majorsHTML = `<div class="space-y-6">`;
                recommendedMajors.forEach(major => {
                    let uniDetailsList = '';
                    if (major.universityDetails && major.universityDetails.length > 0) {
                        uniDetailsList = `<div class="space-y-3">`;
                        major.universityDetails.forEach(detail => {
                             uniDetailsList += `
                                <div class="p-3 border border-gray-200 rounded-lg hover:bg-gray-100 cursor-default">
                                    <h5 class="font-semibold text-indigo-700">${detail.universityName}</h5>
                                    <p class="text-sm text-gray-600">${detail.departmentName}</p>
                                    ${detail.description ? `<p class="text-xs text-gray-500 mt-1">${detail.description}</p>` : ''}
                                </div>`;
                        });
                        uniDetailsList += `</div>`;
                    } else {
                        uniDetailsList = `<p class="text-sm text-textSecondary">관련 대학 및 학과 정보가 아직 준비되지 않았습니다.</p>`;
                    }

                    majorsHTML += `
                        <div class="card bg-amber-50 border border-amber-200">
                            <h3 class="card-title">${major.name}</h3>
                            ${major.description ? `<p class="text-sm text-textSecondary mb-3">${major.description}</p>` : ''}
                            ${(major.universityDetails && major.universityDetails.length > 0) ? `
                                <div class="mt-3 pt-3 border-t border-amber-300">
                                    <h5 class="font-medium text-accent text-md mb-2">관련 대학 및 학부/학과:</h5>
                                    ${uniDetailsList}
                                    <p class="text-xs text-gray-500 mt-3">* 실제 정보는 각 대학별 홈페이지를 통해 확인하시기 바랍니다.</p>
                                </div>` : ''
                            }
                        </div>
                    `;
                });
                majorsHTML += `</div>`;
            } else {
                majorsHTML = `<p>추천 학과 정보를 찾을 수 없습니다. 선택하신 과목 조합에 맞는 학과 데이터가 부족할 수 있습니다.</p>`;
            }

            return `
                <h2 class="text-3xl font-bold text-primary mb-2">선택 과목 기반 추천 학과</h2>
                <p class="text-textSecondary mb-6">선택하신 과목들(<span class="font-semibold">${selectedSubjectsNames || 'N/A'}</span>)과 연관성이 높은 학과들입니다.</p>
                ${majorsHTML}
            `;
        }
        
        function renderCreditSimulationResultsHTML(simulation, resultsData) {
            if (!simulation) return '';
            let title = "학점 시뮬레이션";
            if (resultsData?.mode === RecommendationMode.MAJOR_TO_SUBJECT) {
                title = (resultsData.selectedMajorName || (currentResultsState && currentResultsState.selectedMajorName)) ? `"${resultsData.selectedMajorName || currentResultsState.selectedMajorName}" 학과 연관 과목 기반 학점 시뮬레이션` : "선택 학과 연관 과목 기반 학점 시뮬레이션";
            } else if (resultsData?.mode === RecommendationMode.SUBJECT_TO_MAJOR) {
                title = "선택 과목 기반 학점 시뮬레이션";
            }

            let detailsHTML = '<ul class="list-disc list-inside space-y-1 text-sm">';
            simulation.details.forEach(detail => {
                detailsHTML += `
                    <li class="${detail.isMet ? 'text-green-700' : 'text-red-700'}">
                        ${detail.ruleDescription}: ${detail.isMet ? '충족' : `미충족 ( ${detail.needed || ''} )`}
                        ${!detail.isMet ? `
                            <button 
                                class="btn btn-outline btn-sm ml-2 py-0_5 px-1_5 text-xs border-accent text-accent hover:bg-amber-50 add-extra-subject-btn"
                                data-rule-id="${detail.ruleId}"
                                data-rule-description="${detail.ruleDescription}"
                                data-category="${detail.appliesToCategory}"
                            >
                                추가 과목 선택
                            </button>` : ''}
                    </li>
                `;
            });
            detailsHTML += '</ul>';

            return `
                <div class="card mt-10 bg-gray-50">
                    <h3 class="card-title">📊 ${title} (간단)</h3>
                    <p class="text-lg font-semibold mb-3 ${simulation.meetsRequirements ? 'text-green-600' : 'text-red-600'}">
                        ${simulation.summary[0]}
                    </p>
                    ${simulation.summary.slice(1).map(s => `<p class="text-sm text-textSecondary">${s}</p>`).join('')}
                    <h4 class="font-semibold mt-4 mb-2 text-textPrimary">세부 항목:</h4>
                    ${detailsHTML}
                    <p class="text-xs text-gray-500 mt-4">* 본 시뮬레이션은 일반적인 예시 규칙에 기반한 참고용이며, 실제 졸업 요건은 학교 규정을 따릅니다.</p>
                </div>
            `;
        }

        function renderAdditionalSubjectSelectorHTML(initialSimSubjectIds) {
            if (!resultsPageLocalState.showAdditionalSubjectSelectorInfo) return '';
            
            const availableSubjects = SUBJECTS.filter(s => !initialSimSubjectIds.includes(s.id));
            let checkboxGroupHTML = '<div class="space-y-4">';
            const grouped = availableSubjects.reduce((acc, s) => {
                const cat = s.category || '기타';
                if (!acc[cat]) acc[cat] = [];
                acc[cat].push(s);
                return acc;
            }, {});

            for (const category in grouped) {
                checkboxGroupHTML += `<div><h4 class="checkbox-category-title">${category} (${grouped[category].length})</h4><div class="checkbox-grid">`;
                grouped[category].forEach(option => {
                    const isSelected = resultsPageLocalState.additionalSelectedSubjectIds.includes(option.id);
                    checkboxGroupHTML += `
                        <label class="checkbox-label additional-subject-checkbox ${isSelected ? 'selected' : ''}" data-subject-id="${option.id}">
                            <input type="checkbox" class="additional-subject-checkbox" data-subject-id="${option.id}" ${isSelected ? 'checked' : ''}/>
                            <span>${option.name}</span>
                        </label>
                    `;
                });
                checkboxGroupHTML += `</div></div>`;
            }
            checkboxGroupHTML += `</div>`;
            
            let focusedTitle = `"${resultsPageLocalState.showAdditionalSubjectSelectorInfo.ruleDescription}" 충족을 위한 추가 과목 선택`;
            if(resultsPageLocalState.showAdditionalSubjectSelectorInfo.category){
              focusedTitle += ` (권장: ${resultsPageLocalState.showAdditionalSubjectSelectorInfo.category} 과목)`;
            }

            return `
                <div class="card mt-6 bg-sky-50 border border-sky-200">
                    <h3 class="card-title">${focusedTitle}</h3>
                    <p class="text-sm text-textSecondary mb-4">
                        아래 목록에서 추가로 이수할 과목을 선택해주세요. 선택 시 학점 시뮬레이션이 자동으로 업데이트됩니다.
                        ${resultsPageLocalState.showAdditionalSubjectSelectorInfo.category ? ` 현재 "${resultsPageLocalState.showAdditionalSubjectSelectorInfo.category}" 규칙을 위해 과목을 선택하고 있습니다.` : ''}
                    </p>
                    ${checkboxGroupHTML}
                    <button id="closeAddSubjectPanelBtn" class="btn btn-secondary mt-4">추가 선택 패널 닫기</button>
                </div>
            `;
        }


        function renderCreditSystemInfoPage() {
            let accordionHTML = '<div class="space-y-4 mb-10">';
            CREDIT_SYSTEM_EXPLANATION.forEach((item, index) => {
                // Open the first item by default or maintain state if already set
                const isOpen = (infoPageAccordionState.openAccordionTitle === null && index === 0) || infoPageAccordionState.openAccordionTitle === item.title;
                accordionHTML += `
                    <div class="accordion-item">
                        <button class="accordion-button ${isOpen ? 'open' : ''}" data-accordion-title="${item.title}">
                            <h3>${item.title}</h3>
                            <svg class="w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div class="accordion-content ${isOpen ? 'open' : ''}">
                            <p class="whitespace-pre-line">${item.content}</p>
                        </div>
                    </div>
                `;
            });
            accordionHTML += '</div>';

            let rulesHTML = '';
            GRADUATION_REQUIREMENTS_INFO.rules.forEach(rule => {
                rulesHTML += `
                    <li>
                        ${rule.description}: 
                        ${rule.minSubjects ? ` ${rule.minSubjects}과목 이상` : ''}
                        ${rule.minCredits ? ` ${rule.minCredits}학점 이상` : ''}
                        ${rule.appliesToCategory ? ` (${rule.appliesToCategory})` : ''}
                    </li>
                `;
            });

            pageElements.info.innerHTML = `
                <div class="max-w-3xl mx-auto">
                    <div class="card">
                        <div class="text-center mb-10">
                            <h1 class="text-4xl font-bold text-primary mb-3">✨ 고교학점제 알아보기</h1>
                            <p class="text-lg text-textSecondary">고교학점제에 대한 모든 것을 쉽고 명확하게 알려드립니다.</p>
                        </div>
                        ${accordionHTML}
                        <div class="mt-12 p-6 bg-blue-50 rounded-lg shadow-md">
                            <h2 class="text-2xl font-semibold text-primary mb-4">🎓 졸업 요건 (예시)</h2>
                            <p class="text-textSecondary mb-3">
                                다음은 일반적인 고등학교 졸업 요건의 예시입니다. 실제 요건은 학교별로 다를 수 있으니, 반드시 재학 중인 학교의 규정을 확인하세요.
                            </p>
                            <ul class="list-disc list-inside space-y-1 text-textSecondary">
                                <li>총 이수학점: ${GRADUATION_REQUIREMENTS_INFO.totalCredits}학점 이상</li>
                                ${rulesHTML}
                            </ul>
                            <p class="text-xs text-gray-500 mt-4">* 위 내용은 참고용이며, 학교마다 다를 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            `;

            const accordionButtons = pageElements.info.querySelectorAll('.accordion-button');
            accordionButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const title = button.dataset.accordionTitle;
                    const content = button.nextElementSibling; // The .accordion-content div
                    const iconSvg = button.querySelector('svg');

                    // If this accordion item was already open, close it.
                    if (button.classList.contains('open')) {
                        button.classList.remove('open');
                        content.classList.remove('open');
                        if (iconSvg) iconSvg.classList.remove('rotate-180');
                        infoPageAccordionState.openAccordionTitle = null; // Set to null as it's now closed
                    } else {
                        // Close any other open accordion items
                        pageElements.info.querySelectorAll('.accordion-button.open').forEach(btn => {
                            btn.classList.remove('open');
                            btn.nextElementSibling.classList.remove('open');
                            const otherIcon = btn.querySelector('svg');
                            if (otherIcon) otherIcon.classList.remove('rotate-180');
                        });
                        // Open the clicked accordion item
                        button.classList.add('open');
                        content.classList.add('open');
                        if (iconSvg) iconSvg.classList.add('rotate-180');
                        infoPageAccordionState.openAccordionTitle = title; // Update state
                    }
                });
            });
        }
        // Global state for info page accordion
        let infoPageAccordionState = {
            openAccordionTitle: CREDIT_SYSTEM_EXPLANATION.length > 0 ? CREDIT_SYSTEM_EXPLANATION[0].title : null
        };

        // --- Router Logic ---
        // showLoading and hideLoading as defined by the user's file
        function showLoading() { 
            Object.values(pageElements).forEach(p => p.classList.remove('active'));
            pageElements.loading.classList.add('active');
            const loadingText = pageElements.loading.querySelector('.loading-spinner-text');
            if(loadingText) loadingText.textContent = "로딩 중...";
        }
        function hideLoading() {
            pageElements.loading.classList.remove('active');
        }

        function setActivePage(pageKey) {
            showLoading();
            setTimeout(() => {
                Object.values(pageElements).forEach(p => p.classList.remove('active'));
                if (pageElements[pageKey]) {
                    pageElements[pageKey].classList.add('active');
                } else {
                    pageElements.home.classList.add('active'); // Fallback to home
                }
                // Update active nav link
                const currentActiveHash = window.location.hash || '#/';
                document.querySelectorAll('header .nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === currentActiveHash) {
                         link.classList.add('active');
                    } else if (currentActiveHash === '#/' && link.getAttribute('href') === '#/') { // Explicitly for home
                         link.classList.add('active');
                    }
                });
                hideLoading();
            }, 50); // Short delay to ensure loading spinner is visible
        }

        function handleRouteChange() {
            const hash = window.location.hash || '#/'; 
            const routeToMatch = hash.substring(1) || '/'; // Ensure leading / for comparison with ROUTE_PATHS

            // Reset page-specific states when navigating away from them
            if (routeToMatch !== ROUTE_PATHS.RESULTS) {
                 currentResultsState = null; 
                 _currentResultsStateDeepCompare = null; // Also reset the comparison cache
            }
            if (routeToMatch !== ROUTE_PATHS.MAJOR_TO_SUBJECT) {
                 majorToSubjectState = { searchTerm: '', selectedMajor: null, filteredMajors: [], showSuggestions: false };
            }
            if (routeToMatch !== ROUTE_PATHS.SUBJECT_TO_MAJOR) {
                 subjectToMajorState = { selectedSubjectIds: [] };
            }
            if (routeToMatch !== ROUTE_PATHS.INFO) {
                 // Reset accordion state if desired, or let it persist
                 // infoPageAccordionState = { openAccordionTitle: CREDIT_SYSTEM_EXPLANATION.length > 0 ? CREDIT_SYSTEM_EXPLANATION[0].title : null };
            }


            if (routeToMatch === ROUTE_PATHS.HOME || routeToMatch === '') {
                renderHomePage();
                setActivePage('home');
            } else if (routeToMatch === ROUTE_PATHS.MAJOR_TO_SUBJECT) {
                renderMajorToSubjectPage();
                setActivePage('majorToSubject');
            } else if (routeToMatch === ROUTE_PATHS.SUBJECT_TO_MAJOR) {
                renderSubjectToMajorPage();
                setActivePage('subjectToMajor');
            } else if (routeToMatch === ROUTE_PATHS.RESULTS) {
                // renderResultsPage handles its own content rendering if currentResultsState is set
                setActivePage('results'); // This will call showLoading/hideLoading
                if(currentResultsState) { // Only render if there's state to show
                    renderResultsPage();
                } else { // If somehow navigated to /results without state, redirect or show error
                    navigateTo(ROUTE_PATHS.HOME); // Or show an error message on results page
                }
            } else if (routeToMatch === ROUTE_PATHS.INFO) {
                renderCreditSystemInfoPage();
                setActivePage('info');
            } else { // Fallback for unknown routes
                renderHomePage(); 
                setActivePage('home');
                 window.location.hash = `#${ROUTE_PATHS.HOME}`; // Correct the hash
            }
             window.scrollTo(0,0); 
        }

        function navigateTo(path, state = null) { 
            if (path === ROUTE_PATHS.RESULTS && state) {
                currentResultsState = state; 
            } else if (path !== ROUTE_PATHS.RESULTS) {
                currentResultsState = null; // Clear results state if navigating elsewhere
                _currentResultsStateDeepCompare = null;
            }
            // Ensure path for hash always starts with / if not already root
            window.location.hash = (path === '/' || path === '') ? '#/' : `#${path}`;
        }

        // --- Initial Load ---
        window.addEventListener('hashchange', handleRouteChange);
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('current-year').textContent = new Date().getFullYear();
            
            // Make logo and nav links use navigateTo for consistent state handling
            document.querySelector('header .logo').addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(ROUTE_PATHS.HOME);
            });
            document.querySelectorAll('header .nav-links a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const path = link.getAttribute('href').substring(1); // Remove #
                    navigateTo(path || ROUTE_PATHS.HOME); // Default to home if path is empty
                });
            });

            handleRouteChange(); // Initial page load based on current hash
        });