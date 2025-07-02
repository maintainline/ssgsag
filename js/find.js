window.addEventListener("load", function () {
  const findData = [
    {
      iud: 1,
      img: "images/find_1.png",
      alt: "공고이미지1",
      category: "교육/강연",
      title: "[한경닷컴] 실시간 데이터 처리 자바 웹 서비스 개발과정(채용지원)",
      day: "D-1",
    },
    {
      iud: 2,
      img: "images/find_2.png",
      alt: "공고이미지2",
      category: "인턴십",
      title: "[그립컴퍼니] 중국 콘텐츠·이커머스 리서치 인턴(인턴/3개월)",
      day: "D-29",
    },
    {
      iud: 3,
      img: "images/find_2.png",
      alt: "공고이미지3",
      category: "인턴십",
      title: "[그립컴퍼니] 콘텐츠 디자이너 인턴 (인턴/6개월)",
      day: "D-29",
    },
    {
      iud: 4,
      img: "images/find_2.png",
      alt: "공고이미지4",
      category: "인턴십",
      title: "[그립컴퍼니] CEO Staff 전략 인턴(인턴/6개월)",
      day: "D-29",
    },
    {
      iud: 5,
      img: "images/find_3.png",
      alt: "공고이미지 5",
      category: "인턴십",
      title: "[SNOW] 8월 전분야 체험형 인턴",
      day: "D-4",
    },
    {
      iud: 6,
      img: "images/find_4.png",
      alt: "공고이미지6",
      category: "인턴십",
      title: "[Tridge] Motion Graphic Designer",
      day: "D-12",
    },
    {
      iud: 7,
      img: "images/find_5.png",
      alt: "공고이미지7",
      category: "인턴십",
      title: "[패스캠퍼스][전환형 인턴] HR 담당자 (-7.7)",
      day: "D-5",
    },
    {
      iud: 8,
      img: "images/find_6.png",
      alt: "공고이미지8",
      category: "인턴십",
      title:
        "[NAVER Cloud] 데이터 플랫폼서비스 사용자 가이드 작성(체험형 인턴)",
      day: "D-5",
    },
  ];

  const wrap = document.querySelector(".find_notice_wrap");
  let html = ``;

  findData.forEach((item) => {
    html += `
<div class="find_notice_box">
<div class="find_item">
    <div class="find_img">
    <img src="${item.img}" alt="${item.alt}" />
    </div>
    <div class="find_text">
    <div class="find_category">${item.category}</div>
    <div class="find_title">
        ${item.title}
    </div>
    <div class="find_d_day">${item.day}</div>
    </div>
</div>
</div>
`;
  });

  wrap.innerHTML = html;
});
