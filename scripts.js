var COLORS = [
    ['#28beff', '#30c1ff'],
    ['#f15a3d', '#f7901e'],
    ['#2453a2', '#255dba']
];

function colorize(event, slick, previous, num) {
    console.log(num);
    document.body.style.background = 'linear-gradient(to top right, ' + COLORS[num][0] + ', ' + COLORS[num][1] + ')';
}

$(function() {
    $("#slides").slick({
        autoplay: true,
        arrows: false,
        dots: true
        /*callback: {
            start: colorize,
            loaded: colorize
        }*/
    });
});

$('#slides').on('load', colorize);
$('#slides').on('beforeChange', colorize);

$('nav ul a').on('click', function() {
    var target = this.href.split('#')[1];
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + target
    });
});
