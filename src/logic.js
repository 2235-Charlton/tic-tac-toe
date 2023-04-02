count=1;

function playerTurn(value){
    if (count % 2 != 0)
        turn = 'X';
    else
        turn = 'O';
    return turn; 
}

function change(value){
    turn = playerTurn(value);
    
    switch(value){
        case 1:
            document.getElementById("b11").value = turn;
            document.getElementById("b11").disabled = true;
            break;
        case 2:
            document.getElementById("b12").value = turn;
            document.getElementById("b12").disabled = true;
            break;
        case 3:
            document.getElementById("b13").value = turn;
            document.getElementById("b13").disabled = true;
            break;    
        case 4:
            document.getElementById("b21").value = turn;
            document.getElementById("b21").disabled = true;
            break;
        case 5:
            document.getElementById("b22").value = turn;
            document.getElementById("b22").disabled = true;
            break;
        case 6:
            document.getElementById("b23").value = turn;
            document.getElementById("b23").disabled = true;
            break;
        case 7:
            document.getElementById("b31").value = turn;
            document.getElementById("b31").disabled = true;
            break;
        case 8:
            document.getElementById("b32").value = turn;
            document.getElementById("b32").disabled = true;
            break;
        case 9:
            document.getElementById("b33").value = turn;
            document.getElementById("b33").disabled = true;
            break;
            

        }
        
        count++;
        document.getElementById("turn").innerText = playerTurn(value);
        
}


function validate(){

}