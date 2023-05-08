var turn = 1;
window.onload = function(){
  document.getElementById('board').addEventListener("click", clicked)
}

function clicked(event){
  if(event.target.tagName == "TD" && event.target.textContent == ""){
    if(turn%2 == 0){
      event.target.textContent = "O";
      event.target.style.color = "blue";
    }else{
      event.target.textContent = "X";
      event.target.style.color = "red";
    }
    turn++;
  }
}
