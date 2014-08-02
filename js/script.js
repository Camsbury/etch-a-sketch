$(document).ready(function(){
        $('div').mouseenter(function(){
            $(this).css('background-color','green');
            });
        $('div').mouseleave(function(){
            $(this).css('background-color','blue');
            });            
    });

function reset(){
    var g=prompt('What should the side length (in squares) of the grid be?');
    if (isNaN(g)) {
        var g=prompt('Sorry, that wasn\'t a number. What should the side length (in squares) of the grid be?');
    }
    $('tbody').empty();
    for (var i=1;i<=g;i++) {
        $('tbody').append('<tr></tr>')
    }
    for (var i=1;i<=g;i++) {
        $('tbody tr').append('<td><div></div></td>')
    }
    $('td div').height(Math.ceil(320/g)+'px');
    $('td div').width(Math.ceil(320/g)+'px');
    $('td div').css('background-color','lightblue');
    $('div').mouseenter(function(){
        $(this).css('background-color','green');
        });
    $('div').mouseleave(function(){
        $(this).css('background-color','blue');
        });            
}