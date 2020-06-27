
var uid= getCookie("uid");
$.ajax({
    type: "get",
    url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
    data:  {
        id:uid,
    },
    dataType: "json",
    success: function (response) {
        
        let data=response.data;    
        console.log(data);
        for(var i =0;i<data.length;i++){
            var html ="";
            html=`
            <ul class="order-list" id="${data[i].uid}">  
            <li class="selecter">
                <i class="icon-select active">
                    <input type="checkbox" name="productCode" value=""  class="ck"/>
                </i>
            </li>
            <li class="img-box"><a href="/product/1073264.html" target="_blank"><img src="${data[i].pimg}"></a></li>
            <li class="product">
                        <a href="/product/1073264.html" target="_blank">
                            <span class="product-title" style="">[礼品]${data[i].pdesc}</span>
                            <span class="feature">顺丰快递深圳发货</span>
                        </a>
             </li>
    
            <li class="market-price">
                <span class="price-sign">&yen;</span>
                <span class="price-num">
                    398
                </span>
            </li>
            <li class="order-price">
                <span class="price-num">
                    ${data[i].pprice}
                </span>
            </li>
            <li class="num">
                <div class="input-num">
                    <span class="minus">-</span>
                    <input type="text" class="form-control pnum" name="cpsl" value="${data[i].pnum}">
                    <span class="plus">+</span>
                </div>
            </li>
            <li class="operate">
                <a class="delBtn" data-id="${data[i].pid}">删除</a>
                <br>
                <a href="javascript:void(0)" class="collectBtn">移到我的收藏</a>
            </li>
            
        </ul>
            `
            $('.bd').append(html);
        }

            // js单选框
            //给每一个复选框加一个点击计算事件
            let acks = document.querySelectorAll(".ck");
            for(let i = 0;i<acks.length;i++){
                acks[i].onclick=()=>{
                    money();
                    // var count = 0;
                    // for(let j =0;j<acks.length;j++){
                    //     if(acks[j].checked){
                    //         count++;
                    //     }  
                    // }
                    // console.log(count);
                    // if(acks[i].checked){
                    //     totalPrice += data[i].pprice * Number(pnum.value);       
                    // }
                    // console.log(totalPrice)
                }
                }  
            function money(){
                let acks = document.querySelectorAll(".ck");
                let oTotalPrice = document.getElementById("totalMoney");
                let totalPrice =0;
                var count = 0;
               
                for(let j =0;j<acks.length;j++){
                    if(acks[j].checked){
                        count++;
                        totalPrice += data[j].pprice * $('.pnum').eq(j).val(); 
                    } 
                   
                }
                console.log(count,totalPrice)
                oTotalPrice.innerHTML=totalPrice;
                }
                // let acks = document.querySelectorAll(".ck");
                // let oTotalPrice = document.getElementById("totalMoney");
                // let totalPrice =0;
                // let pnum = document.querySelector(".pnum")
                //    // js单选框
                //    for(let i = 0;i<acks.length;i++){
                //     acks[i].onclick=()=>{
                //         var count = 0;
                //         for(let j =0;j<acks.length;j++){
                //             if(acks[j].checked){
                //                 count++;
                //             }  
                //         }
                //         console.log(count);
                //        // money()
                      
                //     }
                //     }   
         // 加减数量
         let oMinus = document.querySelectorAll(".minus");
         let oPlus = document.querySelectorAll(".plus");
         let oPnum = document.querySelectorAll(".pnum");
         for(let i =0;i<oMinus.length;i++){
            oMinus[i].onclick = function () {
                console.log(111)
                if (oPnum[i].value <= 1) {
                  oPnum[i].value = 1;
                  return;
                }
                oPnum[i].value--;
                money();
              };
            oPlus[i].onclick = function () {
                console.log(222)
                oPnum[i].value++;
                money();
              }     
          }
        let token = getCookie("token")
       for(let i =0;i<$(".delBtn").length;i++){
            console.log($(".delBtn").length)
            $(".delBtn").eq(i).click(function(){
                var that=$(this);
                console.log(222);
                let pid =this.getAttribute("data-id")
                console.log(pid)
                $.ajax({
                    type: "get",
                    url: "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
                    data: {
                        uid:uid,
                        token:token,
                        pid:pid 
                    },
                    dataType: "json",
                    success: function (response) {
                        console.log(response)
                        alert(response.msg)  
                        console.log(that.parent().parent()) 
                    
                        $(".delBtn").eq(i).parent().parent().remove()
                        
                    }
                });
            })
        }   

    }
    
})


 // 删除商品

