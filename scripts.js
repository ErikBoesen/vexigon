var navItems = document.querySelectorAll('nav li');
var sections = document.getElementsByTagName('article')
var header = document.getElementsByTagName('header')[0];
var headerBG = document.getElementsByClassName('header-bg')[0];
var spotlight = document.getElementById('spotlight');

document.body.onscroll = function() {
    var top = document.body.scrollTop | document.documentElement.scrollTop;
    console.log(top);
    for (i = 0; i < navItems.length; i++) navItems[i].id = '';
    headerBG.style.opacity = (top > 200) ? 1 : 0;

    var dist;
    var closest;
    for (i = 0; i < sections.length; i++) {
        var gap = Math.abs(top - sections[i].offsetTop);
        if (dist === undefined || gap < dist) {
            closest = i;
            dist = gap;
        }
    }
    navItems[closest].id = 'selected';
};

var COLORS = [
    ['#f15a3d', '#f7901e'],
    ['#28beff', '#30c1ff'],
    ['#2453a2', '#255dba']
];

function colorize(event, slick, previous, num) {
    spotlight.style.background = 'linear-gradient(50deg, ' + COLORS[num][0] + ' 30%, ' + COLORS[num][1] + ')';
}

$("#slides").slick({
    autoplay: true,
    arrows: false,
    dots: true
});

$('#slides').on('beforeChange', colorize);

$('nav ul a').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    console.log(hash.slice(1));
    var top = document.getElementById(hash.slice(1)).offsetTop;
    $('body').animate({
        scrollTop: top
    }, 400, 'swing', function() {
        window.location.hash = hash;
    });
});

if (document.body.clientWidth > 800) {
    $.scrollify({
        section: 'article',
        scrollSpeed: 400
    });
}
