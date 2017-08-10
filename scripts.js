var COLORS = [
    ['#28beff', '#30c1ff'],
    ['#f15a3d', '#f7901e'],
    ['#2453a2', '#255dba']
];

function colorize(num) {
    console.log(num);
    document.body.style.background = 'linear-gradient(to top right, ' + COLORS[num - 1][0] + ', ' + COLORS[num - 1][1] + ')';
}

$(function() {
    $("#slides").slidesjs({
        width: 800,
        height: window.innerWidth >= 700 ? 650 : window.innerHeight * 1.15,
        callback: {
            start: colorize,
            loaded: colorize
        }
    });
});

$('nav ul a').on('click', function() {
    var target = this.href.split('#')[1];
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + target
    });
});
