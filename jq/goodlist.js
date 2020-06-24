;$(function(){
    $(".categorys-title").mouseenter(function(){
        $(".dropdown-menu").css("display","block");
    })
    $(".dropdown-menu").mouseleave(function(){
        $(this).css("display","none");
    })
    })

$.ajax({
    type: "get",
    url: "../json/goodslist.json",
    dataType: "json",
    success: function (response) {
        console.log(response);
            var html='';
            for(var i =0;i<response.length;i++){
                html+=` <li>
                        <a href="">
                            <img src="${response[i].img}" alt="">
                            <div class="product-info">
                                <p class="info-word">${response[i].infoWord}</p>
                                <h5 class="desc-word">${response[i].descword}</h5>
                                <p class="desc">${response[i].desc}</p>
                                <span class="price">${response[i].price}</span>
                            </div>
                        </a>
                    </li>
            `
            }
            $('.com-main ul').append(html);
    }
});