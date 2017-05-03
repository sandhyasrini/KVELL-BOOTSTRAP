var rgba = function() {
    return 'rgba(' + 
        Math.ceil(Math.random() * 255) + ',' +
        Math.ceil(Math.random() * 255) + ',' +
        Math.ceil(Math.random() * 255) + ',' +
        (Math.random().toPrecision(3)) + ')';
};

setInterval(function() {
    $('body').css('background-color',rgba());
},500);