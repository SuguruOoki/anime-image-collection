$('.bigbanner_panel').remove();
$('#player_bg_outer').css('margin-left', '50px');
$('#player_bg_outer.anime_sw_right').css('right', '-290px');
$('#body_main_inner').css('margin-left', '50px');
$('#player_bg_outer').after('<div class="twitter-images" style=\"position:absolute;right:50px;top:150px;\"></div>');;
// $('#player_bg_outer').siblings().addClass();
$('.twitter-images').prepend("<div style=\"position:relative; overflow:hidden; height:300px;\"><button class=\"slide button-top\" style=\"position:absolute; left:50%; transform:translateX(-50%); z-index:100\">上</button><button class=\"button-bottom\" style=\"position:absolute; left:50%; transform:translateX(-50%); bottom:0px;z-index:100\">下</button><ul class=\"twitter-image\" style=\"list-style: none; position:relative; \"></ul></div>");
$.ajax({
    url: 'http://localhost:3000/samples', 
    type: 'GET',
    timeout: 5000,
  })
  .done(function(data) {
      console.log(data);
      var l = data.length;
      for(var i=0; i<l; i++){
          $('.twitter-image').append("<li><div class=\"image\"><a href=\"" + data[i] + "\"><img src=\"" + data[i] + "\" style=\"width: 250px; height:300px; margin-bottom:10px;\" /></a></div></li>");
      }
  })
  .fail(function(data) {
      alert('サーバとの接続に失敗しました');
  });

// $('.twitter-images').css({
//     'float': 'right',
//     'margin-right': '50px'
// });

// $('head').prepend('<script type="text/javascript">$(".button-top").click(function() {$(".twitter-image").animate({ "position": "-400px" }, 1000);})</script>');
$('head').prepend('<script type="text/javascript">$(".button-top").on(\'click\', function(){alert("実行");});</script>');
// $(".button-top").click(function() {
//     $(".twitter-image").animate({ "position": "-400px" }, 1000);
// });

// $(".button-top").on('click', function(){alert("実行");});

// $('#body_main_inner').html("<script src=\"js/heightSlide.js\"></script>");