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
  ];

  let html = ``;
  html = ``;
  for (let i = 0; i < cockApiData.length; i++) {
    let tag = `
 <div class="cock_item_box">
    <div class="cock_item_preview">
        <a href="${cockApiData[i].link}">
        <img src="${cockApiData[i].img}" alt="${cockApiData[i].alt}" />
        </a>
    </div>
    <div class="cock_text">
        <div class="cock_act">${cockApiData[i].act}</div>
        <div class="cock_title">
        ${cockApiData[i].title}
        </div>
        <div class="cock_day"><b>${cockApiData[i].day}</b></div>
    </div>
    </div>
    `;
    html = html + tag;
  }

  const cockPos = document.querySelector(
    ".cock_item_preview .cock_item_preview"
  );
  cockPos.innerHTML = html;
});
