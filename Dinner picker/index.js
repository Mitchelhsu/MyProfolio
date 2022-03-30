$(function(){
    $("#picker").on("click", function(){
        var images = ['images/HotDog.jpeg', 'images/chicken_breast.jpeg', 'images/Ceaser_salad.jpeg']
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem)
        for(let i = 0; i<numberOfListItem; i++) {
            $("li").eq(i).css("color", "rgb(6, 95, 150)");    
        }
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src", images[randomChildNumber]);
        $("li").eq(randomChildNumber).css("color", "aqua");
    });
});