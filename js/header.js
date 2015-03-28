

$(document).ready(function(){
    $("header").mouseover(function(){
        $('#top_nav').stop().animate({'top': '-60px'});
    });

    $("header").mouseout(function(){
        $('#top_nav').stop().animate({'top': '0'});
    });
});


$(document).ready(function(){
    $(".mainav_item").mouseover(function(){
        $(this).children('i').stop().animate({'margin-top': '0px'}, 150);
    });

    $(".mainav_item").mouseout(function(){
        $(this).children('i').stop().animate({'margin-top': '10px'}, 150);

    });
});

