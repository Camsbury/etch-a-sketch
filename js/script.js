$(document).ready(function(){
        $('div').mouseenter(function(){
            $(this).css('background-color','green');
            });
        $('div').mouseleave(function(){
            $(this).css('background-color','blue');
            });            
    });

function reset(){
    $('td div').css('background-color','lightblue');
}