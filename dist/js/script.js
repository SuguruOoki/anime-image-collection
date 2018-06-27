$('.bigbanner_panel').remove();
$('#player_bg_outer').css('margin-left', '50px');
$('#player_bg_outer.anime_sw_right').css('right', '-290px');
$('#body_main_inner').css('margin-left', '50px');
$('.content').prepend("<div class=\"twitter-images\"><img src=\"http://placehold.jp/250x250.png\"></div>");
$('.twitter-images').css({
    'float': 'right',
    'margin-right': '50px'
});