$(document).ready(function(){
        for (var i=1;i<=16;i++) {
            $('tbody').append('<tr></tr>')
        }
        for (var i=1;i<=16;i++) {
            $('tbody tr').append('<td><div></div></td>')
        }
        var color="";
        var first="";
        var second="";
        var third="";
        $('div').mouseenter(function(){
            color=$(this).css('background-color');
            var round=0;
            for (var i=4;i<color.length;i++){
                if (color.charAt(i)===','){
                    round++
                    if (round===1){
                        two=i;
                    }
                    if (round===2){
                        three=i;
                    }
                }
            }
            first=color.substring(4,two);
            second=color.substring(two+2,three);
            third=color.substring(three+2,color.length-1);
            $(this).css('background-color','green');
            });
        $('div').mouseleave(function(){
            var ranFirst=Math.random();
            var ranSecond=Math.random()*(1-ranFirst);
            var ranThird=1-ranSecond;
            var newFirst=first-Math.floor(ranFirst*76.5);
            var newSecond=second-Math.floor(ranSecond*76.5);
            var newThird=third-Math.floor(ranThird*76.5);
            var newColor='rgb('+newFirst+','+newSecond+','+newThird+')';
            $(this).css('background-color',newColor);
            });            
    });

function reset(){
    var g=prompt('What should the side length (in squares) of the grid be?');
    if ((isNaN(g))||(g==="")) {
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
    $('td div').css('background-color','rgb(255,255,255)');
    $('thead tr:first-child th').replaceWith('<th colspan="'+g+'"><h1>Cam\'s Etch-A-Sketch</h1></th>');
    $('thead tr:last-child th').replaceWith('<th colspan="'+g+'"><button type="button" onclick="reset()">Reset</button></th>');
        var color="";
        var first="";
        var second="";
        var third="";
        $('div').mouseenter(function(){
            color=$(this).css('background-color');
            var round=0;
            for (var i=4;i<color.length;i++){
                if (color.charAt(i)===','){
                    round++
                    if (round===1){
                        two=i;
                    }
                    if (round===2){
                        three=i;
                    }
                }
            }
            first=color.substring(4,two);
            second=color.substring(two+2,three);
            third=color.substring(three+2,color.length-1);
            $(this).css('background-color','green');
            });
        $('div').mouseleave(function(){
            var ranFirst=Math.random();
            var ranSecond=Math.random()*(1-ranFirst);
            var ranThird=1-ranSecond;
            var newFirst=first-Math.floor(ranFirst*76.5);
            var newSecond=second-Math.floor(ranSecond*76.5);
            var newThird=third-Math.floor(ranThird*76.5);
            var newColor='rgb('+newFirst+','+newSecond+','+newThird+')';
            $(this).css('background-color',newColor);
            });            
}