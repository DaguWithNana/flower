// 切换选项卡
$(function(){
    var aBtns = $(".login-table").find("li");
    var aDivs = $(".login-table").find(".login-form");

    aBtns.click(function(){
        aBtns.attr("class", "");
        aDivs.css("display", 'none');
        $(this).attr("class", "active");
        aDivs.eq($(this).index()).css("display", 'block');
    })
})

$(function(){
    $("#dosubmit").click(function(){
        var username =$("#username").val();
        var regu = /^1[3-9]\d{9}$/;
        var reg = new RegExp(regu);
        if(!reg.test(username)){    
            alert("手机号不符合要求，请重新输入")
        }else if(reg.test(username)){
            alert("手机号符合要求");

            $.get("http://jx.xuzhixiang.top/ap/api/login.php",{
            username:$("#username").val(),
            password:$("#pwd").val()
        },(data)=>{
            console.log(data)
            if(data.code == 1){
                location.href ="../html/index.html";
            }else{
                alert(data.msg);
            }
        })

        }
        
    })
})
