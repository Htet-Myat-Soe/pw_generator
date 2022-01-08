const display = document.querySelector(".res-text");
const button = document.querySelector(".generate");
const range = document.querySelector("#range");
const num = document.querySelector("#number");
const char = document.querySelector("#special-char");
const copy = document.querySelector(".copy");

const strongest = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()<>,.?/||:;`;
const strong = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>,.?/||:;`;
const middle = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`;
const weak = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;

button.addEventListener("click",generatePw);

function generatePw(){
    let length = range.value;
    let numCheck = num.checked;
    let charCheck = char.checked;

    let genPw = '';

    if(numCheck && charCheck){
        for(let i = 0; i < length; i++){
            genPw += strongest[Math.floor(Math.random() * strongest.length)];
        }
    }
    else if(numCheck){
        for(let i = 0; i < length; i++){
            genPw += middle[Math.floor(Math.random() * middle.length)];
        }
    }
    else if(charCheck){
        for(let i = 0; i < length; i++){
            genPw += strong[Math.floor(Math.random() * strong.length)];
        }
    }
    else{
        for(let i = 0; i < length; i++){
            genPw += weak[Math.floor(Math.random() * weak.length)];
        }
    }
    

    display.value = genPw;
}

range.addEventListener("change",() => {
    document.querySelector(".range-res").innerHTML = range.value;
});

copy.addEventListener("click",() => {
    display.select();
    display.setSelectionRange(0,9999);

    navigator.clipboard.writeText(display.value);

    alert("Copy Success");

    display.value = '';
})