const gameBox = document.getElementById('box-game');
const cells = document.querySelectorAll('.game-cells');
const resetBtn = document.querySelector("#reset-btn");
const winningConditions = [
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6],
  [0,1,2], [3,4,5], [6,7,8]
];
let currentPlayer = true; //playerx and player0
 for(let i=0; i < cells.length ; i++){
  cells[i].addEventListener('click', function (e)  {  
      e.target.innerText = currentPlayer ? 'x' : 'o';
      currentPlayer = !currentPlayer;
      e.target.disabled = true;
checkWinner();
allFieldsfull();
  });
}
// check the winning conditon
function checkWinner(){
    for(let condition of winningConditions){
let cell1 = cells[condition[0]];
let cell2 = cells[condition[1]];
let cell3 = cells[condition[2]];
if(cell1.innerText!= "" && cell2.innerText!= " " && cell3.innerText != "" ){
if(cell1.innerText  === cell2.innerText && cell2.innerText === cell3.innerText){
    alert(`player is wins!`)
    disabledAllcells();
}
} 
}
}
function disabledAllcells(){
for(let i=0; i < cells.length ; i++){
cells[i].disabled = true;
}
}
// draw game 
function allFieldsfull(){
  let isDraw = true;
  for(let i=0; i< cells.length ; i++){
   if(cells[i].innerText === ''){
     isDraw = false;
    break;
  }
  }
  if (isDraw) {
    alert("It's a draw!");
  }
}
//reset game btn
resetBtn.addEventListener('click', function(){
  for(let i =0; i <cells.length ; i++){
    cells[i].innerText = '';
cells[i].disabled = false;
  }
  currentPlayer = false;
});