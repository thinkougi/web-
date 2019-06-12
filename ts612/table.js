(function ($) {
    $.fn.table=function (a,b) {
        //$(this).append("<table><tr>");
        $(this).append("<tr>");
        let l=a.length;
        for(let i=0;i<l;i++){
            $("tr").append("<th>"+a[i]+"</th>");
        }
        $(this).append("</tr>");
        let t=b.length;
        for(let i=0;i<t;i++){
            $(this).append("<tr>");
           // for(let j=0;j<l;j++){
                $(this).append("<td>"+b[i].name+"</td>");
            $(this).append("<td>"+b[i].id+"</td>");
            $(this).append("<td>"+b[i].score+"</td>");

            //}
            $(this).append("</tr>");
        }
        //$(this).append("</table>");
    }
}(jQuery));