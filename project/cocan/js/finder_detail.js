/**
 * Created by penglinhui on 2017/4/21.
 */

$.ajax({
    type:'get',
    url:'data/finder/finder5.json',
    success:function(data){
        var div=$('<div class="content"></div>');
        var h3=$('<h4></h4>');
        var p=$('<p></p>');
        var span=$('<span></span>');
        var div1=$('<div class="ccc"></div>');
        h3.html(data.title);
        h3.css('font-weight','bold');
        div1.html(data.content);
        p.html(data.time);
        p.css({'font-weight':'bold','color':'#999'});
        span.text('Conan  电影');
        span.css('margin-left','4rem');
        $('.container').append(div);
        p.append(span);
        div.append(h3);
        div.append(p);
        div.append(div1);
    },
    error:function(msg){
        console.log(msg);
    }
})











