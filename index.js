const answerArray = ["It will work", "Maybe maybe not", "Probably Not", "Highly Liely", "I do not know"];
const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function(){
console.log(question.value);
let res = Math.floor(Math.random()*answerArray.length);
console.log(answerArray[res]);
message.innerHTML = question.value + "" + answerArray[res] + "<br>";
question.value = "";
})