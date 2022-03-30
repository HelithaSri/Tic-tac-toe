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

let xoArray = ["","","","","","","","",""];

const POSSIBILITY = [
    [1,2,3],
    [5,6,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];



