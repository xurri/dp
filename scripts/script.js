 $(function() {
        $("#box").css("display","none");
        $("#navbar").css("display","flex");
        $("#main").css("display","initial");
        
        var c = 0;
        $("#nav-btn").click(function() {
          if (c == 0) {
            $("#navlinks").show();
          $("#navlinks").css({"display":"flex","flex-direction":"column","justify-content":"center","align-items":"center","width":"80vw","height":"80vh","border":"3px solid #fff"});
          c++;
          } else {
            $("#navlinks").hide();
            c--;
          }
     
        });
     if ($(window).width() < 767) {   
     $(".nav-link").click(function() {
            $("#navlinks").hide();
            c = 0;
          });
     }
      });
  