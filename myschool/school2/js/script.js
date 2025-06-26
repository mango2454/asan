let allMajors = [];
    const majorSeqList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56];
    const apiKey = "76d8d68ac47a5b247d639275276adf76";

    async function loadMajors() {
      const list = document.getElementById("list");
      list.innerHTML = "불러오는 중...";
      
      try {
        const majorPromises = majorSeqList.map(async (majorSeq) => {
          const url = `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=MAJOR_VIEW&contentType=json&gubun=high_list&majorSeq=${majorSeq}`;
          const response = await fetch(url);
          const data = await response.json();
          return data.dataSearch?.content?.[0] || null;
        });

        const majors = await Promise.all(majorPromises);
        allMajors = majors.filter(major => major !== null);
        renderMajors(allMajors);
      } catch (err) {
        console.error(err);
        list.innerHTML = "<p class='no-data'>데이터를 불러오지 못했습니다.</p>";
      }
    }

    function renderMajors(majors) {
      const list = document.getElementById("list");
      if (majors.length === 0) {
        list.innerHTML = "<p class='no-data'>검색 결과가 없습니다.</p>";
        return;
      }
      list.innerHTML = majors.map(major => `
        <div class="major" onclick="toggleSchoolsForMajor('${major.major.replace(/'/g, "\\'")}', this)">
          <strong>${major.major}</strong>
          <div class="meta">세부학과: ${major.department || '없음'}</div>
          <div class="meta">학과 설명: ${major.summary || '없음'}</div>
          <div class="schools" style="display:none;"></div>
        </div>
      `).join("");
    }

    async function toggleSchoolsForMajor(majorName, element) {
      const schoolsDiv = element.querySelector('.schools');
      if (schoolsDiv.style.display === 'block') {
        schoolsDiv.style.display = 'none';
        return;
      }

      schoolsDiv.innerHTML = "<div class='no-data'>학교 정보를 불러오는 중...</div>";
      schoolsDiv.style.display = 'block';

      try {
        const major = allMajors.find(m => m.major === majorName);
        if (!major || !major.setshl) {
          schoolsDiv.innerHTML = "<div class='no-data'>학교 정보가 없습니다.</div>";
          return;
        }

        const seoulSchools = major.setshl.filter(school => 
          school.area === "서울특별시"
        );

        if (seoulSchools.length === 0) {
          schoolsDiv.innerHTML = "<div class='no-data'>서울 지역 학교 정보가 없습니다.</div>";
          return;
        }

        // 학교 정보를 가져오기 위한 API 호출
        const schoolUrls = [
          `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&region=100260&sch1=100362&perPage=250`,
          `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&region=100260&sch1=100363&perPage=250`,
          `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&region=100260&sch1=100364&perPage=250`,
          `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&region=100260&sch1=100365&perPage=250`
        ];

        const responses = await Promise.all(schoolUrls.map(url => fetch(url)));
        const dataList = await Promise.all(responses.map(res => res.json()));
        const allSchools = dataList.flatMap(data => data.dataSearch?.content || []);

        schoolsDiv.innerHTML = seoulSchools.map(school => {
          const schoolInfo = allSchools.find(s => s.schoolName === school.schoolName);
          const homepageUrl = schoolInfo?.link || '없음';
          return `
            <div class="school" ${homepageUrl !== '없음' ? `onclick="window.open('${homepageUrl}', '_blank')"` : ''}>
              <strong>${school.schoolName}</strong>
              <div class="meta">주소: ${schoolInfo?.adres || '정보 없음'}</div>
              <div class="desc">학과명: ${school.majorName}</div>
              <div class="desc">홈페이지: ${homepageUrl !== '없음' ? `<a href='${homepageUrl}' target='_blank' class="homepage-link">${homepageUrl}</a>` : '없음'}</div>
              <div class="desc">학교구분: ${schoolInfo?.schoolGubun || '정보 없음'}</div>
            </div>
          `;
        }).join("");
      } catch (err) {
        console.error(err);
        schoolsDiv.innerHTML = "<div class='no-data'>학교 정보를 불러오는데 실패했습니다.</div>";
      }
    }

    // 학교 상세 정보 토글 함수 추가
    window.toggleSchoolDetail = function(schoolElem) {
      const detail = schoolElem.querySelector('.school-detail');
      if (!detail) return;
      if (detail.style.display === 'block') {
        detail.style.display = 'none';
      } else {
        detail.style.display = 'block';
      }
    }

    function filterMajors() {
      const keyword = document.getElementById("searchInput").value.trim();
      if (keyword === "") {
        renderMajors(allMajors);
        return;
      }
      const filtered = allMajors.filter(major =>
        major.major.includes(keyword) || 
        (major.department && major.department.includes(keyword))
      );
      renderMajors(filtered);
    }

    window.onload = async function() {
      await loadMajors();
    };