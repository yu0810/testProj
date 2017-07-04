/**
 * Created by 乐 on 2017/4/22.
 */
$(function(){
    var item=1;
    $('.content').dropload({
        scrollArea : window,
        loadDownFn : function(me){
            $.ajax({
                type: "get",
                url: "./data/store/list"+item+".json",
                success: function (data) {
                    var dat = data.content.goods.goodsList;
                    // console.log(dat);
                    var $_ul=$("<ul></ul>");
                    $(".list").append($_ul);
                    $.each(dat,function () {
                        var $_lis=$("<li></li>");
                        var $_img=$("<img>");
                        var $_p=$("<p></p>");
                        var $_span=$("<span>￥1150</span>");

                        var $_image=this.imageSrc;
                        var $_name=this.name;

                        $_img.attr("src",$_image);
                        $_p.html($_name);

                        $_lis.append($_img);
                        $_lis.append($_p);
                        $_lis.append($_span);
                        $_ul.append($_lis);

                        me.resetload();
                    })
                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
            // item++;
            // if(item==3){
            //     item=1;
            // }
        }
    });
});