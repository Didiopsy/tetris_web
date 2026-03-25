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
// 20 x 10

let tetri_l = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]];
let tetri_j = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]];
let tetri_t = [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]];
let tetri_z = [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]];
let tetri_s = [
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]];
let tetri_o = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]];
let tetri_i = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]];

let bag_base = [
    tetri_l,
    tetri_j,
    tetri_t,
    tetri_z,
    tetri_s,
    tetri_o,
    tetri_i
];

let bag = [];

//faire une fonction qui dessine directement une piece à un x y
function draw_tet(tet, x, y) {
    for (let i = 0; i < tet.length; i++)
        for (let j = 0; j < tet[0].length; j++)
            if (tet[i][j] == 1)
                ctx.fillRect((j + x) * 30, (i + y) * 30, 30, 30);
}

function add_tetri(tet, x, y) {
    for (let j = 0; j < tet[0].length; j++)
        for (let i = 0; i < tet.length; i++)
            if (tet[i][j] == 1)
                tab[y + i][x + j] = tet[i][j];
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

function clearframe(tet, x, y) {
    ctx.clearRect(0, 0, 300, 600);
}

function down(tet, x, y) {
    let i = 0;
    let j = 0;
    for (i = 0; i < tet.length; i++)
        for (j = 0; j < tet[0].length; j++) {
            if (y + i + 1 >= 20 && tet[i][j] == 1)
                return 1;
            if (tet[i][j] == 1 && tab[y + i + 1][x + j] == 1)
                return 1;
        }
    return 0;
                
}

function left(tet, x, y) {
    for (let i = 0; i < tet.length; i++)
        for (let j = 0; j < tet[0].length; j++) {
            if (tet[i][j] == 1) {
                if (x + j <= 0) {
                    return;
                } else {
                    if (tab[y + i][x + j - 1] == 1) {
                        return;
                    }
                }
            }
        }
    c_x--;
}

function right(tet, x, y) {
    for (let i = 0; i < tet.length; i++)
        for (let j = 0; j < tet[0].length; j++) {
            if (tet[i][j] == 1) {
                if (x + j >= 9) {
                    return;
                } else {
                    if (tab[y + i][x + j + 1] == 1) {
                        return;
                    }
                }
            }
        }
    c_x++;
}

function rota(tet)
{
    let i = 0;
    let j = 0;
    let new_m = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];

    for (i = 0; i < tet[0].length; i++) {
        for (j = 0; j < tet.length; j++) {
            new_m[j][3 - i] = tet[i][j];
        }
    }
    return new_m;
}

function rota_certif(tet, x, y)
{
    for (let i = 0; i < tet.length; i++) { //20
        for (let j = 0; j < tet[0].length; j++) { //10
            if (tet[i][j] == 1) {
                if (i + y >= 20 || j + x >= 10 || j + x < 0) {
                    return 1;
                } else {
                    if (tab[i + y][x + j] == 1)
                        return 1;
                }
            }
        }
    }
    return 0;
}

function handleEvent(event) {
    switch (event.key) {
        case "z":
            let new_rota = rota(c_tet);
            if (rota_certif(new_rota, c_x, c_y) == 0)
                c_tet = new_rota;
            break;
        case "q":
            left(c_tet, c_x, c_y);
            break;
        case "s":
            if (down(c_tet, c_x, c_y) == 0)
                c_y++;
            break;
        case "d":
            right(c_tet, c_x, c_y)
            break;
        case "Enter":
            break;
    }
}

function ligne_certif(y) {
    for (let x = 0; x < 10; x++) {
        if (tab[y][x] == 0)
            return 1;
    }
    return 0;
}

function ligne_suppr(y) {
    for (let row = y; row > 0; row--) {
        tab[row] = [...tab[row - 1]];
    }
    tab[0] = Array(10).fill(0);
}

function random_tet(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function prochaine_tet() {
    if (bag.length == 0) {
        bag = random_tet([...bag_base]);
    }
    return bag.pop();
}


let c_tet = prochaine_tet();
let c_x = 4;
let c_y = 0;

function loop()
{
    clearframe(c_tet, c_x, c_y);
    draw();
    draw_tab(tab);
    if (down(c_tet, c_x, c_y) == 1) {
        add_tetri(c_tet, c_x, c_y);
        for (let i = 19; i >= 0; i--)
            if (ligne_certif(i) == 0) {
                ligne_suppr(i);
                i++;
            }
        c_tet = prochaine_tet();
        c_x = 4;
        c_y = 0;
    } else
        c_y++;
    draw_tet(c_tet, c_x, c_y);
}

document.addEventListener("keydown", handleEvent);
setInterval(loop, 500);