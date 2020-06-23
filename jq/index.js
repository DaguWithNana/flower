;$(function(){
    $(".cake-drapdown-title").mouseenter(function(){
        $(".cake-dropdown-pop").css("display","block");
    })
    $(".cake-dropdown-pop").mouseleave(function(){
        $(this).css("display","none");
    })
    $.ajax({
        type: "get",
        url: "../json/index-kind.json",
        dataType: "json",
        success: function (response) {
            console.log(response);
            var html='';
            for(var i =0;i<response.length;i++){
                html+=`<li>
                            <img src="${response[i].img}" alt="">
                            <p>${response[i].des}</p>
                        </li>`
            }
            $('.fcake-brands ul').append(html);
        }
    });
    $.ajax({
        type: "get",
        url: "../json/index-fangda.json",
        dataType: "json",
        success: function (response) {
            console.log(response);
            var html='';
            for(var i=0;i<response.length;i++){
                html+=`
                    <div class="pro-item">
                    <a href="javascript:;">
                        <div class="img-box"><img src="${response[i].img}" alt=""></div>
                        <div class="pro-content">
                            <p class="pro-title">${response[i].protitle}</p>
                            <p class="pro-price"><span class="price-icon">￥</span><span class="price-num">${response[i].pricenum}</span></p>
                            <p class="pro-sell">${response[i].pricesell}</p>
                        </div>
                    </a>
                </div>
                `
            }
            $('.fl-products-row').append(html);
        }
    });

})           