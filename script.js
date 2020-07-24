
  $(document).ready(function(){
    $(".title").click(function(){
      $(this).next(".content").slideToggle(200, "linear", function() {
      })
    });
  });

  


