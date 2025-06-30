window.addEventListener("load", function () {
  const cockApiData = [
    {
      uid: 1,
      link: "#",
      img: "images/cock_img1.png",
      alt: "콕이미지1",
      act: "공모전",
      title: "[LX판토스] NEXT ESG 미래를 설계하는 아이디어 챌린지",
      day: "D-2",
    },
    {
      uid: 2,
      link: "#",
      img: "images/cock_img2.png",
      alt: "콕이미지2",
      act: "공모전",
      title: "[한국은행] 2025 한국은행 화폐사랑 콘텐츠 공모전",
      day: "D-51",
    },
    {
      uid: 3,
      link: "#",
      img: "images/cock_img3.png",
      alt: "콕이미지3",
      act: "대외활동",
      title: "[SK그룹] SK Careers Editor 22기 모집(~25.07.06)",
      day: "D-6",
    },
    {
      uid: 4,
      link: "#",
      img: "images/cock_img4.png",
      alt: "콕이미지4",
      act: "인턴십",
      title: "[SM엔터테인먼트] HR 채용운영 인턴십 (인턴) 채용",
      day: "D-2",
    },
  ];

  let html = ``;

  for (let i = 0; i < cockApiData.length; i++) {
    let tag = `
   <div class="cock_item">
      <div class="cock_item_box">
        <a href="${cockApiData[i].link}">
          <div class="cock_item_preview">
            <img src="${cockApiData[i].img}" alt="${cockApiData[i].alt}" />
          </div>
          <div class="cock_text">
            <div class="cock_act">${cockApiData[i].act}</div>
            <div class="cock_title">
              ${cockApiData[i].title}
            </div>
            <div class="cock_day"><b>${cockApiData[i].day}</b></div>
          </div>
        </a>
      </div>
    </div>
    `;
    html += tag;
  }

  const cockList = document.querySelector(".cock_list");

  if (cockList) {
    cockList.innerHTML = html;
  } else {
    console.error("⚠️ .cock_list 요소를 찾을 수 없습니다.");
  }
});
