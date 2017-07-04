function sdate(date){
    var num=parseInt(date)*1000;
    var ldate=new Date(num);
    var ndate=new Date();
    var ldate_mor=ldate.getMonth();
    var ndate_mor=ndate.getMonth();
    var ldate_date=ldate.getDate();
    var ndate_date=ndate.getDate();
    var ldate_hour=ldate.getHours();
    var ndate_hour=ndate.getHours();
    var ldate_year=ldate.getFullYear();
    var ndate_year=ndate.getFullYear();
    var cyear=ndate_year-ldate_year;
    if(cyear!=0){
        ndate_mor=ndate_mor+cyear*12;
    }
    var cmor=ndate_mor-ldate_mor;
    var cdate=ndate_date-ldate_date;
    var chour=ndate_hour-ldate_hour;
    if(cmor!=0){
        return cmor+" 个月前"
    }else if(cdate!=0){
        return cdate+" 天前"
    }else{
        return chour+" 小时前"
    }
}

$(function(){
    $.ajax({
        type:'get',
        url:'data/finder/finder1.json',
        success:function(data){
            $('.img1>img').attr('src',data.news.imageUrl);
            $('.img1>p').text(data.news.title);
            $('.img2>img').attr('src',data.review.posterUrl);
            $('.img2>h5').text(data.review.title);
            $('.img3>img').attr('src',data.topList.imageUrl);
            $('.img3>h5').text(data.topList.title);
        },
        error:function(msg){

        }
    });

    $.ajax({
        type:'get',
        url:'data/finder/finder3.json',
        success:function(data){
            var res=data.newsList;
            var div=$('<div class="ban clearfix"></div>');
            $('.container').append(div);
            //console.log(res);
            $.each(res,function(){
                var arr=this.images;
                var h4=$('<h5></h5>');
                var div1=$('<div></div>');
                var div4=$('<div class="div4"></div>')
                var span=$('<span></span>');
                var span1=$('<span>评论 </span>');
                var x=sdate(this.publishTime);
                span.append(x);
                span1.append(this.commentCount);
                if(arr){
                    for(var i=0;i<arr.length;i++){
                    h4.text(arr[0].desc);
                    div.append(h4);
                    var img1=$('<img src="" alt="">');
                    img1.attr('src',arr[i].url1);
                    div1.append(img1);
                    div4.append(div1);
                    div4.append(span);
                    div4.append(span1);
                    div.append(div4);
                    }
                }else{
                    var img2=$('<img src="" alt="" class="pull-left img-thumbnail sec">');
                    img2.attr('src',this.image);
                    var div3=$('<div class="div3 clearfix"></div>');
                    var div2=$('<div class="pull-left div2"></div>')
                    var h5=$('<h5></h5>');
                    h5.text(this.title);
                    var span=$('<span></span>');
                    var span1=$('<span>评论 </span>');
                    var x=sdate(this.publishTime);
                    span.append(x);
                    span1.append(this.commentCount);
                    div2.append(h5);
                    div2.append(span);
                    div2.append(span1);
                    div3.append(img2);
                    div3.append(div2);
                    div.append(div3);
                }
            })
        },
        error:function(msg){

        }
    })


        $.ajax({
            type:'get',
            url:'data/finder/finder2.json',
            success:function(data){
                var res=data.newsList;
                //console.log(res);
                var div1=$('<div class="thum"></div>');
                var ul=$('<ul></ul>');
                $('.container').append(div1);
                div1.append(ul);
                $.each(res,function(){
                    var li=$('<li class="clearfix"></li>');
                    ul.append(li);
                    var img1=$('<img src="" alt="" class="pull-left img-thumbnail">');
                    var div2=$('<div class="pull-left"></div>');
                    img1.attr('src',this.image);
                    li.append(img1);
                    li.append(div2);
                    var h4=$('<h5></h5>');
                    var span=$('<span></span>');
                    var span1=$('<span>评论 </span>')
                    h4.html(this.title);
                    div2.append(h4);
                    div2.append(span);
                    div2.append(span1);
                    var x=sdate(this.publishTime);
                    span.append(x);
                    span1.append(this.commentCount);
                })
            }
        })


   /* $.ajax({
        type:'get',
        url:'data/finder/finder4.json',
        success:function(data){
            console.log(data.newsList);
        },
        error:function(msg){
            console.log(msg);
        }
    })
*/

    $('.container').click(function () {
        window.location.replace("finder_detail.html");
    })




})










