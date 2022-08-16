var root = document.querySelector(':root');

function hover_div(x) {
    root.style.setProperty('--number-img', `url(../img/${x}b.jpg)`);
}