/**
 * @author : HelithaSri
 * @email : helitha.pravin@gmail.com
 * @create date : 2022-03-31  00:08
 * @desc [Tac - Tic - Toe Game Script]
 */

$("#scoreX").text("-");
$("#scoreO").text("-");
$("#lblWon").text("");
$("#btnNext").prop("disabled",true);
$("#btnNext").css("opacity",.5);

/* let scoreX = $("#scoreX").text("-");
let scoreO = $("#scoreO").text("-"); */

let scoreX = 0;
let scoreO = 0;
let player = 1;
let x = `<i class="fa-solid fa-xmark fa-6x"></i>`;
let o = `<i class="fa-solid fa-o fa-5x"></i>`;

let xoArray = ["", "", "", "", "", "", "", "", ""];

const POSSIBILITY = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

loading();
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
            check();
            winOrDrawAction(isWinOrDraw());
        } else {
            $(`#${id}`).append(o);
            xoArray[indexId] = "O";
            player = 1;
            check();
            // checkWonOrDraw(check());
            winOrDrawAction(isWinOrDraw());
        }
    }
    currentPlayer();
    // check();
});

$("#btnReset").click(function () {
    soundEffect("btn");
    reset();
});
$("#btnNext").click(function(){
    soundEffect("btn");
    nextRound();
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

function loading() {
    $(window).on('load', function () {
        $("#load").fadeOut(1000);
    });
}

function reset() {
    $("#scoreX").text("-");
    $("#scoreO").text("-");
    $("#lblWon").text("");
    xoArray = ["", "", "", "", "", "", "", "", ""];
    $("#grid-sec > div").children().remove()
    $("#grid-sec > div").css("pointer-events", "auto");
    $("#btnNext").prop("disabled", true);
    $("#btnNext").css("opacity", .5);
    
    player = 1;
    scoreX = 0;
    scoreO = 0;
    currentPlayer();
    
}

function nextRound() {
    player = 1;
    $("#lblWon").text("");
    xoArray = ["", "", "", "", "", "", "", "", ""];
    $("#grid-sec > div").children().remove()
    $("#grid-sec > div").css("pointer-events", "auto");
    currentPlayer();
    $("#btnNext").prop("disabled", true);
    $("#btnNext").css("opacity", .5);

}

function isWinOrDraw() {
    let fullFill = -1; //All square is clicked, -1 = true and other false

    if (check() == "pX") {
        return "pX";
    } else if (check() == "pO") {
        return "pO"
    }

    // Check the array to find all div/square are clicked
    for (let i = 0; i < xoArray.length; i++) {
        if (xoArray[i] == "") {
            fullFill++;
            // console.log(ab);
            break;
        } else {
            fullFill = -1;
        }
        /* if (xoArray[i] != "") {
            console.log(true);
            return true;
        }else{
            console.log(false);
            return false;
        } */
    }
    if (fullFill == -1) {
        // winD++;
        return "pD";
    }

}

/* let winX = -1;
let winO = -1;
let winD = -1; */

function check() {
    for (let i = 0; i < POSSIBILITY.length; i++) {
        if (xoArray[POSSIBILITY[i][0]] === "X" && xoArray[POSSIBILITY[i][1]] === "X" && xoArray[POSSIBILITY[i][2]] === "X") {
            // console.log("y");
            // winX++;
            return "pX";
            // break;
        } else if ((xoArray[POSSIBILITY[i][0]] === "O" && xoArray[POSSIBILITY[i][1]] === "O" && xoArray[POSSIBILITY[i][2]] === "O")) {
            // console.log("g");
            // winO++;
            return "pO";
            // break;
        } /* else if(z()){
            console.log("abcd");
            return "pD";//Draw
        } */


        /* for (let j = 0; j < POSSIBILITY[i].length; j++) {
            // console.log(POSSIBILITY[i][j]);
            // console.log(xoArray[POSSIBILITY[i][0]] === "X");

        } */

    }
}



function winOrDrawAction(key) {
    switch (key) {
        case "pX":
            soundEffect("win");

            $("#grid-sec > div").css("pointer-events", "none");
            $("#lblWon").text("Player X Won");
            scoreX++;
            $("#scoreX").text(scoreX);

            $("#btnNext").prop("disabled", false);
            $("#btnNext").css("opacity", 1);
            break;

        case "pO":
            soundEffect("win");

            $("#grid-sec > div").css("pointer-events", "none");
            $("#lblWon").text("Player O Won");
            scoreO++;
            $("#scoreO").text(scoreO);

            $("#btnNext").prop("disabled", false);
            $("#btnNext").css("opacity", 1);
            break;

        case "pD":
            soundEffect("draw");

            $("#grid-sec > div").css("pointer-events", "none");
            $("#lblWon").text("DRAW");

            $("#btnNext").prop("disabled", false);
            $("#btnNext").css("opacity", 1);
            break;
        default:
            // $("#lblWon").text("WRONG");
            break;
    }
}

function soundEffect(state) {
    let effect = new Audio();
    switch (state) {
        case "win":
            effect.src = "assets/sound_effects/win-effect.wav";
            effect.play();
            break;

        case "draw":
            effect.src = "assets/sound_effects/draw-effect.wav";
            effect.play();
            break;

        /* case "reset":
            effect.src = "assets/sound_effects/reset-effect.wav";
            effect.play();
            break; */

        case "btn":
            effect.src = "assets/sound_effects/next-effect.wav";
            effect.play();
            break;

        default:
            break;
    }
}