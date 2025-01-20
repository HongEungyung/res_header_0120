$(document).ready(function(){
    // 햄버거 바 클릭
    $("#hamburger-menu").click(function(){
        $(".mobile-nav").animate({
            right:0, 
        }, 300)
        // 0.3s = 300
    })
    // X 버튼 (메뉴 없애기)
    $("#close-menu").click(function(){
        $(".mobile-nav").animate({
            right:"-300px", 
        }, 300)
        // 0.3s = 300
    })
})