/*
function greeting(){
    console.log('hello');
}
greeting();
const num = 2 ; 
const functionVar = function (){
    console.log("Hellooo");
}
console.log(functionVar);
console.log(typeof functionVar);
functionVar();
*/
setTimeout(function(){
    console.log('timeout');
},8000);
console.log("Next Line1");
setInterval(function() {
    console.log('Interval');
}, 5000);
console.log("Next Line2");
