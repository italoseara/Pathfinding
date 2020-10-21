var walling = false;
var currentBox;

drawBoxes()
setInterval(update, 100);

function drawBoxes(){
    var boxes = '';
    var starter = [16, 10];
    var final = [16, 48]

    for (var row = 0; row < 32; row++) {
        document.querySelector('.grid').innerHTML += '<div class="row row' + row + '"></div>';
        for (var col = 0; col < 58; col++) {
            document.querySelector('.row' + row).innerHTML += '<div class="box"></div>';
        }
    }

    document.querySelector('.row' + (starter[0] - 1)).querySelectorAll('.box')[starter[1]].classList.add('starter')
    document.querySelector('.row' + (final[0] - 1)).querySelectorAll('.box')[final[1]].classList.add('final')
}

function popOut(object) {
    object.style.transitionDuration = '0.15s';
    object.style.transform = 'scale(1.3)';

    setTimeout(() => {
        object.style.transitionDuration = '0.07s';
        object.style.transform = 'scale(1)';
    }, 150);
}

function update() {
    document.querySelector('.starter').classList.remove('wall');
    document.querySelector('.final').classList.remove('wall');
}

document.querySelector('.grid').addEventListener('mousedown', () => { walling = true; currentBox.classList.add('wall'); popOut(currentBox);})
document.querySelector('.grid').addEventListener('mouseup', () => walling = false)
document.querySelector('.grid').addEventListener('mousemove', () => {
    currentBox = document.querySelector('.box:hover');
    if (!walling) return;
    currentBox.classList.add('wall');
    popOut(currentBox);
})
