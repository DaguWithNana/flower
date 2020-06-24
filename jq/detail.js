// 切换选项卡
$(function(){
    var asmall = $(".prol-smallimg").find("img");
    var bigimg = $(".prol-img").find(".swiper");

    asmall.click(function(){
        asmall.attr("class", "");
        bigimg.css("display", 'none');
        $(this).attr("class", "active");
        bigimg.eq($(this).index()).css("display", 'block');
    })
})