drawCanvas()

function drawCanvas(){
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

