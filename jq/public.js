function setCookie(name,val, n){
    let oDate =new Date();
    oDate.setDate(oDate.getDate()+n);
    document.cookie =name+"="+escape(val)+";expires="+oDate;
}
function getCookie(name){
    let strCookie =document.cookie;
    let arrCookie = strCookie.split("; ");

    for(let i =0;i< arrCookie.length;i++){
        let arr=arrCookie[i].split("=");
        if(arr[0]==name){
            return unescape(arr[1]);
        }
    }
}
