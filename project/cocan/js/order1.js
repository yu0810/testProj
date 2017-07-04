/**
 * Created by Administrator on 2017/4/21.
 */
function show() {
    $.ajax({
        url:"data/order/order1.json",
        type:"get",
        success:function (data) {
            var ul=$("<ul></ul>")
            for(i in data){
                var li=$("<li></li>")
                var order=$("<b class='tit'></b>");
                var b1=$("<b class='price'>￥</b>")
                var span1=$("<span>起</span>")
                var span=$("<span></span>")
                var a=$("<a></a>")
                a.attr("href","order_detail.html?"+i)
                var p=$("<p class='address'></p>")
                a.append(order);
                span.appendTo(b1);
                span1.appendTo(b1);
                b1.appendTo(a);
                a.append(p)
                li.append(a)
                ul.append(li);
                order.html(data[i].cinameName);
                p.html(data[i].address);
                span.html(data[i].minPrice/100);
                $(".order_content").append(ul);

                for(j in data[i].feature){
                    if(data[i].feature[j]=="1"){
                        if(j=="has3D"){
                            var img=$("<img src='images/order/5.png'>")
                            img.appendTo(a)
                        }
                        if(j=="hasWifi"){
                            var img=$("<img src='images/order/10.png'>")
                            img.appendTo(a)
                        }
                        if(j=="hasIMAX"){
                            var img=$("<img src='images/order/4.png'>")
                            img.appendTo(a)
                        }
                        if(j=="hasPark"){
                            var img=$("<img src='images/order/2.png'>")
                            img.appendTo(a)
                        }
                        if(j=="hasVIP"){
                            var img=$("<img src='images/order/6.png'>")
                            img.appendTo(a)
                        }
                        if(j=="hasServiceTicket"){
                            var img=$("<img src='images/order/1.png'>")
                            img.appendTo(a)
                        }
                    }else {
                    }
                }
            }

        }
    })
}
show()
