$(document).ready(function () {
  // 햄버거 바 클릭
  $("#hamburger-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: 0,
      },
      300
    );
    // 0.3s = 300
  });
  // 모바일용 메뉴 클릭 시
  $(".mobile-nav .gnb > li > a").click(function () {
    $(this).next(".mobile-nav .depth2").stop().slideToggle();
    // .slideToggle() 토글처럼 클릭하면 아래로 나오고 다시 클릭해야 들어감
  });
  // X 버튼 (메뉴 없애기)
  $("#close-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: "-300px",
      },
      300
    );
    // 0.3s = 300
  });
  // 메뉴에 호버했을 때
  $("nav .gnb").hover(
    function () {
      // 마우스를 호버했을 때
      $("nav .depth2 , .header-bg").stop().slideDown();
    },
    function () {
      // 마우스를 치웠을 때
      $("nav .depth2 , .header-bg").stop().slideUp();
    }
  );
});
