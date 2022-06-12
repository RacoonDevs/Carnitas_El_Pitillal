$(document).ready(function(){
      $(".grid-menu-tacos .box-tacos").hover(
        function(){
            const title = $(this).find('p').text();
            $("#taco-title").text(title);
            $("#taco-description").text(`Descripción del ${title}`);
        }    
    );
  });