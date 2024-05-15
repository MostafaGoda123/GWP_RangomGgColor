let section = document.querySelector("section")
let button = document.querySelector("button")

button.addEventListener("click" , function () {
   section.style.background = `#${Math.random().toString().slice(3,9)}`
   console.log(Math.random().toString(16).slice(3,9));
})
/*
rgb(255,255,255)
arr = [0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F]
*/
