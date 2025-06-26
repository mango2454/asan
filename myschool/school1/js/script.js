let allSchools = [];
    const majorSeqList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56];
    const apiKey = "76d8d68ac47a5b247d639275276adf76";
    let openSchool = null;

    async function loadSchools() {
      const list = document.getElementById("list");
      list.innerHTML = "불러오는 중...";
      const urls = [
        // `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&region=100260&sch1=100362&perPage=250`, 일반고
        `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&region=100260&sch1=100363&perPage=250`,
        `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&region=100260&sch1=100364&perPage=250`,
        // `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&region=100260&sch1=100365&perPage=250`
      ];
      try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const dataList = await Promise.all(responses.map(res => res.json()));
        allSchools = dataList.flatMap(data => data.dataSearch?.content || []);
        renderSchools(allSchools);
      } catch (err) {
        console.error(err);
        list.innerHTML = "<p class='no-data'>데이터를 불러오지 못했습니다.</p>";
      }
    }

    function renderSchools(schools) {
      const list = document.getElementById("list");
      const seoulSchools = schools.filter(school => school.adres && school.adres.includes("서울특별시"));
      if (seoulSchools.length === 0) {
        list.innerHTML = "<p class='no-data'>검색 결과가 없습니다.</p>";
        return;
      }
      list.innerHTML = seoulSchools.map(school => `
        <div class="school" onclick="toggleDepartmentsForSchool('${school.schoolName.replace(/'/g, "\\'")}', this)">
          <strong>${school.schoolName}</strong>
          <div class="meta">주소: ${school.adres}</div>
          <div class="meta">홈페이지: ${school.link ? `<a href='${school.link}' target='_blank'>${school.link}</a>` : "없음"}</div>
          <div class="meta">학교구분: ${school.schoolGubun}</div>
          <div class="departments" style="display:none;"></div>
        </div>
      `).join("");
    }

    async function toggleDepartmentsForSchool(schoolName, element) {
      // 다른 학교의 학과 정보는 닫고, 클릭한 학교만 항상 펼쳐지도록
      const allSchoolDivs = document.querySelectorAll('.school');
      allSchoolDivs.forEach(div => {
        if (div !== element) div.querySelector('.departments').style.display = 'none';
      });
      const departmentsDiv = element.querySelector('.departments');
      // 이미 열려있어도 다시 클릭해도 닫히지 않음(항상 열림)
      if (departmentsDiv.style.display === 'block') {
        return;
      }
      departmentsDiv.innerHTML = "<div class='no-data'>학과 정보를 불러오는 중...</div>";
      departmentsDiv.style.display = 'block';
      let foundMajors = [];
      for (const majorSeq of majorSeqList) {
        try {
          const url = `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=MAJOR_VIEW&contentType=json&gubun=high_list&majorSeq=${majorSeq}`;
          const response = await fetch(url);
          const data = await response.json();
          const setshl = data.dataSearch?.content?.[0]?.setshl || [];
          // setshl에서 학교명과 지역이 모두 일치하는 경우만 필터링
          const matched = setshl.filter(item =>
            item.schoolName && item.schoolName.includes(schoolName) &&
            item.area && item.area === "서울특별시"
          );
          if (matched.length > 0) {
            foundMajors.push({
              majorName: data.dataSearch?.content?.[0]?.major,
              department: data.dataSearch?.content?.[0]?.department,
              summary: data.dataSearch?.content?.[0]?.summary,
              schools: matched
            });
          }
        } catch (err) {
          // 무시하고 계속
        }
      }
      if (foundMajors.length === 0) {
        departmentsDiv.innerHTML = "<div class='no-data'>학과 정보가 없습니다.</div>";
        return;
      }
      departmentsDiv.innerHTML = foundMajors.map((major, idx) => `
        <div class="department" onclick="toggleMajorDetail(this)">
          <div class="major-title" style="font-weight:bold; cursor:pointer; color:#007bff;">${major.majorName}</div>
          <div class="major-detail" style="display:none; margin-top:6px;">
            <div class="desc">${major.summary || ''}</div>
            <div class="desc">세부학과: ${major.department || ''}</div>
            <div class="schools">${major.schools.map(s => `<span>${s.schoolName} (${s.majorName})</span>`).join('<br>')}</div>
          </div>
        </div>
      `).join("");
    }

    // 학과 상세 토글 함수 추가
    window.toggleMajorDetail = function(deptElem) {
      const detail = deptElem.querySelector('.major-detail');
      if (!detail) return;
      if (detail.style.display === 'block') {
        detail.style.display = 'none';
      } else {
        detail.style.display = 'block';
      }
    }

    function filterSchools() {
      const keyword = document.getElementById("searchInput").value.trim();
      if (keyword === "") {
        renderSchools(allSchools);
        return;
      }
      const filtered = allSchools.filter(school =>
        school.schoolName.includes(keyword)
      );
      renderSchools(filtered);
    }

    window.onload = async function() {
      await loadSchools();
    };