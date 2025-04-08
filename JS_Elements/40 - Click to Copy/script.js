let getTextElement = document.querySelector('.code');
let getPasteBox = document.querySelector('.paste-box');
let getButton = document.querySelector('#but');

getButton.addEventListener("click", copyText);

function copyText() {
  let getTextValue = document.querySelector('.code').innerText;
  
  let inputElement = document.createElement('input');
  inputElement.setAttribute('value', getTextValue);
  document.body.appendChild(inputElement);
  
  inputElement.select();
  document.execCommand('copy');
  
  inputElement.parentNode.removeChild(inputElement);
  
  getTextElement.style.cssText = "background-color: blue; color: #fff;";
 
  localStorage.setItem("sendCopiedValue", getTextValue);
}

document.addEventListener("click", function(e){
  if(e.target === document.body){
    getTextElement.style.cssText = "background-color: unset; color: unset;";
  }
 });

getPasteBox.addEventListener("click", function(){
  let receiveCopiedValue = localStorage.getItem("sendCopiedValue");
  console.log(receiveCopiedValue);
  let createParaElement = document.createElement('p');
   createParaElement.innerText = receiveCopiedValue;
  getPasteBox.appendChild(createParaElement);
  
});

