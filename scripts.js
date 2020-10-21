var walling = false;
var currentBox;

drawBoxes()
setInterval(update, 100);

function drawBoxes(){
    var boxes = '';
    var starter = [10, 7];
    var final = [10, 28]

    for (var i = 0; i < 720; i++) {
        if (i === 36*(starter[0] - 1) + starter[1]) {
            boxes += '<div class="box starter"></div>';
        } else if (i === 36*(final[0] - 1) + final[1]) {
            boxes += '<div class="box final"></div>';
        } else boxes += '<div class="box"></div>';
    }

    document.querySelector('.grid').innerHTML = boxes;
}

function update() {
    document.querySelector('.starter').classList.remove('wall');
    document.querySelector('.final').classList.remove('wall');
}

document.querySelector('.grid').addEventListener('mousedown', () => { walling = true; currentBox.classList.add('wall');})
document.querySelector('.grid').addEventListener('mouseup', () => walling = false)
document.querySelector('.grid').addEventListener('mousemove', () => {
    currentBox = document.querySelector('.box:hover');
    if (!walling) return;
    currentBox.classList.add('wall');
})
