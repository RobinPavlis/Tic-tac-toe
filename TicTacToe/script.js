var Mem = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',]
var Turn = 'Player';
var Round = 0;

function player(id) {
    if (Turn == 'Player') {
        if (Mem[id] == ' ') {
            document.getElementById(id).style.backgroundImage = "url('img/x.png')";
            Mem[id] = 'X';
            Round++;
            Turn = 'Computer';
            Check()
        }
        computer()
    }
}

function computer() {
    if (Turn == 'Computer') {
        var id = Math.floor(Math.random() * 9);

        if (Mem[id] == ' ') {
            document.getElementById(id).style.backgroundImage = "url('img/o.png')";
            Mem[id] = 'O';
            Round++;
            Turn = 'Player';
            Check()
        }
        else {
            computer()
        }
    }
}

function Check() {
    if (
        Mem[0] == 'O' && Mem[1] == 'O' && Mem[2] == 'O' || 
        Mem[3] == 'O' && Mem[4] == 'O' && Mem[5] == 'O' || 
        Mem[6] == 'O' && Mem[7] == 'O' && Mem[8] == 'O' ||

        Mem[0] == 'O' && Mem[3] == 'O' && Mem[6] == 'O' || 
        Mem[1] == 'O' && Mem[4] == 'O' && Mem[7] == 'O' || 
        Mem[2] == 'O' && Mem[5] == 'O' && Mem[8] == 'O' ||

        Mem[0] == 'O' && Mem[4] == 'O' && Mem[8] == 'O' || 
        Mem[2] == 'O' && Mem[4] == 'O' && Mem[6] == 'O'
        ) {
            Turn = 'End';
            document.getElementById('result').innerHTML = 'Loser';
            document.getElementById('result').style = 'animation: Result 3s forwards;';
            document.getElementById('endScreen').style = 'display: block; animation: Lose 3s forwards;';
            document.getElementById('h1').style = 'animation: Down 3s forwards;';
    }
    else if (
        Mem[0] == 'X' && Mem[1] == 'X' && Mem[2] == 'X' || 
        Mem[3] == 'X' && Mem[4] == 'X' && Mem[5] == 'X' || 
        Mem[6] == 'X' && Mem[7] == 'X' && Mem[8] == 'X' ||

        Mem[0] == 'X' && Mem[3] == 'X' && Mem[6] == 'X' || 
        Mem[1] == 'X' && Mem[4] == 'X' && Mem[7] == 'X' || 
        Mem[2] == 'X' && Mem[5] == 'X' && Mem[8] == 'X' ||

        Mem[0] == 'X' && Mem[4] == 'X' && Mem[8] == 'X' || 
        Mem[2] == 'X' && Mem[4] == 'X' && Mem[6] == 'X'
        ) {
            Turn = 'End';
            document.getElementById('result').innerHTML = 'Winner';
            document.getElementById('result').style = 'animation: Result 3s forwards;';
            document.getElementById('endScreen').style = 'display: block; animation: Win 3s forwards;';
            document.getElementById('h1').style = 'animation: Down 3s forwards;';
    }
    else if (Round == 9) {
        let Draw = true;
        for (let i = 0; i < 9; i++) {
            if (Mem[i] == ' ') {
                Draw = false;
            }
        }
        if (Draw == true) {
            Turn = 'End';
            document.getElementById('result').innerHTML = 'Draw';
            document.getElementById('result').style = 'animation: Result 3s forwards;';
            document.getElementById('endScreen').style = 'display: block; animation: Draw 3s forwards;';
            document.getElementById('h1').style = 'animation: Down 3s forwards;';
        }
    }
}