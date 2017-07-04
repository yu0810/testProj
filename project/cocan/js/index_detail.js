/**
 * Created by Administrator on 2017/04/22.
 */
$(function () {
    $.ajax({
        url:"data/index/index3.json",
        type:"get",
        success:function(data){
            var data=data.ms;
            var boss=$(".container")
            var box=$("<ul class='box'></ul>");
            boss.append(box);
            var arrs=[];

            for(i in data){
                var li=$("<li></li>");
                var imgbox=$("<div class='imgbox'></div>");
                var img=$("<img src=''>");
                var texbox=$("<div class='texbox'></div>")
                var tit=$("<div class='tit'></div>")
                var h4=$("<h4></h4>")
                var span=$("<span></span>")
                var p1=$("<p class='p1'></p>")

                var bbox=$("<div class='bbox'></div>")
                var span1=$("<span></span>")
                var buy=$("<a href=''><div class='buy'><p>购票</p></div></a>")

                box.append(li);
                li.append(imgbox);
                imgbox.append(img);
                img.attr({src:data[i].img});
                li.append(texbox);
                texbox.append(tit);
                tit.append(h4);
                h4.html(data[i].t);
                tit.append(span);
                texbox.append(p1);
                p1.html(data[i].commonSpecial);
                texbox.append(bbox);
                bbox.append(span1);
                span1.html(data[i].NearestCinemaCount+"家影院上映"+data[i].NearestShowtimeCount+"场")
                bbox.append(buy);

                arrs.push(data[i].r);
                $.each(arrs,function(){
                    var count=this+'';
                    if(count.length==1){
                        count=this+'.0';
                    }
                    span.html(count);
                })
            }
            var no=$(".box li .tit span");
            for(j in arrs){
                var ss=arrs[j]-0;
                if(arrs[j]<1){
                    no.eq(j).css("display","none");
                }
            }
        }
    })
})