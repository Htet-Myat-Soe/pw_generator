// DOM  Select

const display = document.querySelector(".res-text");
const copy = document.querySelector(".copy");
const range = document.querySelector("#range");
const rangeRes = document.querySelector(".range-res");
const numInput = document.querySelector("#number");
const charInput = document.querySelector("#special-char");
const button = document.querySelector(".generate");

const strongest = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>?{}[]1234567890`;
const strong = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>?{}[]`;
const middle = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`;
const weak = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;

button.addEventListener("click",generatePw);


function generatePw(){
    let length = range.value;
    let numCheck = numInput.checked;
    let charCheck = charInput.checked;

    let newPw = '';

   if(numCheck && charCheck){
        for(let i = 0; i < length;i++){
            newPw += strongest[Math.floor(Math.random() * strongest.length)];
        }
   }
   else if(numCheck){
    for(let i = 0; i < length;i++){
        newPw += middle[Math.floor(Math.random() * middle.length)];
    }
   }
   else if(charCheck){
    for(let i = 0; i < length;i++){
        newPw += strong[Math.floor(Math.random() * strong.length)];
    }
   }
   else{
    for(let i = 0; i < length;i++){
        newPw += weak[Math.floor(Math.random() * weak.length)];
    }
   }

   display.value = newPw;


   
}



// Range Value

range.addEventListener("change",() => {
    rangeRes.innerHTML = range.value;
});


// Copy

copy.addEventListener("click",() => {
    if(display.value){
        display.select();
        display.setSelectionRange(0,99999);

        navigator.clipboard.writeText(display.value);
        alert("Copy Success!");
    }
})