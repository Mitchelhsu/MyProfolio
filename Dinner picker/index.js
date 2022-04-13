$(function(){
    $("#picker").on("click", function(){
        var images = ['images/HotDog.jpeg', 'images/chicken_breast.jpeg', 'images/Ceaser_salad.jpeg']
        var numberOfListItem = $("ul.food li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem)
        for(let i = 0; i<numberOfListItem; i++) {
            $("li").eq(i).css("color", "rgb(6, 95, 150)");    
        }
        $("h1").text($("ul.food li").eq(randomChildNumber).text());
        $("img").attr("src", images[randomChildNumber]);
        $("ul.food li").eq(randomChildNumber).css("color", "aqua");
    });

    $(".trigger_popup_fricc").on('click', function(){
        $('.hover_bkgr_fricc').show();
     });
     $('.hover_bkgr_fricc').on('click', function(){
         $('.hover_bkgr_fricc').hide();
     });
     $('.popupCloseButton').on('click', function(){
         $('.hover_bkgr_fricc').hide();
     });
});