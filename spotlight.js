var COLORS = [
    '#28beff',
    '#ff8024',
    '#2453a2'
];

function colorize(num) {
    console.log(num);
    document.body.style.background = 'linear-gradient(to bottom right, ' + COLORS[num - 1] + ' 50%, #ddd 50%)';
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
