// 切换选项卡
$(function(){
    var asmall = $(".prol-smallimg").find("img");
    var bigimg = $(".prol-img").find(".swiper");

    asmall.hover(function(){
        asmall.attr("class", "");
        bigimg.css("display", 'none');
        $(this).attr("class", "active").css("border-color","#f60");
        bigimg.eq($(this).index()).css("display", 'block');
    },function(){
        asmall.css("border-color","none")
    })
})