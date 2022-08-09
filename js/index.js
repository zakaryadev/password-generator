const input = document.querySelector(".input");
const range = document.querySelector(".slider");
const rangeVal = document.querySelector(".value");
const isUppercase = document.querySelector("#uppercase"),
  isNumbers = document.querySelector("#numbers"),
  isSymbols = document.querySelector("#symbols"),
  btn = document.querySelector(".button"),
  copyBtn = document.querySelector(".copy");



const uppercase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ]
const letters = [ 'a', 'b', 'c', 'd', 'e', 'c', 'f', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
'y', 'z' ]
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ["~","!","@","-","#","$"]

range.addEventListener("input", (event) => {
  rangeVal.innerHTML = event.target.value;
});
let pswrd ="";
function generator(arr) {
  for (let i = 0; i < range.value; i++) {
    pswrd = pswrd + arr[Math.floor(Math.random()*arr.length)];
  }
  input.value = pswrd;
  pswrd ="";
}

btn.addEventListener("click", () => {
    generator(letters)
    if(isUppercase.checked === true) {
      const arr1 = letters.concat(uppercase);
      generator(arr1)
    }
    if(isNumbers.checked === true) {
      const arr1 = letters.concat(numbers);
      generator(arr1)
    }
    if(isSymbols.checked === true) {
      const arr1 = letters.concat(symbols);
      generator(arr1)
    }
    
    if(isUppercase.checked && isNumbers.checked === true) {
      const arr1 = letters.concat(uppercase);
      const arr2 = arr1.concat(numbers);
      generator(arr2)
    }
    
    if(isUppercase.checked && isSymbols.checked === true) {
      const arr1 = letters.concat(uppercase);
      const arr2 = arr1.concat(symbols);
      generator(arr2)
    }
    
    if(isNumbers.checked && isSymbols.checked === true) {
      const arr1 = letters.concat(numbers);
      const arr2 = arr1.concat(symbols);
      generator(arr2)
    }

    if(isUppercase.checked && isNumbers.checked && isSymbols.checked === true) {
      const arr1 = letters.concat(uppercase);
      const arr2 = arr1.concat(symbols);
      const arr3 = arr2.concat(numbers);
      generator(arr3)
    }
})





function copyToClipboard() {
  const copyText = input;
  navigator.clipboard.writeText(copyText.value);
}

copyBtn.addEventListener("click", copyToClipboard);