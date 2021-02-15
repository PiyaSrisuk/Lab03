let humanPlayer = 'X', aiPlayer = 'O';
let table = ['', '', '', '', '', '', '', '', ''];
let canClick = true;

function newGame() {
    table = ['', '', '', '', '', '', '', '', ''];
    canClick = true;
    document.getElementById('result').innerHTML = 'Match result will show here.';
    for (let i = 0; i < table.length; i++) {
        document.getElementById(i).innerHTML = '';
    }   
}

function checkWinCondition() {
    if ((table[0]==='X' && table[1]==='X' && table[2]==='X')||
        (table[3]==='X' && table[4]==='X' && table[5]==='X')||
        (table[6]==='X' && table[7]==='X' && table[8]==='X')||
        (table[0]==='X' && table[3]==='X' && table[6]==='X')||
        (table[1]==='X' && table[4]==='X' && table[7]==='X')||
        (table[2]==='X' && table[5]==='X' && table[8]==='X')||
        (table[0]==='X' && table[4]==='X' && table[8]==='X')||
        (table[2]==='X' && table[4]==='X' && table[6]==='X')) {
        document.getElementById('result').innerHTML = 'You Win.' 
        canClick = false;     
        }
    if ((table[0]==='O' && table[1]==='O' && table[2]==='O')||
        (table[3]==='O' && table[4]==='O' && table[5]==='O')||
        (table[6]==='O' && table[7]==='O' && table[8]==='O')||
        (table[0]==='O' && table[3]==='O' && table[6]==='O')||
        (table[1]==='O' && table[4]==='O' && table[7]==='O')||
        (table[2]==='O' && table[5]==='O' && table[8]==='O')||
        (table[0]==='O' && table[4]==='O' && table[8]==='O')||
        (table[2]==='O' && table[4]==='O' && table[6]==='O')) {
        document.getElementById('result').innerHTML = 'AI Win.';
        canClick = false; 
        return;     
    }
}

function aiPlay () {
    let cell;
    do {
        if (table.indexOf('')===-1) return;
        cell = Math.floor(Math.random() * 10) - 1;
    }while(table[cell] !== '');
    table[cell] = aiPlayer;
    document.getElementById(cell).innerHTML = aiPlayer;
}

function humanPlay(cell) {
    if ((table[cell] === '')&&(canClick)) {
        table[cell] = humanPlayer;
        document.getElementById(cell).innerHTML = humanPlayer;
        checkWinCondition();
        if (canClick) {
            aiPlay();
            checkWinCondition();
        }
    }
    if (table.indexOf('') === -1){
        canClick = false;
        document.getElementById('result').innerHTML = 'Draw.';
    }
}