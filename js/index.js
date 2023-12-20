$(function () {
  const overlayOn = () => {
    // $(".overlay").on("scroll touchmove mousewheel", function (e) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return false;
    // });
    $(".overlay").addClass("active");
    $("body").addClass("off");
  };
  const overlayOff = () => {
    // $(".overlay").off("scroll touchmove mousewheel");
    $(".overlay").removeClass("active");
    $("body").removeClass("off");
  };
  const hambergerOn = () => {
    $(".hamberger_btn").addClass("on");
    setTimeout(() => {
      $(".hamberger_btn").addClass("on2");
    }, 300);
  };
  const hambergerOff = () => {
    $(".hamberger_btn").removeClass("on2");
    setTimeout(() => {
      $(".hamberger_btn").removeClass("on");
    }, 200);
  };
  const fixedBtnOn = () => {
    $("footer .fixed_box").removeClass("on");
  };
  const fixedBtnOff = () => {
    $("footer .fixed_box").addClass("on");
  };
  // ------------- find_etf (S) --------------
  $(".find_btn").click(function () {
    if ($(".find_etf_box").hasClass("active")) {
      $(".find_etf_box").removeClass("active");
    } else {
      $(".find_etf_box").addClass("active");
    }
  });
  $(document).on("click", function (e) {
    if (
      !$(".find_btn").is(e.target) &&
      $(".find_etf_box").has(e.target).length === 0
    ) {
      $(".find_etf_box").removeClass("active");
    }

    if (
      !$(".category_btn").is(e.target) &&
      $(".category_box").has(e.target).length === 0
    ) {
      $(".category_box").removeClass("active");
      $(".overlay2").removeClass("active");
      $(".overlay2").off("scroll touchmove mousewheel");
    }
  });

  $(".menu_tab .find_depth1 > li").click(function () {
    const menuTabIndex = $(this).index();

    $(this).siblings("li").removeClass("active");
    $(this).addClass("active");

    $(".menu_depth2 > .find_depth2")
      .removeClass("active")
      .children("li")
      .removeClass("active");
    $(".menu_depth2 > .find_depth2")
      .eq(menuTabIndex)
      .addClass("active")
      .children("li")
      .eq(0)
      .addClass("active");

    $(".menu_depth3 > .popup_menu")
      .removeClass("active")
      .children(".find_depth3")
      .removeClass("active");
    $(".menu_depth3 > .popup_menu")
      .eq(menuTabIndex)
      .addClass("active")
      .children(".find_depth3")
      .eq(0)
      .addClass("active");
  });

  $(".menu_depth2 > .find_depth2 > li").click(function () {
    let menuTabIndex2 = $(this).index();
    let parentIndex = $(".find_depth1 > li.active").index();

    $(this).siblings("li").removeClass("active");
    $(this).addClass("active");

    $(".menu_depth3 > .popup_menu > ul").removeClass("active");
    $(".menu_depth3 > .popup_menu")
      .eq(parentIndex)
      .find("ul")
      .eq(menuTabIndex2)
      .addClass("active");
  });

  // ------------- find_etf (E) --------------
  // ------------- search_box (S) --------------
  $(".search_box > .search_btn").click(function () {
    $(".search_box > div").addClass("on");
    overlayOn();
    hambergerOn();
    fixedBtnOff();
  });

  $(".hamberger_btn").click(() => {
    if ($(".search_box > div").hasClass("on")) {
      $(".search_box > div").removeClass("on");
      overlayOff();
      hambergerOff();
      fixedBtnOn();
    } else {
      // ------------- all_menu (S) --------------
      if ($(".all_menu_box").hasClass("active")) {
        $(".all_menu_box").removeClass("active");
        $(".nav_depth1").removeClass("active");
        $(".search_btn").removeClass("active");
        hambergerOff();
        fixedBtnOn();
      } else {
        $(".all_menu_box").addClass("active");
        $(".nav_depth1").addClass("active");
        $(".search_btn").addClass("active");
        hambergerOn();
        fixedBtnOff();
      }
    }
    // ------------- all_menu (E) --------------
  });
  // --category_box--
  $(".category_btn").click(() => {
    $(".category_box").addClass("active");
    $(".overlay2").addClass("active");
    overlayOn();
  });
  $(".category_box .close_btn").click(() => {
    $(".category_box").removeClass("active");
    $(".overlay2").removeClass("active");
    overlayOff();
  });
  // ------------- search_box (E) --------------
  // ------------- scroll_slider (S) --------------
  const scrollSwiper = new Swiper(".scroll_slider .swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    mousewheel: true,
    on: {
      transitionEnd: function () {
        // 현재 활성화된 슬라이드의 인덱스
        let currentSlideIndex = this.activeIndex;

        // 전체 슬라이드의 개수
        let totalSlides = this.slides.length;

        // 만약 현재 슬라이드가 마지막 슬라이드라면 페이지 스크롤을 활성화
        if (currentSlideIndex === totalSlides - 3) {
          enablePageScroll();
        } else {
          // 마지막 슬라이드가 아니라면 페이지 스크롤 비활성화
          disablePageScroll();
        }
      },
    },
  });
  function enablePageScroll() {
    // 페이지 스크롤을 활성화하는 로직을 추가
    // 예를 들어, window에 대한 이벤트 리스너를 추가하여 스크롤이 가능하도록 함
    $(window).on("mousewheel", handlePageScroll);
  }

  function disablePageScroll() {
    // 페이지 스크롤을 비활성화하는 로직을 추가
    // 예를 들어, window에 대한 이벤트 리스너를 제거하여 스크롤이 불가능하도록 함
    $(window).off("mousewheel", handlePageScroll);
  }

  function handlePageScroll(e) {
    let delta = e.originalEvent.wheelDelta / 120 || -e.originalEvent.deltaY / 3;

    if (delta < 0) {
      window.scrollBy(0, 100); // 페이지 아래로 스크롤
    } else {
      window.scrollBy(0, -100); // 페이지 위로 스크롤
    }
  }
  // ------------- scroll_slider (E) --------------
  $(document).ready(function () {
    // 클릭 가능한 상태인지 여부를 나타내는 플래그
    let isClickable = true;

    // ------------- tab_menu1 (S) --------------`
    $(".main_tab1 .tab_btn li").click(function () {
      // 클릭 가능한 상태일 때만 이벤트 처리
      if (isClickable) {
        // 클릭한 탭에 'active' 클래스 추가
        $(this).addClass("active").siblings().removeClass("active");

        let orangePosition = $(this).position().left;

        $(".main_tab1 .tab_btn > span").css("left", orangePosition);

        // 클릭한 탭의 인덱스 가져오기
        let tabIndex = $(this).index();

        // 해당 인덱스에 해당하는 배경 탭에 'active' 클래스 추가
        $(".main_tab1 .bg li")
          .eq(tabIndex)
          .addClass("active")
          .siblings()
          .removeClass("active");

        // 해당 인덱스에 해당하는 타이틀에 'active' 클래스 추가
        $(".main_tab1 .title li")
          .eq(tabIndex)
          .addClass("active")
          .siblings()
          .removeClass("active");

        // 해당 인덱스에 해당하는 콘텐츠 표시 및 클래스 조작
        $(".main_tab1 .content > ul")
          .eq(tabIndex)
          .addClass("active1")
          .siblings()
          .removeClass("active2");

        setTimeout(() => {
          $(".main_tab1 .content > ul")
            .eq(tabIndex)
            .addClass("active2")
            .siblings()
            .removeClass("active1");

          // 클릭 가능 상태로 변경
          isClickable = true;
        }, 800);

        // 클릭 불가능 상태로 변경
        isClickable = false;
      }
      // ------------- tab_menu1 (E) --------------
    });
    // ------------- tab_menu2 (S) --------------
    $(".main_tab2 .tab_btn li").click(function () {
      // 클릭 가능한 상태일 때만 이벤트 처리
      if (isClickable) {
        // 클릭한 탭에 'active' 클래스 추가
        $(this).addClass("active").siblings().removeClass("active");
        $(".main_tab2 .title >li.active .months > ul").removeClass("active");
        let orangePosition = $(this).position().left;
        let orangeWidth = $(this).width();

        $(".main_tab2 .tab_btn > span").css({
          left: orangePosition,
          width: orangeWidth + 60 + "px",
        });

        // 클릭한 탭의 인덱스 가져오기
        let tabIndex2 = $(this).index();

        // 해당 인덱스에 해당하는 타이틀에 'active' 클래스 추가
        $(".main_tab2 .title > li")
          .eq(tabIndex2)
          .addClass("active")
          .siblings()
          .removeClass("active");

        // 해당 인덱스에 해당하는 콘텐츠 표시 및 클래스 조작
        $(".main_tab2 .content > div")
          .eq(tabIndex2)
          .addClass("active1")
          .siblings()
          .removeClass("active2");

        setTimeout(() => {
          $(".main_tab2 .content > div")
            .eq(tabIndex2)
            .addClass("active2")
            .siblings()
            .removeClass("active1")
            .children("ul")
            .eq(0)
            .addClass("active")
            .siblings()
            .removeClass("active");

          // 클릭 가능 상태로 변경
          isClickable = true;
        }, 800);

        // 클릭 불가능 상태로 변경
        isClickable = false;
      }
    });
    $(".up_btn").click(() => {
      $("html").animate({ scrollTop: 0 }, 500);
    });
  });
  const mainTabSwiper = new Swiper(".main_tab1 .swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });
  $(".main_tab2 .months >span").click(() => {
    if ($(".main_tab2 .title >li.active .months > ul").hasClass("active")) {
      $(".main_tab2 .title >li.active .months > ul").removeClass("active");
    } else {
      $(".main_tab2 .title >li.active .months > ul").addClass("active");
    }
  });
  $(".main_tab2 .months >ul >li").click(function () {
    let tabIndex3 = $(this).index();
    $(".main_tab2 .tab_content.active1 > ul")
      .eq(tabIndex3)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(".main_tab2 .heart_btn").click(function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });
  // ------------- tab_menu2 (E) --------------
  // ------------- footer_popup (S) --------------
  $(".pages_box >button").click(() => {
    $(".homepage_box").addClass("active");
    overlayOn();
    fixedBtnOff();
  });
  $(".pages_box .close_btn").click(() => {
    $(".homepage_box").removeClass("active");
    overlayOff();
    fixedBtnOn();
  });
  $("footer .right >button").click(function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $("footer .global_etfs").removeClass("active");
    } else {
      $(this).addClass("on");
      $("footer .global_etfs").addClass("active");
    }
  });
  // ------------- footer_popup (E) --------------
});
$(window).scroll(function () {
  if ($(this).scrollTop() <= 50) {
    $(".up_btn").removeClass("is-up");
  } else {
    $(".up_btn").addClass("is-up");
  }
});
$(window).scroll(function () {
  if ($(this).scrollTop() <= 2200) {
    $(".fixed_box").removeClass("on");
  } else {
    $(".fixed_box").addClass("on");
  }
});
// $(window).scroll(function () {
//   var scrollValue = $(document).scrollTop();
//   console.log(scrollValue);
// });
