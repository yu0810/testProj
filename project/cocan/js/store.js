/**
 * Created by 乐 on 2017/4/20.
 */
//广告  banner
$.ajax({
    type: "get",
    url: "./data/store/top.json",
    success: function (data) {
        var dat = data.scrollImg;
        $.each(dat, function () {
            var banner = this.image;
            var box = $("<div class='banner'></div>")
            var img = $("<img>");
            img.attr("src", banner);
            $(".banner_box").append(box);
            box.append(img);
        })
    }
})
//分类
$.ajax({
    type: "get",
    url: "./data/store/top.json",
    success: function (data) {
        var dat = data.navigatorIcon;
        for (var i in dat) {
            var img = dat[i].image;
            var text = dat[i].iconTitle;
            $(".main ul li").eq(i).find("img").attr("src", img);
            $(".main ul li").eq(i).find("p").html(text);
        }
    }
})
//商品
$.ajax({
    type: "get",
    url: "./data/store/top.json",
    success: function (data) {
        var datA = data.cellA.img;
        var datB = data.cellB.img;
        var datC = data.cellC.list;
        // console.log(datC);
        $(".cellA img").attr("src", datA);
        $(".cellB img").attr("src", datB);
        for (var i in datC) {
            var img = datC[i].image;
            $(".cellC").eq(i).find(" img").attr("src", img);
        }
    }
})
//分类
$.ajax({
    type: "get",
    url: "./data/store/top.json",
    success: function (data) {
        var dat = data.topic;
        var item = 0;
        $(".list_top ul li").click(function () {
            item = $(this).index();
            $("#ul_box").html("");
            getData();
        })
        function getData() {
            $(".list_bottom h5").html(dat[item].titleEn);
            $(".list_bottom h4").html(dat[item].titleCn);
            for (var i in dat) {
                var img = dat[i].uncheckImage;
                $(".list_top ul li").eq(i).find("img").attr("src", img);
            }
            $.each(dat[item].subList, function (j) {
                var imgs = dat[item].subList[j].image;
                var title = dat[item].subList[j].title;
                var span = dat[item].subList[j].title;
                var lis = $("<li></li>");
                var images = $("<img>");
                var p_s = $("<p></p>");
                var span = $("<span>￥1330</span>");

                images.attr("src", imgs);
                p_s.text(title);

                lis.append(images);
                lis.append(p_s);
                lis.append(span);
                $(".list_bottom ul").append(lis);
            })
        }

        getData();
    }
})
//商品楼层
$.ajax({
    type: "get",
    url: "./data/store/top.json",
    success: function (data) {
        var dat = data.category;
        // console.log(dat);
        $.each(dat, function () {
            var box = $("<div class='list_all_box'></div>");
            var $_p = $("<p><strong class='fl'></strong> <span class='fr'>更多</span></p>");
            var $_div = $("<div></div>");
            var imgs = $("<img>");
            var $_ul = $("<ul></ul>");
            box.append($_p);
            box.append($_div);
            $_div.append(imgs);
            $(".list_all").append(box);
            var name = this.name;
            var img = this.image;
            $_p.find("strong").html(name);
            imgs.attr("src", img);
            // console.log(imgs);

            var dat_lis = this.subList;
            // console.log(dat_lis);
            for (var i in dat_lis) {
                var $_lis = $("<li></li>");
                var $_images = $("<img>");
                var $_title = $("<p></p>");
                var $_span = $("<span>￥799</span>");

                var $_imgs = dat_lis[i].image;
                var $_text = dat_lis[i].title;
                $_images.attr("src", $_imgs);
                $_title.html($_text);

                $_lis.append($_images);
                $_lis.append($_title);
                $_lis.append($_span);
                $_ul.append($_lis);
            }
            box.append($_ul);
        })
    }
})


//全部商品
//底部加载
$(function () {
    var item = 1;
    $('.content').dropload({
        scrollArea: window,
        loadDownFn: function (me) {
            $.ajax({
                type: "get",
                url: "./data/store/store" + item + ".json",
                success: function (data) {
                    var dat = data.goodsList;
                    // console.log(dat);
                    var $_ul = $("<ul></ul>");
                    $(".all").append($_ul);
                    $.each(dat, function () {
                        var $_lis = $("<li></li>");
                        var $_img = $("<img>");
                        var $_p = $("<p></p>");
                        var $_span = $("<span>￥1150</span>");
                        var $_image = this.image;
                        var $_name = this.name;
                        $_img.attr("src", $_image);
                        $_p.html($_name);
                        $_lis.append($_img);
                        $_lis.append($_p);
                        $_lis.append($_span);
                        $_ul.append($_lis);
                        me.resetload();
                    })
                },
                error: function (xhr, type) {
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
            item++;
            if (item == 3) {
                item = 1;
            }
        }
    });
});