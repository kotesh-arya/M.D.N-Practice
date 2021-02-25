
// content updating using a function
// const para = document.querySelector("p");
// para.addEventListener('click',updateName);
 
function updateName(){
    let name = prompt("Enter the first player name");
    para.textContent = "Player 1 :" + name;
}


const buttons = document.querySelectorAll('button');
for(i=0;i<buttons.length;i++){
    var content = document.querySelector('p');
    content.textContent = "this is a paraghraph created that"
    buttons[i].addEventListener('click',updateName);

}