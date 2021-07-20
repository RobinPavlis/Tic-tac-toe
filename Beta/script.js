var Mem = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',]
var Turn = 'Player';
var Round = 0;

async function ComputerTurn() {
    if (Turn == 'Computer') {
        let randomNum = Math.floor(Math.random() * 9);

        if (Mem[randomNum] == ' ') {
            Mem[randomNum] = 'O';
            Round++;
            Turn = 'Player';
            reload();
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
                    alert('Computer Win!')
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
                    alert('Draw!')
                }
            }
        }
        else {
            ComputerTurn();
        }
    }
}

function PlayerClick(NumberID) {
    if (Turn == 'Player') {
        if (Mem[NumberID] == ' ') {
            Mem[NumberID] = 'X';
            Round++;
            Turn = 'Computer';
            reload();
            if (
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
                    alert('Player Win!')
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
                    alert('Draw!')
                }
            }
        }
    }
    ComputerTurn();
}
    
function reload() {
    document.getElementById("0").innerHTML = Mem[0];
    document.getElementById("1").innerHTML = Mem[1];
    document.getElementById("2").innerHTML = Mem[2];
    document.getElementById("3").innerHTML = Mem[3];
    document.getElementById("4").innerHTML = Mem[4];
    document.getElementById("5").innerHTML = Mem[5];
    document.getElementById("6").innerHTML = Mem[6];
    document.getElementById("7").innerHTML = Mem[7];
    document.getElementById("8").innerHTML = Mem[8];
}