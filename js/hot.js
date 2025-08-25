window.addEventListener("load", function () {
  const hotData = [
    {
      iud: 1,
      category: "대외활동",
      title: "[고용노동부] 2025 미래내일 일정형 인턴십 참가자 모집",
      day: "D-183",
      img: "images/hot_1.png",
      alt: "공고 썸네일",
    },
    {
      iud: 2,
      category: "공모전",
      title: "[한국언론진흥재단]제6회 뉴스읽기 뉴스일기 공모전",
      day: "D-30",
      img: "images/hot_3.png",
      alt: "공고 썸네일",
    },
    {
      iud: 3,
      category: "공모전",
      title: "[미리캔버스] 여행 계획만 짜고 1천만원 여행 떠나기",
      day: "D-12",
      img: "images/hot_4.png",
      alt: "공고 썸네일",
    },
    {
      iud: 4,
      category: "공모전",
      title: "[(주)패스프리] 패스프리 로고 디자인 공모전",
      day: "D-30",
      img: "images/hot_6.png",
      alt: "공고 썸네일",
    },
    {
      iud: 5,
      category: "공모전",
      title:
        "[제임스 다이슨 재단] 국제 엔지니어링 및 디자인 공모전 제임스 다이슨 어워드 2025",
      day: "D-15",
      img: "images/hot_5.png",
      alt: "공고 썸네일",
    },
    {
      iud: 6,
      category: "공모전",
      title: "[KUDAF] 2025 대한민국 대학생 디지털 광고제",
      day: "D-87",
      img: "images/hot_2.png",
      alt: "공고 썸네일",
    },
    {
      iud: 7,
      category: "공모전",
      title: "[우정산업본부] 2025 대한민국 편지쓰기 공모전",
      day: "D-20",
      img: "images/hot_7.png",
      alt: "공고 썸네일",
    },
    {
      iud: 8,
      category: "공모전",
      title:
        "[과학기술정보통신부] 2025년 연구실 안전 콘텐츠 및 우수사례 공모전",
      day: "D-20",
      img: "images/hot_8.png",
      alt: "공고 썸네일",
    },
  ];
  const wrap = document.querySelector(".hot_notice_wrap");
  let html = ``;

  hotData.forEach((item) => {
    html += `
    <div class="hot_notice_box">
    <div class="notice_item">
    <div class="notice_img">
        <img src="${item.img}" alt="${item.alt}" />
    </div>
    <div class="notice_text">
        <div class="notice_category">${item.category}</div>
        <div class="notice_title">
        ${item.title}
        </div>
        <div class="notice_d_day">${item.day}</div>
    </div>
    </div>
    </div>
    `;
  });

  wrap.innerHTML = html;
});

