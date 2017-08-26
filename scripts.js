var navItems = document.querySelectorAll('nav li');
var header = document.getElementsByTagName('header')[0];
var spotlight = document.getElementById('spotlight');

document.body.onscroll = function() {
    for (i = 0; i < navItems.length; i++) navItems[i].id = '';

    navItems[Math.round(document.body.scrollTop / (window.innerHeight-65))].id = 'selected';
};

var COLORS = [
    ['#f15a3d', '#f7901e'],
    ['#28beff', '#30c1ff'],
    ['#2453a2', '#255dba']
];

function colorize(event, slick, previous, num) {
    spotlight.style.background = 'linear-gradient(50deg, ' + COLORS[num][0] + ' 30%, ' + COLORS[num][1] + ')';
    header.style.background = COLORS[num][1];
}

$(function() {
    $("#slides").slick({
        autoplay: true,
        arrows: false,
        dots: true
    });
});

$('#slides').on('beforeChange', colorize);

$('nav ul a').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    var top = document.getElementById(hash.slice(1)).offsetTop;
    $('body').animate({
        scrollTop: top
    }, 400, 'swing', function() {
        window.location.hash = hash;
    });
});
