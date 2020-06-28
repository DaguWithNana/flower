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

var uid = getCookie("uid")
var pid= location.search.split("=")[1];
console.log(pid);
$.ajax({
    type: "get",
    url: "http://jx.xuzhixiang.top/ap/api/detail.php",
    data: {
        id:pid,
    },
    dataType: "json",
    success: function (response) {
        // console.log(response);           
        let data=response.data;    
        console.log(data);
           var  html=` 
           <div class="detail-prol">
           <div class="prol-img">
               <div class="prol-bigimg">
                   <div class="swiper" style="display: block;"><img src="${data.pimg}" alt=""></div>
                   <div class="swiper"><img src="${data.pimg}" alt=""></div>
                   <div class="swiper"><img src="${data.pimg}" alt=""></div>
                   <div class="swiper"><img src="${data.pimg}" alt=""></div>
                  
               </div>
               <div class="prol-smallimg">
                   <img src="../images/smallimg1.jpg" alt="" class="active">
                   <img src="../images/smallimg2.jpg" alt="">
                   <img src="../images/smallimg3.jpg" alt="">
                   <img src="../images/smallimg4.jpg" alt="">
               </div>
           </div>
       </div>
       <div class="detail-pror">
           <div class="title">
               <h3 class="product-title">${data.pdesc}</h3>
               <p class="product-subtitle">${data.pname}</p>

                   <p style="margin:6px 0 0;font-size:12px;">已售 <span style="color: #FF734C;font-weight:bold;">666</span> 件 </p>
           </div>
           <div class="attribute">
               <dl>
                   <dt>类 别：</dt>
                   <dd>礼品-永生花 编 号：1073264</dd>
               </dl>
               <dl>
                   <dt>材 料：</dt>
                   <dd>哥伦比亚进口玫瑰、绣球，苔藓，满天星等、小鹿公仔，经花艺师手工精制而成，再搭配温馨小夜灯，适合生日、周年纪念日等特别的日子送女朋友、妻子之优选！</dd>
               </dl>
               <dl>
                   <dt>包 装：</dt>
                   <dd>精致永生花礼盒</dd>
               </dl>
                   <dl>
                       <dt>备 注：</dt>
                       <dd>鹿代表爱情坚贞，寓意美满，守护爱情，一路(鹿)有你陪伴</dd>
                   </dl>
                                   <dl>
                       <dt>附 送：</dt>
                       <dd>下单填写留言，即免费赠送精美贺卡！</dd>
                   </dl>
               <dl>
                   <dt>配 送：</dt>
                   <dd>
顺丰快递深圳发货, 全国可达, 包邮!                    </dd>
               </dl>
           </div>
           <div class="detailPrice">
               <div class="price-original">  市场价：￥398</div>
               <div class="price-sell">
                   花礼价：
                   <strong>
                       <em class="price-sign">￥</em>
                       <em class="price-num">288</em>
                   </strong>
               </div>
           </div>
           <!--优惠券-->
           
           <div class="btn-buy">
               <a   class="btn btn-primary btn-lg btn-addcart" id="Btn_AddToCart">加入购物车</a>
               <a  class="btn btn-primary btn-lg" id="Btn_SoonBuy">立即购买</a>
               <a  class="btn btn-link" id="Btn_GuanZhu"><span class="ico ico-heart"></span>收 藏</a>
           </div>

       </div>
            `
         
            $('.detail-pro').append(html);

            // 加入购物车

            $("#Btn_AddToCart").click(function(){

                $.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{
                    uid:uid,
                    pid:pid,
                    pnum:1
                },function(data){
                    console.log(data)
                    location.href= "../html/shopcar.html";
                })

              
            })
        }
   
});
       
