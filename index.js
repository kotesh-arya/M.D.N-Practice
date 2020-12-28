
// content updating using a function
const para = document.querySelector("p");
para.addEventListener('click',updateName);
 
function updateName(){
    let name = prompt("Enter the first player name");
    para.textContent = "Player 1 :" + name;
}