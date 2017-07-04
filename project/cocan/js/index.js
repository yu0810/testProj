/**
 * Created by  on 2017/04/20.
 */
$(function () {
    $.ajax({
        url:"data/index/index1.json",
        type:"get",
        success:function (data) {
            var data=data.ms;
            for(i in data){
                $(".topshow ul li img").eq(i).attr({src:data[i].img});
                $(".topshow ul li p").eq(i).html(data[i].t);
            }
        }
    })

    $.ajax({
        url:"data/index/index2.json",
        type:"get",
        success:function (data) {
            var data=data.hotPoints[0];
            for(i in data){
                $(".bottomshow .bottom-title a").html(data.title);
                $(".bottomshow .bottom-title span").html(data.desc);
            }
        }
    })

    $.ajax({
        url:"data/index/index2.json",
        type:"get",
        success:function (data) {
            var data=data.hotPoints[1];
            $(".media-list .media .media-body h4.one").html(data.title);
            $(".media-list .media .media-body p.one").html(data.desc);

        }
    })

    $.ajax({
        url:"data/index/index2.json",
        type:"get",
        success:function (data) {
            var data=data.hotPoints[2];
            $(".media-list .media .media-body h4.two").html(data.title);
            $(".media-list .media .media-body p.two").html(data.desc);
        }
    })

})
