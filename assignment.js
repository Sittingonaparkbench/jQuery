console.log("HEEY you guys!");

var epi1 = $("#episode-one");
var epi2 = $("#episode-two");
var epi3 = $("#episode-three");
var epi4 = $("#episode-four");
var epi5 = $("#episode-five");
var epi6 = $("#episode-six");

var epi1_a = $("#episode-one-link");
var epi2_a = $("#episode-two-link");
var epi3_a = $("#episode-three-link");
var epi4_a = $("#episode-four-link");
var epi5_a = $("#episode-five-link");
var epi6_a = $("#episode-six-link");

//$(document).ready(function() {
//    $(epi1).hide();
//});
//$(document).ready(function() {
//    $(epi1).show();
//});

$(document).ready(function() {
    //Simpler ref to class designation when compared to previous rendition
    $(".movie-desc").hide()
                    .css("background", "black")
                    .css("color", "yellow");
});

$(document).ready(function() {
    $(epi1_a).mouseenter(function(){
        $(".movie-desc").hide();
        $(epi1).fadeIn();
    });
    $(epi2_a).mouseenter(function(){
        $(".movie-desc").hide();
        $(epi2).fadeIn();
    });
    $(epi3_a).mouseenter(function(){
        $(".movie-desc").hide();
        $(epi3).fadeIn();
    });
    $(epi4_a).mouseenter(function(){
        $(".movie-desc").hide();
        $(epi4).fadeIn();
    });
    $(epi5_a).mouseenter(function(){
        $(".movie-desc").hide();
        $(epi5).fadeIn();
    });
    $(epi6_a).mouseenter(function(){
        $(".movie-desc").hide();
        $(epi6).fadeIn();
    });
});
