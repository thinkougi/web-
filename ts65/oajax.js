function ajax(method,url,fnsucc,fnfail){
    var oajax = new XMLHttpRequest()||new ActiveXObject('Microsoft.XHTML');
    oajax.open(method,url,true);
    oajax.send();
    oajax.onreadystatechange=function(){
        if(oajax.readyState===4){
            if(oajax.status===200){
                fnsucc(oajax.responseText);
            }else{
                //alert(oajax.status);
                if(fnfail){
                    fnfail();
                }
            }
        }
    }
}