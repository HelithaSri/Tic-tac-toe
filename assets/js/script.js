/**
 * @author : HelithaSri
 * @email : helitha.pravin@gmail.com
 * @create date : 2022-03-31  00:08
 * @desc [Tac - Tic - Toe Game Script]
 */

$("#scoreX").text("-");
$("#scoreO").text("-");

/* let scoreX = $("#scoreX").text("-");
let scoreO = $("#scoreO").text("-"); */

let scoreX;
let scoreO;
let player = 1;
let x = `<i class="fa-solid fa-xmark fa-6x"></i>`;
let o = `<i class="fa-solid fa-o fa-5x"></i>`;

let xoArray = ["", "", "", "", "", "", "", "", ""];

const POSSIBILITY = [
    [1, 2, 3],
    [5, 6, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

currentPlayer();

$("#grid-sec > div").click(function () {
    // console.log($(this).attr("id"));
    let id = $(this).attr("id");
    let indexId = id.split("c")[1];
    indexId = Number(indexId) - 1;
    let clickBefore = isClickBefore(indexId);

    if (clickBefore) {
        if (player == 1) {
            $(`#${id}`).append(x);
            xoArray[indexId] = "X";
            player = 2;
        } else {
            $(`#${id}`).append(o);
            xoArray[indexId] = "O";
            player = 1;
        }
    }
    currentPlayer();
});

function currentPlayer() {
    if (player == 1) {
        let boxX = $("#main_div > div:eq(0)");
        boxX.cssImportant("border-color", "#fbc531", "important");
        boxX.cssImportant("border-width", "5px", "important");

        let boxO = $("#main_div > div:eq(1)");
        boxO.cssImportant("border-color", "#fbc531", "important");
        boxO.cssImportant("border-width", "1px", "important");
    } else {
        let boxO = $("#main_div > div:eq(1)");
        boxO.cssImportant("border-color", "#fbc531", "important");
        boxO.cssImportant("border-width", "5px", "important");

        let boxX = $("#main_div > div:eq(0)");
        boxX.cssImportant("border-color", "#fbc531", "important");
        boxX.cssImportant("border-width", "1px", "important");
    }
}

function isClickBefore(index) {
    if (xoArray[index] != "") {
        return false;
    } else {
        return true;
    }
}

console.log($("#grid-sec").children());

