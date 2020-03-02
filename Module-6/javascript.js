$('#button1').click(function(){
    $('#box').animate({width: '500px', height: '500px'});
});

$('#button2').click(function(){
    $('#box').css({
        "background-color": "#0C51E8"});
});

$('#button3').click(function(){
    $('#box').fadeTo("slow", 0.5, function(){
        //Animation complete
    });
});

$('#button4').click(function(){
    $('#box').css({
        width: '150px',
        height: '150px',
        "background-color": 'orange'
    });
    $("#box").fadeTo('slow', 1.0, function(){
        //Animation complete
    });
});