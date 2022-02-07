$(".right").click(function() {
    $(".page2").show();
    $(".start").hide();
});

$(".Img1").dblclick(function() {
    $(".page3").show();
    $(".page2").hide();
});

$(".Img3").hover(function() {
    $(".start").show();
    $(".page3").hide();
});


$(".left").click(function() {
    $(".start").hide();
    $(".page2a").show();
});