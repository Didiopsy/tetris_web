var canvas = document.getElementById("tetris");
//300 x 600

if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    draw();
}

let tab = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

let tetri_l = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0]];
let tetri_j = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]];

function add_tetri(tet, x, y) {
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            tab[y + j][x + i] = tet[j][i];
}

function draw_tab(tab) {
    for (let x = 0; x < 10; x++)
        for (let y = 0; y < 20; y++)
            if (tab[y][x] == 1)
                ctx.fillRect(x * 30, y * 30, 30, 30);
}

function draw() {
    //ctx.fillRect(25, 25, 100, 100);
    //ctx.clearRect(45, 45, 60, 60);
    //ctx.strokeRect(50, 50, 50, 50);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 20; j++) {
            ctx.strokeRect(i * 30, j * 30, 30, 30);
        }
    }
}

add_tetri(tetri_j, 4, 0);
draw_tab(tab);