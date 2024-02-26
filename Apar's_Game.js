
// ******************************  Let's Start The JavaScript with APAR  *********************************


// On Restart Button (to restart , clear board)
document.querySelector('#b').addEventListener('click',clearBoard) 

// To Grab all the squares
var squares = document.querySelectorAll("td");


// To Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}


// Create a function that will check the square marker
function changeEmoji(){
    if(this.textContent === ''){
      this.textContent = '❌';
    }else if (this.textContent === '❌') {
      this.textContent = '⭕';
    }else {
      this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeEmoji);
}
