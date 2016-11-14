$(function(){
    var num = getCookie("num");
    for(var i = 0;i<=num ;i++){
        var price = getCookie("jiage" + i);
        var imgSrc = getCookie("tupian" + i);
        var ringName = getCookie("name" + i);
        var caizhi = getCookie("caizhi" + i);
        var shoucun = getCookie("shoucun" + i);
        var kezi = getCookie("kezi" + i); 
        ringName = decodeURI(ringName);
        caizhi = decodeURI(caizhi);
        kezi = decodeURI(kezi)
    }
    $("tbody").first().append('<tr class=\"cp_tr\"><td class=\"sp_td\"><a class=\"jx_shop\" href=\"#\"><img src=\"'+imgSrc+'\" width=\"85\" height=\"85\"><span>'+ringName+'</span></a></td><td class=\"cz_td\">'+caizhi+'</td><td class=\"sc_td\">'+shoucun+'</td><td class=\"kz_td\">'+kezi+'</td><td class=\"gm_td\" style=\"font-family:微软雅黑\">'+price+'</td><td class=\"close_td\"><span class=\"sicon s_close\"></span></td></tr><tr class=\"kb_tr\"><td class=\"sp_td\"></td><td class=\"cz_td\"></td><td class=\"sc_td\"></td><td class=\"kz_td\"></td><td class=\"gm_td\"></td><td class=\"close_td\"></td></tr>');
    
    //删除购物车货物
    $(".s_close").click(function(){
        $(".cp_tr").remove();
    })
})


