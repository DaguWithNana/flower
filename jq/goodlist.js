;$(function(){
    $(".categorys-title").mouseenter(function(){
        $(".dropdown-menu").css("display","block");
    })
    $(".dropdown-menu").mouseleave(function(){
        $(this).css("display","none");
    })
    })

    var uid= getCookie("uid");
    // console.log(uid);
    
$.ajax({
    type: "get",
    url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php",
    data:{
        uid:uid
    },
    dataType: "json",
    success: function (response) {
        //console.log(response);
        let data=response.data;
        console.log(data);
            var html='';
            for(var i =0;i<data.length;i++){
                html+=` <li>
                        <a href="../html/detail.html?pid=${data[i].pid}">
                            <img src="${data[i].pimg}" alt="">
                            <div class="product-info">
                               <h5 class="desc-word">${data[i].pdesc}</h5>
                                <p class="desc">${data[i]. pname}</p>
                                <span class="price">${data[i].pprice}</span>
                            </div>
                        </a>
                    </li>
            `
            }
            $('.com-main ul').append(html);
    }
});

//
//<h5 class="desc-word">${response[i].descword}</h5>
