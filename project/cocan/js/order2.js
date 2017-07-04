/**
 * Created by Administrator on 2017/4/26 0026.
 */
(function () {
    var $detail=window.location.search.substr(1)
    $index=$detail-0+1;
    $.ajax({
        url:"data/order/detail"+$index+".json",
        type:"get",
        success:function (data) {

            var o_ul=$("<ul class='o_ul'></ul>")
            var o_li1=$("<li class='o_li1'></li>")
            var o_h2=$("<h2 class='o_h2'></h2>")
            var o_li2=$("<li class='o_li2'></li>")
            var o_i1=$("<i class='glyphicon glyphicon-earphone'></i>")
            var o_i2=$("<i class='glyphicon glyphicon-record'></i>")
            $(".con").append(o_ul);
            o_ul.append(o_li1);
            o_ul.append(o_li2);
            o_li1.append(o_h2);
            o_li2.append(o_i1);
            o_li2.append(o_i2);
            o_h2.html(data.cinema.name);
            for(j in data.cinema.feature){
                if(data.cinema.feature[j]=="1"){
                    if(j=="has3D"){
                        var img=$("<img src='images/order/5.png'>")
                        img.appendTo(o_li1)
                    }
                    if(j=="hasWifi"){
                        var img=$("<img src='images/order/10.png'>")
                        img.appendTo(o_li1)
                    }
                    if(j=="hasIMAX"){
                        var img=$("<img src='images/order/4.png'>")
                        img.appendTo(o_li1)
                    }
                    if(j=="hasPark"){
                        var img=$("<img src='images/order/2.png'>")
                        img.appendTo(o_li1)
                    }
                    if(j=="hasVIP"){
                        var img=$("<img src='images/order/6.png'>")
                        img.appendTo(o_li1)
                    }
                    if(j=="hasServiceTicket"){
                        var img=$("<img src='images/order/1.png'>")
                        img.appendTo(o_li1)
                    }
                }else {
                }
            }
            for(var n in data.movies){
                var o_div3=$("<div></div>");
                var o_img1=$("<img>");
                o_img1.attr("src",data.movies[n].img);
                $(".banner").append(o_div3);
                var o_tit=$("<h3></h3>");
                o_tit.html(data.movies[n].title);
                o_div3.append(o_img1);
                o_div3.append(o_tit);

            }

        }

    })
    $.ajax({
        url:"data/order/order3.json",
        type:"get",
        success:function (res) {
            for(m in res.s){
                var m_div3=$("<div class='list_box'></div>")
                var m_div=$("<div class='time'></div>");
                var m_div1=$("<div class='place'></div>");
                var m_div2=$("<div class='price'></div>");
                var m_span1=$("<span class='b1'></span>");
                var m_span2=$("<span class='b2'></span>")
                var m_span3=$("<span class='b3'></span>")
                var m_span4=$("<span class='b4'></span>")
                var m_span5=$("<span class='b5'></span>")
                var m_span6=$("<span class='b6'></span>")
                var m_div4=$("<div class='order_btn'></div>")
                m_div.append(m_span1);
                m_div.append(m_span2);
                m_span1.html((m-0+9)+":"+"30")
                m_span2.html((m-0+10)+":"+(30+20)+"散场")
                m_div1.append(m_span3);
                m_div1.append(m_span4);
                m_span3.html(res.s[m].versionDesc+"/"+res.s[m].language);
                m_span4.html(res.s[m].hall);
                m_div3.append(m_div);
                m_div3.append(m_div1);
                m_div3.append(m_div2);
                m_div2.append(m_span5);
                m_div2.append(m_span6);
                m_div3.append(m_div4);
                m_div4.html("购票")
                m_span5.html("￥"+res.s[m].price);
                m_span6.html("￥"+(res.s[m].price-0+5));

                $(".border_list").append(m_div3);

            }
        }
    })
})()
