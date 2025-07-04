window.addEventListener("DOMContentLoaded", () => {
  const apiData = [
    {
      id: 1,
      link: "#",
      image: "images/banner_1.png",
      alt: "배너 1",
    },
    {
      id: 2,
      link: "#",
      image: "images/banner_2.png",
      alt: "배너 2",
    },
    {
      id: 3,
      link: "#",
      image: "images/banner_3.png",
      alt: "배너 3",
    },
    {
      id: 4,
      link: "#",
      image: "images/banner_4.png",
      alt: "배너 4",
    },
    {
      id: 1,
      link: "#",
      image: "images/banner_1.png",
      alt: "배너 1",
    },
    {
      id: 2,
      link: "#",
      image: "images/banner_2.png",
      alt: "배너 2",
    },
    {
      id: 3,
      link: "#",
      image: "images/banner_3.png",
      alt: "배너 3",
    },
    {
      id: 4,
      link: "#",
      image: "images/banner_4.png",
      alt: "배너 4",
    },
  ];

  const total = apiData.length;
  const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");
  const banner = document.querySelector(".sw_banner");

  let htmlTag = "";
  function makeHtml() {
    for (let i = 0; i < total; i++) {
      htmlTag =
        htmlTag +
        `
 <div class="swiper-slide">
    <a href="${apiData[i].link}" class="banner_slide_item">
    <img src="${apiData[i].image}" alt="${apiData[i].alt}" />
    </a>
</div>
`;
    }
    bannerPos.innerHTML = htmlTag;
  }

  function makeSlide() {
    const swiper = new Swiper(".sw_banner", {
      slidesPerView: "auto",
      spaceBetween: 80,
      // 슬라이드 중앙에 위치하게
      centeredSlides: true,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner_slide_next",
        prevEl: ".banner_slide_prev",
      },
      pagination: {
        el: ".banner_slide_pg",
        clickable: true,
      },
    });
    return swiper;
  }
  makeHtml();
  const swiper = makeSlide();
});
